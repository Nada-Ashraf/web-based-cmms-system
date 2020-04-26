const mongoose = require("mongoose");

// mongoose connect method returns a promise
mongoose
  .connect("mongodb://localhost/cmms")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Couldn't connect to MongoDB...", err));
