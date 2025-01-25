const express = require('express')
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require('../controllers/taskController')
const authenticate = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/', authenticate, createTask) // Create a task
router.get('/', authenticate, getTasks)  // Get all tasks
router.put('/:id', authenticate, updateTask)// Update a task
router.delete('/:id', authenticate, deleteTask) // Delete a task

module.exports = router
