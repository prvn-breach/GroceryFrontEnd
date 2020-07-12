import Vue from "vue";
import VueRouter from "vue-router";
import DefaultLayout from "../views/DefaultLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: "/home",
        name: "Dashboard",
        component: () => 
             import("../views/Dashboard.vue")
      },
      {
        path: "/cart",
        name: "Cart",
        component: () => 
             import("../views/Cart.vue")
      },
      {
        path: "/basket",
        name: "Basket",
        component: () => 
             import("../views/Basket.vue")
      }
    ]
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => 
         import("../views/Auth.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
