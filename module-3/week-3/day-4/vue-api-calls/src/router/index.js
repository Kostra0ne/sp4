import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

// A LIRE ABSOLUMENT (RTMFD)
// https://router.vuejs.org/fr/
// https://router.vuejs.org/fr/guide/essentials/nested-routes.html

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting: this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/users",
    name: "Users",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/UsersAll.vue")
  },
  {
    path: "/users/:id",
    name: "UserProfile",
    component: () =>
      import(/* webpackChunkName: "userProfile" */ "../views/UserProfile.vue")
  },
  {
    path: "*",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "notFound" */ "../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
