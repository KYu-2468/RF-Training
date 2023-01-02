/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  // {
  //   path: "/app/dashboard", // the url
  //   icon: "HomeIcon", // the component being exported from icons/index.js
  //   name: "Dashboard", // name that appear in Sidebar
  // },
  {
    path: "/app/overview",
    icon: "FormsIcon",
    name: "Overview",
  },
  {
    path: "/app/rf-basic",
    icon: "CardsIcon",
    name: "RF Basic",
    routes: [
      // submenu
      {
        path: "/app/basic",
        name: "1 - Basic",
      },
      {
        path: "/app/rf-frequency",
        name: "2 - RF Frequency",
      },
      {
        path: "/app/rf-cables-splitters",
        name: "3 - RF Cables and Splitters",
      },
      {
        path: "/app/rf-path-loss",
        name: "4 - RF Path Loss",
      },
    ],
  },
  {
    path: "/app/rf-tests",
    icon: "ChartsIcon",
    name: "RF Tests",
    routes: [
      // submenu
      {
        path: "/app/test-intro",
        name: "1 - Intro",
      },
      {
        path: "/app/test-basic",
        name: "2 - Basic",
      },
      {
        path: "/app/test-4g",
        name: "3 - 4G RF Test",
      },
      // {
      //   path: "/app/test-4g-ca",
      //   name: "3 - 4G RF CA Test",
      // },
      {
        path: "/app/test-5g",
        name: "4 - 5G RF Test",
      },
    ],
  },
  {
    path: "/app/rf-automation",
    icon: "ButtonsIcon",
    name: "Automation",
    routes: [
      // submenu
      {
        path: "/app/at-automation",
        name: "1 - AT Automation",
      },
      {
        path: "/app/adb-automation",
        name: "2 - ADB Automation",
      },
      {
        path: "/app/power-automation",
        name: "3 - Power Automation",
      },
    ],
  },
  {
    path: "/app/rf-setup-4g",
    icon: "TablesIcon",
    name: "RF Setup 4G",
    routes: [
      // submenu
      {
        path: "/app/rf-setup-intro",
        name: "1 - RF Setup Intro",
      },
      {
        path: "/app/rf-setup-4g-basic",
        name: "2 - RF Setup Basic",
      },
      {
        path: "/app/rf-setup-4g-anritsu",
        name: "3 - TP104 / TP149 Anritsu",
      },
      {
        path: "/app/rf-setup-4g-rns",
        name: "4 - TP098 Rohde & Schwarz",
      },
    ],
  },
  {
    path: "/app/rf-setup-5g",
    icon: "TablesIcon",
    name: "RF Setup 5G",
    routes: [
      // submenu
      {
        path: "/app/rf-setup-5g-basic",
        name: "1 - RF Setup Basic",
      },
      {
        path: "/app/rf-setup-5g-keysight",
        name: "2 - TP168 Keysight",
      },
      {
        path: "/app/rf-setup-5g-anritsu",
        name: "3 - TP250 Anritsu",
      },
    ],
  },
  {
    path: "/app/debugging",
    icon: "ModalsIcon",
    name: "Debug",
  },
  {
    path: "/app/login",
    icon: "FormsIcon",
    name: "Login",
  },
  // {
  //   path: '/app/cards',
  //   icon: 'CardsIcon',
  //   name: 'Cards',
  // },
  // {
  //   path: '/app/charts',
  //   icon: 'ChartsIcon',
  //   name: 'Charts',
  // },
  // {
  //   path: '/app/buttons',
  //   icon: 'ButtonsIcon',
  //   name: 'Buttons',
  // },
  // {
  //   path: '/app/modals',
  //   icon: 'ModalsIcon',
  //   name: 'Modals',
  // },
  // {
  //   path: '/app/tables',
  //   icon: 'TablesIcon',
  //   name: 'Tables',
  // },
  // {
  //   icon: 'PagesIcon',
  //   name: 'Pages',
  //   routes: [
  //     // submenu
  //     {
  //       path: '/login',
  //       name: 'Login',
  //     },
  //     {
  //       path: '/create-account',
  //       name: 'Create account',
  //     },
  //     {
  //       path: '/forgot-password',
  //       name: 'Forgot password',
  //     },
  //     {
  //       path: '/app/404',
  //       name: '404',
  //     },
  //     {
  //       path: '/app/blank',
  //       name: 'Blank',
  //     },
  //   ],
  // },
];

export default routes;
