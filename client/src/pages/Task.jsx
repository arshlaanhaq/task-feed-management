import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from "axios";
import Footer from "../components/Footer" 
import Navbar from "../components/Navbar";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
 

  // Fetch tasks from the server
  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/task", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setTasks(res.data);
    } catch (error) {
      setErrorMessage("Failed to load tasks. Please try again later.");
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Handle drag and drop
  const handleDragEnd = async (result) => {
    if (!result.destination) return;

    const updatedTasks = Array.from(tasks);
    const [movedTask] = updatedTasks.splice(result.source.index, 1);
    movedTask.status = result.destination.droppableId;
    updatedTasks.splice(result.destination.index, 0, movedTask);

    setTasks(updatedTasks);

    try {
      await axios.put(`http://localhost:5000/api/task/${movedTask._id}`, {
        status: movedTask.status,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    } catch (error) {
      console.error("Error updating task status:", error);
      fetchTasks(); // Revert UI on failure
    }
  };

  // Add a new task
  const addTask = async (e) => {
    e.preventDefault();
    if (!taskName || !taskDescription) {
      alert("Please provide both task name and description.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/task", {
        name: taskName,
        description: taskDescription,
        status: "Pending",
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setTasks([...tasks, res.data]);
      setTaskName("");
      setTaskDescription("");
    } catch (error) {
      alert("Failed to add task. Please try again.");
      console.error("Error adding task:", error);
    }
  };

  // Delete a task
  const deleteTask = async (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await axios.delete(`http://localhost:5000/api/task/${taskId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setTasks(tasks.filter((task) => task._id !== taskId));
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }
  };

  return (
    
      
    <div className="h-screen flex flex-col justify-between gap-2">
      <div>
    <Navbar />
      {/* Error Message */}
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
        <div>
      {/* Task Creation Form */}
      <form onSubmit={addTask} className="mb-6 mt-6 ">
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="p-2 border border-gray-300 rounded w-1/3"
          />
          <input
            type="text"
            placeholder="Task Description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="p-2 border border-gray-300 rounded w-1/3"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
          >
            Add Task
          </button>
         
        </div>
      </form>
     
      {/* Drag-and-Drop Task Columns */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-3 gap-4">
          {["Pending", "Completed", "Done"].map((status) => (
            <Droppable droppableId={status} key={status}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="p-4 border rounded bg-gray-100"
                >
                  <h3 className="text-lg font-bold mb-4">{status}</h3>
                  {tasks
                    .filter((task) => task.status === status)
                    .map((task, index) => (
                      <Draggable
                        key={task._id}
                        draggableId={task._id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            className="p-4 bg-white rounded shadow mb-4 flex justify-between items-center hover:bg-gray-50"
                          >
                            <div>
                              <h4 className="font-semibold">{task.name}</h4>
                              <p className="text-sm text-gray-600">
                                {task.description}
                              </p>
                            </div>
                            <button
                              onClick={() => deleteTask(task._id)}
                              className="text-red-500 hover:underline"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
      </div>
      </div>
      <Footer />
    </div>
     
  );
};

export default Tasks;
