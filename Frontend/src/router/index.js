import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/",
      component: () => import("../views/Layout.vue"),
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: () => import("../views/Dashboard.vue"),
        },
        {
          path: "tasks",
          name: "tasks",
          component: () => import("../views/Tasks.vue"),
        },
        {
          path: "calendar",
          name: "calendar",
          component: () => import("../views/Calendar.vue"),
        },
        {
          path: "wallet",
          name: "wallet",
          component: () => import("../views/Wallet.vue"),
        },
        {
          path: "meals",
          name: "meals",
          component: () => import("../views/Meals.vue"),
        },
        // },
        // {
        //   path: "files",
        //   name: "files",
        //   component: () => import("../views/Files.vue"),
        // },
        // {
        //   path: "analytics",
        //   name: "analytics",
        //   component: () => import("../views/Analytics.vue"),
        // },
        // {
        //   path: "settings",
        //   name: "settings",
        //   component: () => import("../views/Settings.vue"),
        // },
        // {
        //   path: "crear-archivos",
        //   name: "create-files",
        //   component: () => import("../views/CreateFiles.vue"),
        // },
        {
          path: "profile",
          name: "profile",
          component: () => import("../views/Profile.vue"),
        }
      ],
    },
  ],
});

export default router;
