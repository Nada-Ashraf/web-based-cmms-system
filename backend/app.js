// Required External Modules
const mongoose = require("mongoose");
const express = require("express");
import assetRoutes from "./routes/assets";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";
import workOrderRoutes from "./routes/workOrders";
import pmRoutes from "./routes/pms";

const bodyParser = require("body-parser");
// App Variables
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());
app.use(express.urlencoded());

// Database Connection
mongoose
  .connect("mongodb://admin:admin@localhost/cmms?authSource=admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Couldn't connect to MongoDB...", err));

// Use Routes
app.use("/api/assets", assetRoutes);
app.use("/api/pms", pmRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/wos", workOrderRoutes);

// Server Activation
app.listen(port, () => console.log(`listening in port ${port}...`));
