import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Login = lazy(() => import("../pages/Login"));
const Overview = lazy(() => import("../pages/Overview"));

const RFBasic = lazy(() => import("../pages/RF-Basic/RFBasic"));
const RFFrequency = lazy(() => import("../pages/RF-Basic/RFFrequency"));
const RFCablesAndSplitters = lazy(() =>
  import("../pages/RF-Basic/RFCablesAndSplitters")
);
const RFPathLoss = lazy(() => import("../pages/RF-Basic/RFPathLoss"));

const RFTestIntro = lazy(() => import("../pages/RF-Tests/RFTestIntro"));
const RFTestBasic = lazy(() => import("../pages/RF-Tests/RFTestBasic"));
const RFTest4G = lazy(() => import("../pages/RF-Tests/RFTest4G"));
const RFTest5G = lazy(() => import("../pages/RF-Tests/RFTest5G"));

const RFSetupIntro = lazy(() => import("../pages/Setup-4G/RFSetupIntro"));
const RFSetup4GBasic = lazy(() => import("../pages/Setup-4G/RFSetup4GBasic"));
const RFSetup4GRnS = lazy(() => import("../pages/Setup-4G/RFSetup4GRnS"));
const RFSetup4GAnritsu = lazy(() =>
  import("../pages/Setup-4G/RFSetup4GAnritsu")
);

const RFSetup5GBasic = lazy(() => import("../pages/Setup-5G/RFSetup5GBasic"));
const RFSetup5GKeysight = lazy(() =>
  import("../pages/Setup-5G/RFSetup5GKeysight")
);

const ATCommand = lazy(() => import("../pages/Automation/ATCommand"));
const ADBCommand = lazy(() => import("../pages/Automation/ADBCommand"));

const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: "/overview",
    component: Overview,
  },
  {
    path: "/rf-basic",
    component: RFBasic,
  },
  {
    path: "/basic",
    component: RFBasic,
  },
  {
    path: "/rf-frequency",
    component: RFFrequency,
  },
  {
    path: "/rf-cables-splitters",
    component: RFCablesAndSplitters,
  },
  {
    path: "/rf-path-loss",
    component: RFPathLoss,
  },
  {
    path: "/rf-tests",
    component: RFTestBasic,
  },
  {
    path: "/test-basic",
    component: RFTestBasic,
  },
  {
    path: "/test-intro",
    component: RFTestIntro,
  },
  {
    path: "/test-4g",
    component: RFTest4G,
  },
  {
    path: "/test-5g",
    component: RFTest5G,
  },
  {
    path: "/rf-setup-intro",
    component: RFSetupIntro,
  },
  {
    path: "/rf-setup-4g-basic",
    component: RFSetup4GBasic,
  },
  {
    path: "/rf-setup-4g-anritsu",
    component: RFSetup4GAnritsu,
  },
  {
    path: "/rf-setup-4g-rns",
    component: RFSetup4GRnS,
  },
  {
    path: "/rf-setup-5g-basic",
    component: RFSetup5GBasic,
  },
  {
    path: "/rf-setup-5g-keysight",
    component: RFSetup5GKeysight,
  },
  {
    path: "/at-automation",
    component: ATCommand,
  },
  {
    path: "/adb-automation",
    component: ADBCommand,
  },
  // {
  //   path: "/power-automation",
  //   component: Tables,
  // },
  // {
  //   path: "/debugging",
  //   component: Tables,
  // },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
];

export default routes;
