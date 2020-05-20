import React from "react";
// const Dashboard = React.lazy(() => import("./views/Dashboard"));
const PMdetails = React.lazy(() => import("./views/PMs/PMdetails"));
const AssetDetails = React.lazy(() => import("./views/Assets/AssetDetails"));
const Assets = React.lazy(() => import("./views/Assets/Assets"));
const AddAsset = React.lazy(() => import("./views/Assets/AddAsset"));
const EditAsset = React.lazy(() => import("./views/Assets/EditAsset"));
const Employees = React.lazy(() => import("./views/Employees/Employees"));
const AddEmployee = React.lazy(() => import("./views/Employees/AddEmployee"));
const PMReports = React.lazy(() => import("./views/Reports/PMReports"));
const WOReports = React.lazy(() => import("./views/Reports/WOReports"));
const ViewPmReport = React.lazy(() => import("./views/Reports/ViewPmReport"));
const ViewWOReport = React.lazy(() => import("./views/Reports/ViewWOReport"));
const Users = React.lazy(() => import("./views/Users/Users"));
const User = React.lazy(() => import("./views/Users/User"));
const PMs = React.lazy(() => import("./views/PMs/PMs"));
const AssignPM = React.lazy(() => import("./views/PMs/AssignPM"));
const CompletePM = React.lazy(() => import("./views/PMs/CompletePM"));
const CompleteWO = React.lazy(() => import("./views/WOs/CompleteWO"));
const WOs = React.lazy(() => import("./views/WOs/WOs"));
const AddWO = React.lazy(() => import("./views/WOs/AddWO"));
const WOdetails = React.lazy(() => import("./views/WOs/WOdetails"));
// const Login = React.lazy(() => import("./views/Auth/Login"));
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  // { path: "/", exact: true, name: "Home" },
  // { path: "/", exact: true, name: "Login", component:Login },
  // { path: "/home/dashboard", name: "Dashboard", component: Dashboard },
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
  {
    path: "/home/WOs/complete_wo",
    exact: true,
    name: "Complete WO",
    component: CompleteWO,
  },
  { path: "/home/WOs", exact: true, name: "WOs", component: WOs },
  { path: "/home/WOs/Add_WO", exact: true, name: "Add WO", component: AddWO },
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
    path: "/home/PMs/:id",
    name: "PM details",
    component: PMdetails,
  },
  {
    path: "/home/WOs/:id",
    exact: true,
    name: "WO details",
    component: WOdetails,
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
  {
    path: "/home/Reports/PMs",
    exact: true,
    name: "PM Reports",
    component: PMReports,
  },
  {
    path: "/home/Reports/WOs",
    exact: true,
    name: "WO Reports",
    component: WOReports,
  },
  {
    path: "/home/Reports/PMs/:id",
    exact: true,
    name: "View PM Report",
    component: ViewPmReport,
  },
  {
    path: "/home/Reports/WOs/:id",
    exact: true,
    name: "View WO Report",
    component: ViewWOReport,
  },
  { path: "/home/users", exact: true, name: "Users", component: Users },
  {
    path: "/home/users/:id",
    exact: true,
    name: "User Details",
    component: User,
  },
];

export default routes;
