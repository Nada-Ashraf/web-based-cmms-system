// Required External Modules
const mongoose = require("mongoose");
const express = require("express");
const assets = require("./routes/asset");
const bodyParser = require("body-parser");

// App Variables
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());

// Database Connection
mongoose
  .connect("mongodb://admin:admin@localhost/cmms?authSource=admin", {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Couldn't connect to MongoDB...", err));

// Routes files
app.use("/api/assets", assets);

// Server Activation
app.listen(port, () => console.log(`listening in port ${port}...`));
