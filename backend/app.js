// Required External Modules
const mongoose = require("mongoose");
const express = require("express");
// const assets = require("./routes/assets");
import assetRoutes from "./routes/assets";
const auth = require("./routes/auth");
const reports = require("./routes/reports");
const employees = require("./routes/employees");
const users = require("./routes/users");
const wos = require("./routes/wos");
const pms = require("./routes/pms");
const bodyParser = require("body-parser");
// App Variables
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());
app.use(express.urlencoded());
// app.use(express.urlencoded({ extended: true }));

// Database Connection
mongoose
  .connect("mongodb://admin:admin@localhost/cmms?authSource=admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Couldn't connect to MongoDB...", err));

// Use Routes
app.use("/api/assets", assetRoutes);
app.use("/api/reports", reports);
app.use("/api/employees", employees);
app.use("/api/pms", pms);
app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/wos", wos);

// Server Activation
app.listen(port, () => console.log(`listening in port ${port}...`));
