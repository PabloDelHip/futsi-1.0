<template>
    <div class="row col-12 justify-content-center">
        <div class="col-10 row contenedor-info mt-4 p-3 info-torneos-league">
            <h2 class="mb-4">¿Cual es la versión para este torneo?</h2>
            <div class="col-6 p-3">
                <div class="row contenedor-version-torneo p-3">
                    <div v-if="!liga" class="col-12 text-center">
                        <img src="/dist/img/leagues/modo-liga.png" style="width: 130px">
                        <p class="titulo-profile mt-2">Liga</p>
                        <button
                            @click="liga=true, liga_liguilla=false, eliminatoria=false, grupos=false"
                            class="btn-futsi-outline">
                            Comenzar
                        </button>
                    </div>
                    <div v-if="liga" class="row col-12">
                        <PointsTournamentComponent :tipo_torneo="0"/>
                    </div>
                </div>
            </div>

            <div class="col-6 p-3">
                <div class="row contenedor-version-torneo p-3">
                    <div v-if="!liga_liguilla" class="col-12 text-center">
                        <img src="/dist/img/leagues/liguilla.png" style="width: 130px">
                        <p class="titulo-profile mt-2">Liga con liguilla</p>
                        <button
                            @click="liga=false, liga_liguilla=true, eliminatoria=false, grupos=false"
                            class="btn-futsi-outline">
                            Comenzar
                        </button>
                    </div>
                    <div v-if="liga_liguilla" class="row col-12">
                        <PointsTournamentComponent :tipo_torneo="1"/>
                    </div>
                </div>
            </div>

            <div class="col-6 p-3">
                <div v-if="!eliminatoria" class="row contenedor-version-torneo p-3">
                    <div class="col-12 text-center">
                        <img src="/dist/img/leagues/eliminatoria.png" style="width: 130px">
                        <p class="titulo-profile mt-2">Eliminatoria</p>
                        <button
                        @click="liga=false, liga_liguilla=false, eliminatoria=true, grupos=false"
                        class="btn-futsi-outline">
                            Comenzar
                        </button>
                    </div>
                </div>
                <div v-if="eliminatoria" class="row col-12">
                    <PointsTournamentComponent :tipo_torneo="2"/>
                </div>
            </div>

            <div class="col-6 p-3">
                <div v-if="!grupos" class="row contenedor-version-torneo p-3">
                    <div class="col-12 text-center">
                        <img src="/dist/img/leagues/Grupos.png" style="width: 130px">
                        <p class="titulo-profile mt-2">Grupos</p>
                        <button
                        @click="liga=false, liga_liguilla=false, eliminatoria=false, grupos=true"
                        class="btn-futsi-outline">
                            Comenzar
                        </button>
                    </div>
                </div>
                <div v-if="grupos" class="row col-12">
                    <PointsTournamentComponent :tipo_torneo="3"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PointsTournamentComponent from './PointsTournament.vue'

export default {
    components: {
        PointsTournamentComponent
    },
    data: function () {
      return {
          liga:false,
          liga_liguilla: false,
          eliminatoria: false,
          grupos: false
      };
    },
}
</script>