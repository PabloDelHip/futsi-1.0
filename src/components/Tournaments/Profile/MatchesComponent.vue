<template>
    <div class="row justify-content-center col-12 mb-3">
        <modal name="modal-new-player"
          :height="'auto'"
          :scrollable="true">
            <div class="row m-0 p-3">
                <div class="col-12 text-center mt-2">
                    <p class="titulo-azul">Agregar partido</p>
                </div>
                <div class="col-12 row">
                    <div class="form-group col-6">
                        <label class="texto-pequeno" for="exampleInputRounded0"> <i class="fas fa-shield-alt"></i> Equipo Local</label>
                        <multiselect
                          v-model="value"
                          :options="options"
                          placeholder="Seleccionar Posición">
                        </multiselect>
                    </div>
                    <div class="form-group col-6">
                        <label class="texto-pequeno" for="exampleInputRounded0"> <i class="fas fa-shield-alt"></i> Equipo Visitante</label>
                        <multiselect
                          v-model="value"
                          :options="options"
                          placeholder="Seleccionar Posición">
                        </multiselect>
                    </div>
                    <div class="form-group col-12">
                        <label class="texto-pequeno" for="exampleInputRounded0"> <i class="fas fa-futbol"></i> Cancha</label>
                        <input type="text" class="form-control rounded-0" placeholder="Eje: Campo Cozumel">
                    </div>
                    <div class="form-group col-6">
                        <label class="texto-pequeno" for="exampleInputRounded0">
                          <i class="far fa-calendar-alt"></i>
                          Dia del partido</label>
                        <datetime v-model="start_date" value-zone="local" zone="local"></datetime>
                    </div>

                    <div class="form-group col-6">
                        <label class="texto-pequeno" for="exampleInputRounded0">
                          <i class="far fa-clock"></i>
                          Hora del partido
                        </label>
                        <datetime type="time" v-model="time"></datetime>
                    </div>

                    <div style="width: 100%;">
                    <hr>
                    </div>
                    <div class="col-6 text-center">
                    <button class="btn-futsi-outline">
                        Cancelar
                    </button>
                    </div>
                    <div class="col-6 text-center">
                    <button class="btn-futsi btn-azul-fuerte" style="border: 0;">
                        Agregar
                    </button>
                    </div>
                </div>
            </div>
        </modal>
        <div class="col-12">
            <button @click="show()" class="btn-blue btn-sm btn-jornada btn-futsi-outline">
                Jornada 1
            </button>
            <button @click="show()" class="btn-blue btn-sm btn-jornada btn-futsi-outline">
                Jornada 2
            </button>
            <button @click="show()" class="btn-blue btn-sm btn-jornada btn-futsi-outline">
                Jornada 3
            </button>
            <button @click="show()" class="btn-blue btn-sm btn-jornada btn-futsi-outline">
                Jornada 5
            </button>
            <button @click="show()" class="btn-blue btn-sm btn-jornada btn-futsi-outline">
                Jornada 6
            </button>
            <button @click="show()" class="btn-blue btn-sm btn-jornada btn-futsi-outline">
                Jornada 7
            </button>
            <button @click="show()" class="btn-blue btn-sm btn-jornada btn-futsi-outline">
                Jornada 8
            </button>
            <button @click="show()" class="btn-blue btn-sm btn-jornada btn-futsi-outline">
                Jornada 9
            </button>
            <button @click="show()" class="btn-blue btn-sm btn-jornada btn-futsi-outline">
                Jornada 10
            </button>
            <button @click="show()" class="btn-blue btn-sm btn-jornada btn-futsi-outline">
                Jornada 11
            </button>
            <button @click="show()" class="btn-blue btn-sm btn-jornada btn-futsi-outline">
                Jornada 12
            </button>
            <button @click="show()" class="btn-blue btn-sm btn-jornada">
                Jornada 13
            </button>
            <button @click="show()" class="btn-blue btn-sm btn-jornada btn-futsi-outline">
                Jornada 14
            </button>
            <button @click="show()" class="btn-blue btn-sm btn-jornada btn-futsi-outline">
                Jornada 15
            </button>
            <button @click="show()" class="btn-blue btn-sm btn-jornada btn-futsi-outline">
                Jornada 16
            </button>
            <button @click="show()" class="btn-blue btn-sm btn-jornada">
                <i class="fas fa-plus"></i>
                Nueva Jornada
            </button>
        </div>
        <div class="col-12">
            <hr>
        </div>
        <div class="col-8">
            <button @click="show()" class="btn-blue btn-block">
                <i class="fas fa-plus"></i>
                Nuevo partido
            </button>
        </div>

        <div class="row col-12 contenedor-info p-3">
            <div class="col-12 mb-3" style="padding-top: 13px;">
                <h1 class="titulo-profile">Jornada #1 Liga Dominical 228</h1>
                <button class="eliminar-jornada">
                    <i class="fas fa-trash-alt"></i>
                    Eliminar Jornada
                </button>
            </div>
            <div class="col-4 mb-3">
                <div class="col-12 row p-0 m-0 pt-1 pb-1 text-center contenedor-partidos">
                    <div class="col-12 p-0 m-0 mb-3">
                        <small class="header-partido">
                            <span>Liga</span>
                            - Domingo 25 de Abril
                        </small>
                    </div>
                    <div class="col-5 equipo-partido">
                        <img src="/dist/img/tournament/default-equipo.png" >
                        <p>Sporting</p>
                    </div>
                    <div class="col-2 p-0 m-0 row align-items-center resultado-partido">
                        <div class="col-12 p-0 m-0" >
                            <p class="p-0 m-0">3 - 5</p>
                            <span class="horario">
                                20:20 hr.
                            </span>
                        </div>
                    </div>
                    <div class="col-5 equipo-partido">
                        <img src="/dist/img/tournament/default-equipo.png" >
                        <p>Fernandos</p>
                    </div>
                </div>
            </div>
            <div class="col-4 mb-3">
                <div class="col-12 row p-0 m-0 pt-1 pb-1 text-center contenedor-partidos">
                    <div class="col-12 p-0 m-0 mb-3">
                        <small class="header-partido">
                            <span>Liga</span>
                            - Domingo 25 de Abril
                        </small>
                    </div>
                    <div class="col-5 equipo-partido">
                        <img src="/dist/img/tournament/default-equipo.png" >
                        <p>Sporting</p>
                    </div>
                    <div class="col-2 p-0 m-0 row align-items-center resultado-partido">
                        <div class="col-12 p-0 m-0" >
                            <p class="p-0 m-0">- - -</p>
                            <span class="horario">
                                20:20 hr.
                            </span>
                        </div>
                    </div>
                    <div class="col-5 equipo-partido">
                        <img src="/dist/img/tournament/default-equipo.png" >
                        <p>Fernandos</p>
                    </div>
                </div>
            </div>
            <div class="col-4 mb-3">
                <div class="col-12 row p-0 m-0 pt-1 pb-1 text-center contenedor-partidos">
                    <div class="col-12 p-0 m-0 mb-3">
                        <small class="header-partido">
                            <span>Liga</span>
                            - Domingo 25 de Abril
                        </small>
                    </div>
                    <div class="col-5 equipo-partido">
                        <img src="/dist/img/tournament/default-equipo.png" >
                        <p>Sporting</p>
                    </div>
                    <div class="col-2 p-0 m-0 row align-items-center resultado-partido">
                        <div class="col-12 p-0 m-0" >
                            <p class="p-0 m-0">- - -</p>
                            <span class="horario">
                                20:20 hr.
                            </span>
                        </div>
                    </div>
                    <div class="col-5 equipo-partido">
                        <img src="/dist/img/tournament/default-equipo.png" >
                        <p>Fernandos</p>
                    </div>
                </div>
            </div>
            <div class="col-4 mb-3">
                <div class="col-12 row p-0 m-0 pt-1 pb-1 text-center contenedor-partidos">
                    <div class="col-12 p-0 m-0 mb-3">
                        <small class="header-partido">
                            <span>Liga</span>
                            - Domingo 25 de Abril
                        </small>
                    </div>
                    <div class="col-5 equipo-partido">
                        <img src="/dist/img/tournament/default-equipo.png" >
                        <p>Sporting</p>
                    </div>
                    <div class="col-2 p-0 m-0 row align-items-center resultado-partido">
                        <div class="col-12 p-0 m-0" >
                            <p class="p-0 m-0">- - -</p>
                            <span class="horario">
                                20:20 hr.
                            </span>
                        </div>
                    </div>
                    <div class="col-5 equipo-partido">
                        <img src="/dist/img/tournament/default-equipo.png" >
                        <p>Fernandos</p>
                    </div>
                </div>
            </div>
            <div class="col-4 mb-3">
                <div class="col-12 row p-0 m-0 pt-1 pb-1 text-center contenedor-partidos">
                    <div class="col-12 p-0 m-0 mb-3">
                        <small class="header-partido">
                            <span>Liga</span>
                            - Domingo 25 de Abril
                        </small>
                    </div>
                    <div class="col-5 equipo-partido">
                        <img src="/dist/img/tournament/default-equipo.png" >
                        <p>Sporting</p>
                    </div>
                    <div class="col-2 p-0 m-0 row align-items-center resultado-partido">
                        <div class="col-12 p-0 m-0" >
                            <p class="p-0 m-0">- - -</p>
                            <span class="horario">
                                20:20 hr.
                            </span>
                        </div>
                    </div>
                    <div class="col-5 equipo-partido">
                        <img src="/dist/img/tournament/default-equipo.png" >
                        <p>Fernandos</p>
                    </div>
                </div>
            </div>
            <div class="col-4 mb-3">
                <div class="col-12 row p-0 m-0 pt-1 pb-1 text-center contenedor-partidos">
                    <div class="col-12 p-0 m-0 mb-3">
                        <small class="header-partido">
                            <span>Liga</span>
                            - Domingo 25 de Abril
                        </small>
                    </div>
                    <div class="col-5 equipo-partido">
                        <img src="/dist/img/tournament/default-equipo.png" >
                        <p>Sporting</p>
                    </div>
                    <div class="col-2 p-0 m-0 row align-items-center resultado-partido">
                        <div class="col-12 p-0 m-0" >
                            <p class="p-0 m-0">- - -</p>
                            <span class="horario">
                                20:20 hr.
                            </span>
                        </div>
                    </div>
                    <div class="col-5 equipo-partido">
                        <img src="/dist/img/tournament/default-equipo.png" >
                        <p>Fernandos</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Datetime } from 'vue-datetime';
export default {
    components: {
        datetime: Datetime,
    },
    data () {
      return {
        start_date: "",
        minDateTime: "",
        minDateTimefinalizar: "",
        value: null,
        options: ['Sporting', 'Fernandos', 'Monterrey', 'Argentina'],
        fileRecords: [],
        uploadUrl: 'https://www.mocky.io/v2/5d4fb20b3000005c111099e3',
        uploadHeaders: { 'X-Test-Header': 'vue-file-agent' },
        fileRecordsForUpload: [], // maintain an upload queue
      }
  },
  methods: {
      show () {
          this.$modal.show('modal-new-player');          
      },
      hide () {
          this.$modal.hide('modal-new-player');
      }
  },
  mounted() {
  }
}
</script>