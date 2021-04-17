import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from "../views/index.vue";


//Tournaments
import Tournaments from "../views/Tournaments/index.vue";
import TournamentsCreate from "../views/Tournaments/Upload/formView.vue";
import TournamentsList from "../views/Tournaments/ListView.vue";
import TournamentsPositionsTable from "../views/Tournaments/PositionTableView.vue";
import TournamentsUploadTeams from "../views/Tournaments/Upload/TeamsView.vue";

//Teams
import Teams from "../views/teams/index.vue";
import TeamsList from "../views/teams/ListView.vue";

//Matches
import Matches from "../views/Matches/index.vue";
import MatchesList from "../views/Matches/ListView.vue";

//Leagues
import LeaguesList from "../views/Leagues/ListView.vue";
import LeaguesProfile from "../views/Leagues/ProfileView";

Vue.use(VueRouter)

const routes = [
  {
      path: "*",
      redirect: { name: "ListLeagues" },
      
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
          path: "update",
          name: "TournamentsUpdate",
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
      },
      {
        path: ":idTournament/update-teams",
        name: "TournamentsUpdateTeams",
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
  {
    path: '/leagues',
    name: 'Leagues',
    component: Index,
    children:[
      {
        path: "list",
        name: "ListLeagues",
        component: LeaguesList,
      },
      {
        path: "profile/:id",
        name: "ProfileLeagues",
        component: LeaguesProfile,
        props: true
      }
    ]
  },
  {
    path: '/matches',
    name: 'Matches',
    component: Matches,
    children:[
      {
          path: "list",
          name: "ListMatches",
          component: MatchesList,
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
