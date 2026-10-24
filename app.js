const express = require("express");

const app = express();

const logger = require("./middleware");
const studentRoutes = require("./studentroutes");

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use("/students", studentRoutes);

// Home route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Student Management API is running"
    });
});

// Error handling
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});