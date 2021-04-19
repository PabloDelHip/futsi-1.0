<template>
  <div class="about">
      
      <HeaderLeagueComponent 
        :volver_pagina="volver_pagina"
        @onVolver="volver"/>
      <transition name="fade" mode="out-in">
        <TypeTournamentComponent v-if="type_tournament" @onSeleccionarTipoTorneo="seleccionarTipoTorneo"/>
      </transition>
      <transition name="fade" mode="out-in">
        <FormTournamentComponent
          v-if="form_tournament"
          :formDataPoints="formDataPoints"
          :tipo_torneo="tipo_torneo" />
        </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderLeagueComponent from '@/components/Leagues/HeaderComponent.vue'
import TypeTournamentComponent from '@/components/Leagues/TypeTournamentComponent.vue'
import FormTournamentComponent from '@/components/Tournaments/FormUploadComponent.vue'
import EventBus from '@/bus'
export default {
  components: {
    HeaderLeagueComponent,
    TypeTournamentComponent,
    FormTournamentComponent
  },
  data () {
      return {
        type_tournament: true,
        form_tournament: false,
        tipo_torneo: 0, // 0: liga, 1: liga y liguilla, 2: eliminatoria, 3: grupos 
        formDataPoints: [],
        volver_pagina: false
      }
  },
  created: function () {
      EventBus.$on('tipoTorneoSeleccionado', function(formData, tipo_torneo) {
        console.log('todo bien')
        this.formDataPoints = formData
        this.tipo_torneo = tipo_torneo
        this.type_tournament = false;
        this.form_tournament = true;
        this.volver_pagina = true;
      }.bind(this))
  },
  methods: {
    seleccionarTipoTorneo (tipo_torneo) {
      this.type_tournament= false
      this.form_tournament = true
      this.tipo_torneo = tipo_torneo
    },
    volver() {
      this.type_tournament = true;
      this.form_tournament = false;
      this.volver_pagina = false;
    }
  }
}

</script>