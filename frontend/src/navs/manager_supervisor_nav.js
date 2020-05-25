export default {
  items: [
    {
      name: "Assets",
      url: "/home/Assets",
      icon: "icon-screen-desktop",
    },
    {
      name: "Employees",
      url: "/home/Employees",
      icon: "icon-user",
    },
    {
      name: "PMs",
      url: "/home/PMs",
      icon: "icon-shield",
    },
    {
      name: "WOs",
      url: "/home/WOs",
      icon: "icon-wrench",
    },
    {
      name: "Reports",
      url: "",
      icon: "icon-docs",
      children: [
        {
          name: "PMs",
          url: "/home/Reports/PMs",
          icon: "icon-refresh",
        },
        {
          name: "WOs",
          url: "/home/Reports/WOs",
          icon: "icon-wrench",
        },
        {
          name: "Departments Reports",
          url: "/home/DepartmentReports",
          icon: "icon-wrench",
        },
      ],
    },
  ],
};
