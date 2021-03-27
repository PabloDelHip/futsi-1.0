import Vue from 'vue'
import VueRouter from 'vue-router'

//Dashboard
import Overview from "../views/Dashboard/OverviewComponent.vue";

//Tournaments
import FormTournaments from "../views/Tournaments/Upload/formView.vue";

//Teams
import Teams from "../views/teams/index.vue";
import TeamsList from "../views/teams/ListView.vue";

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
  {
    path: '/tournaments/create',
    name: 'TournamentsCreate',
    component: FormTournaments,
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams,
    children:[
      {
          path: "list",
          name: "ListTeams",
          component: TeamsList,
      }
    ]
  },
  
]

const router = new VueRouter({
  linkExactActiveClass: "active",
  mode: "history",
  routes
})

export default router
