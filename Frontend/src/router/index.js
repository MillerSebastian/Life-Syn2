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
      path: "/register",
      name: "register",
      component: () => import("../views/Login.vue"), // Si tienes una vista separada, cámbiala aquí
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
        {
          path: "profile",
          name: "profile",
          component: () => import("../views/Profile.vue"),
        },
      ],
    },
  ],
});

// Guardián global de rutas
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  // Rutas públicas
  const publicPages = ["/login", "/register"];
  const authRequired = !publicPages.includes(to.path);

  if (!isLoggedIn && authRequired) {
    // No logueado, intenta acceder a ruta protegida
    return next("/login");
  }
  if (isLoggedIn && publicPages.includes(to.path)) {
    // Logueado, intenta ir a login/register
    return next("/dashboard");
  }
  return next();
});

export default router;
