   # Task Management and Feed Application

   A web-based application combining task management with feed functionality. Users can manage tasks using drag-and-drop features and share posts through a feed. This application is built with the MERN stack.

   ---
      
   ## Features
   
   ### Task Management
   1. **Create Tasks**: Users can add tasks with a name and description.
   2. **Task Columns**: Tasks are displayed in three columns:
      - Pending
      - Completed
      - Done
      Users can drag and drop tasks between columns, and the status updates accordingly.
   3. **Delete Tasks**: Each task has a delete button. Users are prompted for confirmation before deletion.

  ### Feed
   1. **Create Posts**: Users can create posts with a title and content to share updates.
   2. **View All Posts**: A feed displays all posts shared by users.

   ### Cloudinary Integration:
   1. **Image Upload**: Users can upload images to Cloudinary through the application.These images are securely stored and can be accessed via a URL.
   2. **Secure URL Generation**: After uploading an image, Cloudinary generates a secure URL that is stored in the application's database for each post.
   3. **Efficient Image Management**: Cloudinary offers automatic image resizing and optimization for different screen sizes, improving load times and user experience.
  


   ---

   ## Technologies Used

   ### Frontend:
   - React.js
   - Axios
   - React Beautiful DnD
   - Tailwind CSS

   ### Backend:
   - Node.js
   - Express.js
   - MongoDB

   ---

   ## Prerequisites

   - Node.js installed on your system.
   - MongoDB installed locally or accessible via a cloud service.
   - A browser to access the application.
   - Authentication requires a valid JWT.

   ---

   ## Installation

   ### 1. Clone the Repository:
   ```bash
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app
   ```

   ###  2. Install Dependencies:
   Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
   Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```
   ---


   ## Usage
   ### 1. Start the Backend Server:
   ```bash
   cd backend
   npm start
   ```

   ### 2. Start the Frontend Server:
   ```bash
   cd ../frontend
   npm start
   ```

   ### 3. Access the Application:
   Open your browser and navigate to http://localhost:3000.

   ---
   ## API Endpoints

   ### Authentication:

   - POST /api/auth/register: Register a new user.
   - POST /api/auth/login: Login with existing credentials.

   ### Tasks:
   - POST /api/task: Create a task.
   - GET /api/task: Fetch all tasks for the authenticated user.
   - PUT /api/task/:id: Update the status of a task.
   - DELETE /api/task/:id: Delete a task.

   ### Feed:
   - GET /api/feed: Fetch the feed for the authenticated user.
   - POST /api/feed: Create a new feed item.
   ---
   ## Environment Variables
   ### Backend .env file:
   ```env
   PORT=5000
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   ```
   ### Frontend .env file:
   ```env
   VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name
   VITE_UPLOAD_PRESET=your-upload-preset
   ```


   ---
   ## Contributing
   ### Contributions are welcome! Please follow these steps:

   1. Fork the repository.
   2. Create a new branch: git checkout -b feature-name.
   3. Commit your changes: git commit -m "Add a feature".
   4. Push the branch: git push origin feature-name.
   5. Open a pull request.

   ---
   ## Contact
   If you have any questions or suggestions, feel free to reach out!

   - Email: arshlaanhaq005@gmail.com