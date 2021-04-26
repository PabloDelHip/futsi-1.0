import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from "../views/index.vue";


//Tournaments
import Tournaments from "../views/Tournaments/index.vue";
import TournamentsCreate from "../views/Tournaments/Upload/formView.vue";
import TournamentsList from "../views/Tournaments/ListView.vue";
import TournamentsPositionsTable from "../views/Tournaments/PositionTableView.vue";
import TournamentsUploadTeams from "../views/Tournaments/Upload/TeamsView.vue";
import TournamentsVersion from "../views/Tournaments/Upload/VersionView"
import TournmanetsProfile from "../views/Tournaments/ProfileView.vue"
import TournamentsInformation from "../components/Tournaments/Profile/InformationComponent"
import TournamentsNews from "../components/Tournaments/Profile/NewsComponent.vue"
import TournamentsTeams from "../components/Tournaments/Profile/TeamsComponent.vue"
import TournamentsMatches from "../components/Tournaments/Profile/MatchesComponent.vue"
import TournamentsResults from "../components/Tournaments/Profile/ResultsComponent.vue"
import TournamentsPositions from "../components/Tournaments/Profile/PositionsTableComponent.vue"
import TournamentsReports from "../components/Tournaments/Profile/ReportsComponent.vue"
import TournamentsPlayers from "../components/Tournaments/Profile/PlayersComponent.vue"
import TournamentsPlayersTeam from "../views/teams/Players/ListView.vue"

//Teams
import Teams from "../views/teams/index.vue";
import TeamsList from "../views/teams/ListView.vue";

//Matches
import Matches from "../views/Matches/index.vue";
import MatchesList from "../views/Matches/ListView.vue";

//Leagues
import LeaguesList from "../views/Leagues/ListView.vue";
import LeaguesProfile from "../views/Leagues/ProfileView";
import LeaguesCreate from "../views/Leagues/Form/UploadView.vue";

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
      },
      {
        path: "profile/:id",
        name: "ProfileTournament",
        component: TournmanetsProfile,
        props: true,
        children:[
          {
            path: "information",
            name: "InformationTournaments",
            component: TournamentsInformation,
          },
          {
            path: "news",
            name: "NewsTournaments",
            component: TournamentsNews,
          },
          {
            path: "teams",
            name: "TeamsTournaments",
            component: Teams,
            children: [
              {
                path: "/",
                name: "TeamsInTournaments",
                component: TournamentsTeams,
              },
              {
                path: ":id_team/players",
                name: "PlayersTeamTournaments",
                component: TournamentsPlayersTeam,
              }
            ]
          },
          {
            path: "matches",
            name: "MatchesTournaments",
            component: TournamentsMatches,
          },
          {
            path: "match-results/:id_match",
            name: "ResultsTournaments",
            component: TournamentsResults,
          },
          {
            path: "positions",
            name: "PositionsTournaments",
            component: TournamentsPositions,
          },
          {
            path: "reports",
            name: "ReportsTournaments",
            component: TournamentsReports,
          },
          {
            path: "players",
            name: "PlayersTournaments",
            component: TournamentsPlayers,
          }
        ]
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
      },
      {
        path: "create",
        name: "CreateLeagues",
        component: LeaguesCreate,
        props: true
      },
      {
        path: "version/tournament/:id_league",
        name: "VersionTournament",
        component: TournamentsVersion,
        params: true
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
