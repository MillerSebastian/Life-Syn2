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
          path: "files",
          name: "files",
          component: () => import("../views/Files.vue"),
        },
        {
          path: "analytics",
          name: "analytics",
          component: () => import("../views/Analytics.vue"),
        },
        {
          path: "settings",
          name: "settings",
          component: () => import("../views/Settings.vue"),
        },
        {
          path: "crear-archivos",
          name: "create-files",
          component: () => import("../views/CreateFiles.vue"),
        },
        {
          path: "resumir-archivos",
          name: "summarize-files",
          component: () => import("../views/SummarizeFiles.vue"),
        },
      ],
    },
  ],
});

export default router;
