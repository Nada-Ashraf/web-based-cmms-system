import React from "react";
const Dashboard = React.lazy(() => import("./views/Dashboard"));
const Assets = React.lazy(() => import("./views/Assets/Assets"));
const AssetDetails = React.lazy(() => import("./views/Assets/AssetDetails"));
const AddAsset = React.lazy(() => import("./views/Assets/AddAsset"));
const AddAssetPMs = React.lazy(() => import("./views/Assets/AddAssetPMs"));
const Employees = React.lazy(() => import("./views/Employees/Employees"));
const AddEmployee = React.lazy(() => import("./views/Employees/AddEmployee"));
const Reports = React.lazy(() => import("./views/Reports/Reports"));
const Users = React.lazy(() => import("./views/Users/Users"));
const User = React.lazy(() => import("./views/Users/User"));
const PMs = React.lazy(() => import("./views/PMs/PMs"));
const WOs = React.lazy(() => import("./views/WOs/WOs"));
// const Login = React.lazy(() => import("./views/Auth/Login"));
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home" },
  // { path: "/", exact: true, name: "Login", component: Login },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/Assets", exact: true, name: "Assets", component: Assets },
  { path: "/PMs", exact: true, name: "PMs", component: PMs },
  { path: "/WOs", exact: true, name: "WOs", component: WOs },
  {
    path: "/Assets/add_asset",
    exact: true,
    name: "Add Asset",
    component: AddAsset,
  },
  {
    path: "/Assets/add_asset/:id",
    name: "",
    component: AddAssetPMs,
  },
  { path: "/Assets/:id", name: "Asset Details", component: AssetDetails },
  { path: "/Employees", exact: true, name: "Employees", component: Employees },
  {
    path: "/Employees/add_employee",
    exact: true,
    name: "Register Employee",
    component: AddEmployee,
  },
  { path: "/Reports", name: "Reports", component: Reports },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },
];

export default routes;
