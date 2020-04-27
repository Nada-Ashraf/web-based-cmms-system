// Load modules
const mongoose = require("mongoose");
const express = require("express");

// instaniate express module
const app = express();

// mongoose connect method returns a promise
mongoose
  .connect("mongodb://localhost/cmms")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Couldn't connect to MongoDB...", err));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening in port ${port}...`));
