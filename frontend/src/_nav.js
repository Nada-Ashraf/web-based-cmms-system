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
      url: "/home/Reports",
      icon: "icon-docs",
      children: [
        {
          name: "PMs",
          url: "/home/Reports/PMs",
          icon: "icon-refresh",
        },
        {
          name: "WOs",
          url: "/homeReports/WOs",
          icon: "icon-wrench",
        },
      ],
    },
  ],
};
