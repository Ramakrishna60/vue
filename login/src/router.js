import Vue from "vue";
import Router from "vue-router";
import signin from "./views/signin.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "signin",
      component:signin
    },
    
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
        // import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
