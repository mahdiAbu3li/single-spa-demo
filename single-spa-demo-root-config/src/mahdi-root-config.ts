// import { registerApplication, start } from "single-spa";
// import {
//   constructApplications,
//   constructRoutes,
//   constructLayoutEngine,
// } from "single-spa-layout";
// import microfrontendLayout from "./microfrontend-layout.html";

// const routes = constructRoutes(microfrontendLayout);
// const applications = constructApplications({
//   routes,
//   loadApp({ name }) {
//     return System.import(name);
//   },
// });
// const layoutEngine = constructLayoutEngine({ routes, applications });

// applications.forEach(registerApplication);
// layoutEngine.activate();
// start();




import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@mahdi/single-spa-demo-nav",
  () => System.import("@mahdi/single-spa-demo-nav"),
  isActive.nav,
  { domElement: document.getElementById('nav-container') }
);

registerApplication(
  "@mahdi/single-spa-demo-page-1",
  () => System.import("@mahdi/single-spa-demo-page-1"),
  isActive.page1,
  { domElement: document.getElementById('page-1-container') }
);

registerApplication(
  "@mahdi/single-spa-demo-page-2",
  () => System.import("@mahdi/single-spa-demo-page-2"),
  isActive.page2,
  { domElement: document.getElementById('page-2-container') },
  
);
registerApplication(
  "@mahdi/page3",
  () => System.import("@mahdi/page3"),
  isActive.page3,
  { domElement: document.getElementById('page-3-container') },
  
);

registerApplication(
  '@mahdi/api',
  () => System.import('@mahdi/api'),

  location => location.pathname.startsWith('/')
);
start();