
const express = require("express");
const cors = require("cors");

const app = express();

const bookRoutes = require("./routes/book.route");

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:3001",
      "http://localhost:5173",
    ],
  })
);

app.use(express.json());

// Routes
app.use("/api", bookRoutes);

module.exports = app;
