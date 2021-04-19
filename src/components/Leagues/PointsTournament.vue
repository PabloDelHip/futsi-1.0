<template>
    <div>
        <div class="col-12 text-center">
            <h5 class="titulo-medio-pequeño-azul">Personalice su Modalidad de torneo:</h5>
            <p class="titulo-pequeño-azul-marino">Puntuacion que se tomara en cuenta para su torneo</p>
            <div v-if="tipo_torneo != 2">
                <div class="form-group row text-center justify-content-center">
                    <label class="col-sm-6 col-form-label texto-pequeno">Puntos para el ganador</label>
                    <div class="col-sm-3">
                        <input v-model="form.puntos_victoria" type="text" class="form-control form-control-sm rounded-0" id="inputEmail3" placeholder="3">
                    </div>
                </div>
                <div class="form-group row text-center justify-content-center">
                    <label class="col-sm-6 col-form-label texto-pequeno">Puntos por derrota</label>
                    <div class="col-sm-3">
                        <input v-model="form.puntos_derrota" type="text" class="form-control form-control-sm rounded-0" id="inputEmail3" placeholder="0">
                    </div>
                </div>
                <div v-if="!form.desempate_penales" class="form-group row text-center justify-content-center">
                    <label class="col-sm-6 col-form-label texto-pequeno">Puntos por empate</label>
                    <div class="col-sm-3">
                        <input v-model="form.puntos_empate" type="text" class="form-control form-control-sm rounded-0" id="inputEmail3" placeholder="1">
                    </div>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" v-model="form.desempate_penales">
                    <label for="customCheckbox2" class="texto-pequeno mb-3 ml-2">Desempate por penales</label>
                </div>
                <hr>
                <div v-if="form.desempate_penales">
                    <div class="form-group row text-center justify-content-center">
                        <label class="col-sm-6 col-form-label texto-pequeno">Puntos para el ganador</label>
                        <div class="col-sm-3">
                            <input v-model="form.puntos_victoria_penales" type="text" class="form-control form-control-sm rounded-0" id="inputEmail3" placeholder="2">
                        </div>
                    </div>
                    <div class="form-group row text-center justify-content-center">
                        <label class="col-sm-6 col-form-label texto-pequeno">Puntos por derrota</label>
                        <div class="col-sm-3">
                            <input v-model="form.puntos_derrota_penales" type="text" class="form-control form-control-sm rounded-0" id="inputEmail3" placeholder="1">
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="tipo_torneo == 2">
                <div class="form-group row text-center justify-content-center">
                    <label class="col-sm-6 col-form-label texto-pequeno">Num. de partidos por ronda</label>
                    <div class="col-sm-3">
                        <input v-model="form.puntos_victoria" type="text" class="form-control form-control-sm rounded-0" id="inputEmail3" placeholder="3">
                    </div>
                </div>
            </div>
            <button @click="seleccionarTipoTorneo" class="btn-futsi btn-azul-fuerte">
                Continuar
            </button>
        </div>
    </div>
</template>

<script>
import EventBus from '../../bus';
export default {
    props: ['tipo_torneo'],
    data: function () {
      return {
          form: {
              puntos_victoria: 3,
              puntos_derrota: 0,
              puntos_empate: 1,
              puntos_victoria_penales: 2,
              puntos_derrota_penales: 1,
              desempate_penales: false 

          }
      };
    },
    methods: {
        seleccionarTipoTorneo() {
            console.log('si funciona')
            // 0: liga, 1: liga y liguilla, 2: eliminatoria, 3: grupos
            EventBus.$emit('tipoTorneoSeleccionado', this.form, this.tipo_torneo)
        }
    }
}
</script>