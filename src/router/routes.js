const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/IndexPage.vue") },
      {
        path: "registerPage",
        component: () => import("src/pages/registerPage.vue"),
      },
      {
        path: "ClaimsIndex",
        component: () => import("src/pages/ClaimsIndex.vue"),
      },
      {
        path: "ClaimsForm",
        component: () => import("src/pages/ClaimsForm.vue"),
      },
      {
        path: "usersIndex",
        component: () => import("src/pages/usersIndex.vue"),
      },
      {
        path: "mailboxIndex",
        component: () => import("src/pages/mailboxIndex.vue"),
      },
      {
        path: "userEdit",
        component: () => import("src/pages/userEdit.vue"),
      },
      {
        path: "userPage",
        component: () => import("src/pages/userPage.vue"),
      },

      /*{
        path: "userPage",
        component: () => import("src/pages/userPage.vue"),
      },
      {
        path: "ClaimsForm",
        component: () => import("src/pages/ClaimsForm.vue"),
      },
      {
        path: "citiesAndLocations",
        component: () => import("src/pages/citiesAndLocationsPage.vue"),
      },*/
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
