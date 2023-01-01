import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Overview = lazy(() => import("../pages/Overview"));
const RFBasic = lazy(() => import("../pages/RFBasic"));
const RFFrequency = lazy(() => import("../pages/RFFrequency"));
const RFCablesAndSplitters = lazy(() =>
  import("../pages/RFCablesAndSplitters")
);
const RFPathLoss = lazy(() => import("../pages/RFPathLoss"));
const Login = lazy(() => import("../pages/LoginVersion2"));
const RFTestBasic = lazy(() => import("../pages/RFTestBasic"));
const RFTest4G = lazy(() => import("../pages/RFTest4G"));
const RFTest5G = lazy(() => import("../pages/RFTest5G"));
const RFSetupBasic = lazy(() => import("../pages/RFSetupBasic"));
const RFSetup4G = lazy(() => import("../pages/RFSetup4G"));
const RFTestIntro = lazy(() => import("../pages/RFTestIntro"));
const ManualTesting = lazy(() => import("../pages/ManualTesting"));
const ATCommand = lazy(() => import("../pages/ATCommand"));
const ADBCommand = lazy(() => import("../pages/ADBCommand"));
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
    path: "/rf-setup-basic",
    component: RFSetupBasic,
  },
  {
    path: "/rf-setup-4g-anritsu",
    component: RFSetup4G,
  },
  {
    path: "/rf-setup-4g-rns",
    component: RFSetup4G,
  },
  {
    path: "/rf-setup-5g-keysight",
    component: RFSetup4G,
  },
  // {
  //   path: "/rf-setup-5g",
  //   component: Modals,
  // },
  // {
  //   path: "/rf-automation",
  //   component: Tables,
  // },
  // {
  //   path: "/automation-basic",
  //   component: Tables,
  // },
  {
    path: "/manual-testing",
    component: ManualTesting,
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
