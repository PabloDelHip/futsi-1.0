<template>
  <div class="row col-12 justify-content-center">
    <div class="col-10 row contenedor-info mt-4 p-3 info-torneos-league">
      <h5 class="titulo-medio-pequeño-azul">Datos principales de la liga</h5>
      <div class="card-body row">
                    <div class="form-group col-12">
                        <label class="texto-pequeno" for="exampleInputRounded0"> <i class="fas fa-id-card"></i> Nombre de la Liga</label>
                        <input type="text" class="form-control rounded-0" placeholder="Eje: Torneo de apertura">
                    </div>
                    <div class="form-group col-6">
                        <label class="texto-pequeno">Tipo de torneo</label>
                        <select class="custom-select rounded-0" id="exampleSelectRounded0">
                          <option></option>
                          <option>Profecional</option>
                          <option>Amateur</option>
                        </select>
                    </div>

                    <div class="form-group col-6">
                        <label class="texto-pequeno">Deporte</label>
                        <select class="custom-select rounded-0" id="exampleSelectRounded0">
                          <option></option>
                          <option>Futbol 7</option>
                          <option>Futbol 11</option>
                          <option>Futbol Rapido</option>
                        </select>
                    </div>

                    <div class="form-group col-6">
                        <label class="texto-pequeno">Genero</label>
                        <select class="custom-select rounded-0" id="exampleSelectRounded0">
                          <option></option>
                          <option>Masculino</option>
                          <option>Femenino</option>
                          <option>Mixto</option>
                        </select>
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
                                Guardar Liga
                                <i class="fas fa-sync-alt fa-spin"></i>
                            </button>
                        </div>
                    </div>
                </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['formDataPoints', 'tipo_torneo'],
  data () {
      return {
        start_date: "",
        minDateTime: "",
        minDateTimefinalizar: "",
      }
  },
  watch: { 
    start_date() {
      this.minDateTimefinalizar = this.start_date
    }
  },
  methods: {
    saveTournament() {
      this.$router.push({ name:'ProfileLeagues', params: { id: 2 } })
    }
  },
  mounted() {
  }

}
</script>

