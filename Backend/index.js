// index.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

// Connect to the database
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON requests

// Use the user routes
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
