<template>
  <div class="row col-12 justify-content-center">
    <div class="col-10 row contenedor-info mt-4 p-3 info-torneos-league">
      <h5 class="titulo-medio-pequeño-azul">Datos principales del torneo</h5>
      <div class="card-body row">
                    <div class="form-group col-12">
                        <label class="texto-pequeno" for="exampleInputRounded0"> <i class="fas fa-id-card"></i> Nombre del torneo</label>
                        <input type="text" class="form-control rounded-0" placeholder="Eje: Torneo de apertura">
                    </div>
                    <div class="form-group col-8">
                        <label class="texto-pequeno" for="exampleInputRounded0">
                          <i class="fas fa-map-marker-alt"></i>
                          Donde se jugaran los encuentros</label>
                        <input type="text" class="form-control rounded-0" placeholder="Eje: 2">
                    </div>
                    <div class="form-group col-12">
                        <label class="texto-pequeno" for="exampleInputRounded0">
                          <i class="fas fa-globe"></i>
                          Url de google maps de la dirección del torneo</label>
                        <input type="text" class="form-control rounded-0" placeholder="Eje: 2">
                    </div>
                    <div class="form-group col-6">
                        <label class="texto-pequeno" for="exampleInputRounded0">
                          <i class="fas fa-dollar-sign"></i>
                          Monto de inscripción</label>
                        <input type="text" class="form-control rounded-0" placeholder="Eje: 2">
                    </div>
                    <div class="form-group col-6">
                        <label class="texto-pequeno" for="exampleInputRounded0">
                          <i class="fas fa-dollar-sign"></i>
                          Monto de albitraje por partido</label>
                        <input type="text" class="form-control rounded-0" placeholder="Eje: 2">
                    </div>
                    <div class="form-group col-7">
                        <label class="texto-pequeno" for="exampleInputRounded0">
                          <i class="fas fa-shield-alt"></i>
                          Num. de equipos que pasan a la siguiente ronda</label>
                        <input type="text" class="form-control rounded-0" placeholder="Eje: 14">
                    </div>
                    <div class="form-group col-6">
                        <label class="texto-pequeno" for="exampleInputRounded0">
                          <i class="fas fa-futbol"></i>
                          Num. de partidos de eliminacion</label>
                        <input type="text" class="form-control rounded-0" placeholder="Eje: 2">
                    </div>
                    <div class="form-group col-6">
                        <label class="texto-pequeno" for="exampleInputRounded0">
                          <i class="fas fa-futbol"></i>
                          Numero de partidos en la final</label>
                        <input type="text" class="form-control rounded-0" placeholder="Eje: 2">
                    </div>
                    <div class="form-group col-6">
                        <label class="texto-pequeno" for="exampleInputRounded0">
                          <i class="far fa-clock"></i>
                          Duracion de cada tiempo</label>
                        <div class="input-group mb-3">
                          <input type="text" class="form-control rounded-0" placeholder="Eje: 90">
                          <div class="input-group-append">
                            <span class="input-group-text">minutos</span>
                          </div>
                      </div>
                    </div>
                    <div class="form-group col-6">
                        <label class="texto-pequeno" for="exampleInputRounded0">
                          <i class="far fa-calendar-alt"></i>
                          Fecha de inicio de torneo</label>
                        <datetime v-model="start_date" value-zone="local" zone="local" :min-datetime="minDateTime"></datetime>
                    </div>
                    <div class="form-group col-6">
                        <label class="texto-pequeno" for="exampleInputRounded0">
                          <i class="far fa-calendar-alt"></i>
                          Fecha estimada para finalizar el torneo</label>
                        <datetime  value-zone="local" zone="local" :min-datetime="minDateTimefinalizar"></datetime>
                    </div>
                    <div class="w-100 custom-control">
                      <label class="texto-pequeno" for="exampleInputRounded0">
                          <i class="fas fa-sun"></i>
                          Dia de los partidos</label>
                    </div>
                    <div class="custom-control col-sm-1 text-center">
                      <input type="checkbox" >
                      <label for="customCheckbox2" class="texto-pequeno mb-3 ml-2">Lunes</label>
                    </div>
                    <div class="custom-control col-sm-1 text-center">
                      <input type="checkbox" >
                      <label for="customCheckbox2" class="texto-pequeno mb-3 ml-2">Martes</label>
                    </div>
                    <div class="custom-control col-sm-1 text-center">
                      <input type="checkbox" >
                      <label for="customCheckbox2" class="texto-pequeno mb-3 ml-2">Miercoles</label>
                    </div>
                    <div class="custom-control col-sm-1 text-center">
                      <input type="checkbox" >
                      <label for="customCheckbox2" class="texto-pequeno mb-3 ml-2">Jueves</label>
                    </div>
                    <div class="custom-control col-sm-1 text-center">
                      <input type="checkbox" >
                      <label for="customCheckbox2" class="texto-pequeno mb-3 ml-2">Viernes</label>
                    </div>
                    <div class="custom-control col-sm-1 text-center">
                      <input type="checkbox" >
                      <label for="customCheckbox2" class="texto-pequeno mb-3 ml-2">Sabado</label>
                    </div>
                    <div class="custom-control col-sm-1 text-center">
                      <input type="checkbox" >
                      <label for="customCheckbox2" class="texto-pequeno mb-3 ml-2">Domingo</label>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label class="texto-pequeno"> <i class="fas fa-align-center"></i> Descripción del torneo</label>
                            <textarea class="form-control" rows="3" placeholder></textarea>
                        </div>
                    </div>
                    <div class="col-12 row">
                        <div class="col-4">
                            <button @click="saveTournament()" type="submit" class="btn-futsi btn-azul-fuerte">
                                Guardar Torneo
                                <i class="fas fa-sync-alt fa-spin"></i>
                            </button>
                        </div>
                    </div>
                </div>
    </div>
  </div>
</template>

<script>
import { Datetime } from 'vue-datetime';
import moment from "moment";
export default {
  props: ['formDataPoints', 'tipo_torneo'],
  data () {
      return {
        start_date: "",
        minDateTime: "",
        minDateTimefinalizar: "",
      }
  },
  components: {
    datetime: Datetime,
  },
  watch: { 
    start_date() {
      this.minDateTimefinalizar = this.start_date
    }
  },
  methods: {
    saveTournament() {
      this.$router.push({ name: 'InformationTournaments', params: {id: 5} })
    }
  },
  mounted() {
    console.log('La data', this.formDataPoints)
    console.log('tipo_torneo', this.tipo_torneo)
    this.minDateTime = moment().format("YYYY-MM-DD")
  }

}
</script>

