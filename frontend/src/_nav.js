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
      name: "Reports",
      url: "/Reports",
      icon: "icon-docs",
      children: [
        {
          name: "PM",
          url: "",
          icon: "icon-refresh",
        },
        {
          name: "Repair",
          url: "",
          icon: "icon-wrench",
        },
      ],
    },
  ],
};
