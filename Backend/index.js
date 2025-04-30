// index.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

dotenv.config();

// Connect to the database
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Use the user routes
app.use("/api/users", userRoutes);

// Basic GET routes for testing
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.json({ message: "Test route working!" });
});

app.get("/api/test", (req, res) => {
  res.json({ 
    status: "success",
    message: "API is working properly"
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
