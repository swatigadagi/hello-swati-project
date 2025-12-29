const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

// ROOT ROUTE (FIX)
app.get("/", (req, res) => {
  res.send("Hello Swati - Backend is running 🚀");
});

// API ROUTE
app.get("/api/greet", (req, res) => {
  res.json({ message: "Hello Swati" });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});

