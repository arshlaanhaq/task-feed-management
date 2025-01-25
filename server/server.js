const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Import Routes
const taskRoutes = require("./routes/task");
const authRoutes = require("./routes/auth");
const feedRoutes = require("./routes/feed");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect Database
connectDB();

// Routes Middleware 
app.use("/api/task", taskRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/feed", feedRoutes);

// Start Server
const PORT =process.env.PORT|| 5000
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))