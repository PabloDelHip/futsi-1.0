<template>
  <div class="about">
    <HeaderLeagueComponent/>
    <TypeTournamentComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderLeagueComponent from '@/components/Leagues/HeaderComponent.vue'
import TypeTournamentComponent from '@/components/Leagues/TypeTournamentComponent.vue'


export default {
  components: {
    HeaderLeagueComponent,
    TypeTournamentComponent
  }
}

</script>