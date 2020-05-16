import React from "react";
const Dashboard = React.lazy(() => import("./views/Dashboard"));
const PMdetails = React.lazy(() => import("./views/PMs/PMdetails"));
const AssetDetails = React.lazy(() => import("./views/Assets/AssetDetails"));
const Assets = React.lazy(() => import("./views/Assets/Assets"));
const AddAsset = React.lazy(() => import("./views/Assets/AddAsset"));
const EditAsset = React.lazy(() => import("./views/Assets/EditAsset"));
const AddAssetPMs = React.lazy(() => import("./views/Assets/AddAssetPMs"));
const Employees = React.lazy(() => import("./views/Employees/Employees"));
const AddEmployee = React.lazy(() => import("./views/Employees/AddEmployee"));
const Reports = React.lazy(() => import("./views/Reports/Reports"));
const Users = React.lazy(() => import("./views/Users/Users"));
const User = React.lazy(() => import("./views/Users/User"));
const PMs = React.lazy(() => import("./views/PMs/PMs"));
const AssignPM = React.lazy(() => import("./views/PMs/AssignPM"));
const CompletePM = React.lazy(() => import("./views/PMs/CompletePM"));
const WOs = React.lazy(() => import("./views/WOs/WOs"));
// const Login = React.lazy(() => import("./views/Auth/Login"));
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  // { path: "/", exact: true, name: "Home" },
  // { path: "/", exact: true, name: "Login", component:Login },
  { path: "/home/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/home/Assets", exact: true, name: "Assets", component: Assets },
  { path: "/home/PMs", exact: true, name: "PMs", component: PMs },
  {
    path: "/home/PMs/assign_pm",
    exact: true,
    name: "Assign PM",
    component: AssignPM,
  },
  {
    path: "/home/PMs/complete_pm",
    exact: true,
    name: "Complete PM",
    component: CompletePM,
  },
  { path: "/home/WOs", exact: true, name: "WOs", component: WOs },
  {
    path: "/home/Assets/add_asset",
    exact: true,
    name: "Add Asset",
    component: AddAsset,
  },
  {
    path: "/home/Assets/edit_asset",
    exact: true,
    name: "Edit Asset",
    component: EditAsset,
  },
  {
    path: "/home/Assets/add_asset/:id",
    name: "",
    component: AddAssetPMs,
  },
  {
    path: "/home/PMs/:id",
    name: "PM details",
    component: PMdetails,
  },
  { path: "/home/Assets/:id", name: "Asset Details", component: AssetDetails },
  {
    path: "/home/Employees",
    exact: true,
    name: "Employees",
    component: Employees,
  },
  {
    path: "/home/Employees/add_employee",
    exact: true,
    name: "Register Employee",
    component: AddEmployee,
  },
  { path: "/home/Reports", name: "Reports", component: Reports },
  { path: "/home/users", exact: true, name: "Users", component: Users },
  {
    path: "/home/users/:id",
    exact: true,
    name: "User Details",
    component: User,
  },
];

export default routes;
