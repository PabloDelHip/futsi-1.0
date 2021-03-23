import Vue from 'vue'
import VueRouter from 'vue-router'

//Dashboard
import Overview from "../views/Dashboard/OverviewComponent.vue";
//Dashboard section


Vue.use(VueRouter)

const routes = [
  {
      path: "*",
      redirect: { name: "Overview" },
      
  },
  {
    path: "/overview",
    name: "Overview",
    component: Overview,
},
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
