export default {
  items: [
    {
      name: "Assets",
      url: "/Assets",
      icon: "icon-screen-desktop",
    },
    {
      name: "Employees",
      url: "/Employees",
      icon: "icon-user",
    },
    {
      name: "PMs",
      url: "/PMs",
      icon: "icon-user",
    },
    {
      name: "Reports",
      url: "/Reports",
      icon: "icon-docs",
      children: [
        {
          name: "PMs",
          url: "/Reports/PMs",
          icon: "icon-refresh",
        },
        {
          name: "WOs",
          url: "Reports/WOs",
          icon: "icon-wrench",
        },
      ],
    },
  ],
};
