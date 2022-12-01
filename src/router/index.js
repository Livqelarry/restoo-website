import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Login - Resto",
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      title: "About - Restoo",
    },
  },
  {
    path: "/menus",
    name: "menus",
    component: () => import("../views/MenusView.vue"),
    meta: {
      title: "Menus - Restoo",
    },
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../views/CheckoutView.vue"),
    meta: {
      title: "Checkout - Restoo",
    },
  },
  {
    path: "/success-payment",
    name: "SuccessPayment",
    component: () => import("../views/SuccessPayment.vue"),
    meta: {
      title: "Success - Restoo",
    },
  },
  {
    path: "/failed-payment",
    name: "FailedPayment",
    component: () => import("../views/FailedPayment.vue"),
    meta: {
      title: "Failed - Restoo",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
