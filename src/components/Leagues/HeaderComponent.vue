<template>
  <div class="row col-12 justify-content-center">
    <div class="row col-8 contenedor-info">
        <h1 class="titulo-profile p-2">Liga Dominical 228</h1>
        <div class="col-9 pl-4 mb-4 mt-1 details-leagues">
            <span class="detail-futbol">
                <i class="fas fa-futbol"></i>
                Fútbol
            </span>

            <span class="detail-genero">
                <i class="fas fa-info-circle"></i>
                Varones
            </span>

            <span class="detail-aficionado">
                <i class="fas fa-trophy"></i>
                Aficionado
            </span>
        </div>
        <div class="col-3">
            <button class="btn-futsi-outline" v-if="volver_pagina" @click="volverPagina">
                <i class="fas fa-arrow-left"></i>
                VOLVER
            </button>
        </div>
    </div>
    <!--HEADER-->
  </div>
</template>

<script>
export default {
    props: ['volver_pagina'],
    methods: {
        volverPagina() {
            this.$emit('onVolver')
        }
    }
}
</script>
