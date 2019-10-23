import Vue from "vue";
import Router from "vue-router";
import Sigin from "./views/Sigin.vue";
import Login from "./views/Login.vue";
import Dashboard from "./views/Dashboard.vue";
import Weather from "./views/Weather.vue";
import day from "./views/day.vue";
import hours from "./views/hours.vue";
Vue.use(Router);


export default new Router({
  routes: [
    {
        path: "/",
        name: "Sigin",
        component: Sigin
      },
    {
      path: "/Login",
      name: "Login",
      component: Login
    },
    {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/Weather",
    name: "Weather",
    component: Weather,
    children :[{
      path: "day",
      name: "day",
      component: day
    },
    {
      path: "hours",
      name: "hours",
      component: hours
    }]
  },
    //  {
    //    path: "/Login",
    //    name: "Login",
    //    component:Login
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    //  }
  ]
});
