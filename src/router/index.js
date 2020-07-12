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
    path: "/login",
    name: "Login",
    component: () => 
         import("../views/Login.vue")
  }
  // {
  //   path: "/",
  //   name: "Dashboard",
  //   component: () =>  
  //        import("../views/Dashboard.vue")
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: () => 
  //         import("../views/Login.vue")
  // },
  // {
  //   path: "/cart",
  //   name: "Cart",
  //   component: () => 
  //        import("../views/Cart.vue")
  // },
  // {
  //   path: "/basket",
  //   name: "Basket",
  //   component: () => 
  //        import("../views/Basket.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
