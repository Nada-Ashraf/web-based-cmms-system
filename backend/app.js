// Required External Modules
const mongoose = require("mongoose");
const express = require("express");
const assets = require("./routes/assets");
const auth = require("./routes/auth");
const reports = require("./routes/reports");
const employees = require("./routes/employees");
const users = require("./routes/users");
const pms = require("./routes/pms");
const bodyParser = require("body-parser");
// App Variables
const app = express();
const port = process.env.PORT || 3000;

// Middlewaresemployees
employees;
app.use(bodyParser.json());
app.use(express.urlencoded());

// Database Connection
mongoose
  .connect("mongodb://admin:admin@localhost/cmms?authSource=admin", {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Couldn't connect to MongoDB...", err));

// Use Routes
app.use("/api/assets", assets);
app.use("/api/reports", reports);
app.use("/api/employees", employees);
app.use("/api/pms", pms);
app.use("/api/auth", auth);
app.use("/api/users", users);

// Server Activation
app.listen(port, () => console.log(`listening in port ${port}...`));
