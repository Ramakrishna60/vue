import vue from './vue'
import comp1 from '.comp1.vue'
import comp2 from './comp2.vue '
import Router from 'vue-router'

vue.use(Router);
export default new Router({
    Routers:[
        {
    path: '/display/:id',
    name: 'display-viewer',
    component: displayViewer,
  },
]
})
components: {
    comp1,
    comp2
  }
  // ...

  