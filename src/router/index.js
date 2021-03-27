import Vue from 'vue'
import VueRouter from 'vue-router'

//Dashboard
import Overview from "../views/Dashboard/OverviewComponent.vue";

//Tournaments
import FormTournaments from "../views/Tournaments/Upload/formView.vue";


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
    path: '/tournaments/create',
    name: 'TournamentsCreate',
    component: FormTournaments,
  },
  
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
