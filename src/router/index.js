import Vue from 'vue'
import VueRouter from 'vue-router'

//Dashboard
import Overview from "../views/Dashboard/OverviewComponent.vue";

//Tournaments
import Tournaments from "../views/Tournaments/index.vue";
import TournamentsCreate from "../views/Tournaments/Upload/formView.vue";
import TournamentsList from "../views/Tournaments/ListView.vue";
import TournamentsPositionsTable from "../views/Tournaments/PositionTableView.vue";
import TournamentsUploadTeams from "../views/Tournaments/Upload/TeamsView.vue";

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
    path: '/tournaments',
    name: 'Tournaments',
    component: Tournaments,
    children:[
      {
          path: "create",
          name: "TournamentsCreate",
          component: TournamentsCreate,
      },
      {
        path: "list",
        name: "TournamentsList",
        component: TournamentsList,
      },
      {
        path: ":idTournament/positions-table",
        name: "TournamentsPositionsTable",
        component: TournamentsPositionsTable,
      },
      {
        path: ":idTournament/upload-teams",
        name: "TournamentsUploadTeams",
        component: TournamentsUploadTeams,
      }
    ]
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
