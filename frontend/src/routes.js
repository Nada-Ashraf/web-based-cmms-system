import React from "react";
const Dashboard = React.lazy(() => import("./views/Dashboard"));
const Assets = React.lazy(() => import("./views/Assets/Assets"));
const Asset = React.lazy(() => import("./views/Assets/Asset"));
const AddAsset = React.lazy(() => import("./views/Assets/AddAsset"));
const Employees = React.lazy(() => import("./views/Employees/Employees"));
const Reports = React.lazy(() => import("./views/Reports/Reports"));
const Users = React.lazy(() => import("./views/Users/Users"));
const User = React.lazy(() => import("./views/Users/User"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/Assets", exact: true, name: "Assets", component: Assets },
  {
    path: "/Assets/add_asset",
    exact: true,
    name: "Add Asset",
    component: AddAsset,
  },
  // { path: "/Assets/:id", name: "Asset Details", component: Asset },
  { path: "/Employees", name: "Employees", component: Employees },
  { path: "/Reports", name: "Reports", component: Reports },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },
];

export default routes;
