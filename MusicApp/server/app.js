// app.js

// express module
const express = require("express");
// Cors Module
const cors = require("cors");
// App 
const app = express();
// Port number
const PORT = 4000;

// GET Method => server[req, res]
app.get("/", (req, res) => {
  return res.json("Hi There?");
});

// Server start log Message => "Listening to port number"
app.listen(4000, () => console.log(`Listening to port ${PORT}`));