<template>
    <div class="row col-12">
        <modal name="modal-new-player"
          :height="'auto'"
          :scrollable="true">
            <div class="row m-0 p-3">
                <div class="col-12 text-center mt-2">
                    <p class="titulo-azul">Agregar Jugador</p>
                </div>
                <div class="col-12 row">
                  <div class="form-group">
                    <VueFileAgent
                        ref="vueFileAgent"
                        :theme="'default'"
                        :multiple="true"
                        :deletable="true"
                        :meta="true"
                        :accept="'image/*'"
                        :maxSize="'5MB'"
                        :maxFiles="1"
                        :helpText="'Solo se aceptan imagenes'"
                        :errorText="{
                            type: 'Tipo de archivo invalido. Solo se permiten imágenes',
                            size: 'Los archivos no deben exceder los 5MB de tamaño',
                        }"
                        @select="filesSelected($event)"
                        @beforedelete="onBeforeDelete($event)"
                        @delete="fileDeleted($event)"
                        v-model="fileRecords"
                        >
                    </VueFileAgent>
                    
                    <!--<button :disabled="!fileRecordsForUpload.length" @click="uploadFiles()">
                    Upload {{ fileRecordsForUpload.length }} files
                    </button>-->
                  </div>
                    <div class="form-group col-12">
                        <label class="texto-pequeno" for="exampleInputRounded0"> <i class="fas fa-id-card"></i> Nombre completo</label>
                        <input type="text" class="form-control rounded-0" placeholder="Eje: Jose Galindo Perez">
                    </div>
                    <div class="form-group col-6">
                        <label class="texto-pequeno" for="exampleInputRounded0">
                          <i class="far fa-calendar-alt"></i>
                          Fecha de nacimiento</label>
                        <datetime v-model="start_date" value-zone="local" zone="local" :min-datetime="minDateTime"></datetime>
                    </div>
                    <div class="form-group col-6">
                        <label class="texto-pequeno" for="exampleInputRounded0"> <i class="far fa-futbol"></i> Posición en la cancha</label>
                        <multiselect
                          v-model="value"
                          :options="options"
                          placeholder="Seleccionar Posición">
                        </multiselect>
                    </div>
                    <div class="form-group col-6">
                        <label class="texto-pequeno" for="exampleInputRounded0"> <i class="fas fa-tshirt"></i> Numero de camiseta</label>
                        <input type="text" class="form-control rounded-0" placeholder="Eje: 10">
                    </div>
                    <div class="col-sm-12 mt-3">
                        <div class="form-group">
                            <label class="texto-pequeno"> <i class="fas fa-user"></i> Mas datos del deportista</label>
                            <textarea id="editorCase" class="form-control" rows="3" placeholder></textarea>
                        </div>
                    </div>

                    <!--<div class="col-12">
                    <a href="#" class="eliminar">
                        <i class="fas fa-trash-alt"></i>
                        Eliminar competición
                    </a>
                    </div> -->

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
                        Guardar
                    </button>
                    </div>
                </div>
            </div>
        </modal>
        <div class="row col-12 contenedor-info p-3">
            <div class="col-9 mb-3" style="padding-top: 13px;">
              <h1 class="titulo-profile">Planteel de Sporting</h1>
            </div>
            <div class="col-3 row align-items-center justify-content-end">
              <button @click="show()" class="btn-futsi-outline">
                Agregar Jugador
              </button>
            </div>
            <div class="col-3 mb-3">
                <div class="col-12 pt-3 pb-3 text-center contenedor-jugadores">
                    <img src="/dist/img/jugadores/jugador-default.png" width="120px" >
                    <h4 class="titulo-pequeño-azul-marino mt-2">Pablo Delfin Hipolito</h4>
                    <hr>
                    <span class="fecha-nacimiento mb-3">
                      01/09/1994 (27 años)
                    </span>
                    <p class="posicion">
                      Delantero centro
                    </p>
                    <span class="number-player"> 10 </span>
                    <button class="editar">
                      <i class="fas fa-edit"></i>
                    </button>
                </div>
            </div>

            <div class="col-3 mb-3">
                <div class="col-12 pt-3 pb-3 text-center contenedor-jugadores">
                    <img src="/dist/img/jugadores/jugador-default.png" width="120px" >
                    <h4 class="titulo-pequeño-azul-marino mt-2">Pablo Delfin Hipolito</h4>
                    <hr>
                    <span class="fecha-nacimiento mb-3">
                      01/09/1994 (27 años)
                    </span>
                    <p class="posicion">
                      Delantero centro
                    </p>
                    <span class="number-player"> 10 </span>
                    <button class="editar">
                      <i class="fas fa-edit"></i>
                    </button>
                </div>
            </div>

            <div class="col-3 mb-3">
                <div class="col-12 pt-3 pb-3 text-center contenedor-jugadores">
                    <img src="/dist/img/jugadores/jugador-default.png" width="120px" >
                    <h4 class="titulo-pequeño-azul-marino mt-2">Pablo Delfin Hipolito</h4>
                    <hr>
                    <span class="fecha-nacimiento mb-3">
                      01/09/1994 (27 años)
                    </span>
                    <p class="posicion">
                      Delantero centro
                    </p>
                    <span class="number-player"> 10 </span>
                    <button class="editar">
                      <i class="fas fa-edit"></i>
                    </button>
                </div>
            </div>

            <div class="col-3 mb-3">
                <div class="col-12 pt-3 pb-3 text-center contenedor-jugadores">
                    <img src="/dist/img/jugadores/jugador-default.png" width="120px" >
                    <h4 class="titulo-pequeño-azul-marino mt-2">Pablo Delfin Hipolito</h4>
                    <hr>
                    <span class="fecha-nacimiento mb-3">
                      01/09/1994 (27 años)
                    </span>
                    <p class="posicion">
                      Delantero centro
                    </p>
                    <span class="number-player"> 10 </span>
                    <button class="editar">
                      <i class="fas fa-edit"></i>
                    </button>
                </div>
            </div>

            <div class="col-3 mb-3">
                <div class="col-12 pt-3 pb-3 text-center contenedor-jugadores">
                    <img src="/dist/img/jugadores/jugador-default.png" width="120px" >
                    <h4 class="titulo-pequeño-azul-marino mt-2">Pablo Delfin Hipolito</h4>
                    <hr>
                    <span class="fecha-nacimiento mb-3">
                      01/09/1994 (27 años)
                    </span>
                    <p class="posicion">
                      Delantero centro
                    </p>
                    <span class="number-player"> 10 </span>
                    <button class="editar">
                      <i class="fas fa-edit"></i>
                    </button>
                </div>
            </div>

            <div class="col-3 mb-3">
                <div class="col-12 pt-3 pb-3 text-center contenedor-jugadores">
                    <img src="/dist/img/jugadores/jugador-default.png" width="120px" >
                    <h4 class="titulo-pequeño-azul-marino mt-2">Pablo Delfin Hipolito</h4>
                    <hr>
                    <span class="fecha-nacimiento mb-3">
                      01/09/1994 (27 años)
                    </span>
                    <p class="posicion">
                      Delantero centro
                    </p>
                    <span class="number-player"> 10 </span>
                    <button class="editar">
                      <i class="fas fa-edit"></i>
                    </button>
                </div>
            </div>

            <div class="col-3 mb-3">
                <div class="col-12 pt-3 pb-3 text-center contenedor-jugadores">
                    <img src="/dist/img/jugadores/jugador-default.png" width="120px" >
                    <h4 class="titulo-pequeño-azul-marino mt-2">Pablo Delfin Hipolito</h4>
                    <hr>
                    <span class="fecha-nacimiento mb-3">
                      01/09/1994 (27 años)
                    </span>
                    <p class="posicion">
                      Delantero centro
                    </p>
                    <span class="number-player"> 10 </span>
                    <button class="editar">
                      <i class="fas fa-edit"></i>
                    </button>
                </div>
            </div>

            <div class="col-3 mb-3">
                <div class="col-12 pt-3 pb-3 text-center contenedor-jugadores">
                    <img src="/dist/img/jugadores/jugador-default.png" width="120px" >
                    <h4 class="titulo-pequeño-azul-marino mt-2">Pablo Delfin Hipolito</h4>
                    <hr>
                    <span class="fecha-nacimiento mb-3">
                      01/09/1994 (27 años)
                    </span>
                    <p class="posicion">
                      Delantero centro
                    </p>
                    <span class="number-player"> 10 </span>
                    <button class="editar">
                      <i class="fas fa-edit"></i>
                    </button>
                </div>
            </div>

            <div class="col-3 mb-3">
                <div class="col-12 pt-3 pb-3 text-center contenedor-jugadores">
                    <img src="/dist/img/jugadores/jugador-default.png" width="120px" >
                    <h4 class="titulo-pequeño-azul-marino mt-2">Pablo Delfin Hipolito</h4>
                    <hr>
                    <span class="fecha-nacimiento mb-3">
                      01/09/1994 (27 años)
                    </span>
                    <p class="posicion">
                      Delantero centro
                    </p>
                    <span class="number-player"> 10 </span>
                    <button class="editar">
                      <i class="fas fa-edit"></i>
                    </button>
                </div>
            </div>

            <div class="col-3 mb-3">
                <div class="col-12 pt-3 pb-3 text-center contenedor-jugadores">
                    <img src="/dist/img/jugadores/jugador-default.png" width="120px" >
                    <h4 class="titulo-pequeño-azul-marino mt-2">Pablo Delfin Hipolito</h4>
                    <hr>
                    <span class="fecha-nacimiento mb-3">
                      01/09/1994 (27 años)
                    </span>
                    <p class="posicion">
                      Delantero centro
                    </p>
                    <span class="number-player"> 10 </span>
                    <button class="editar">
                      <i class="fas fa-edit"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const $ = require("jquery")
import { Datetime } from 'vue-datetime';
import moment from "moment";
import "summernote/dist/summernote-lite.min.css";
import "summernote/dist/summernote-lite.min";
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
        options: ['Portero', 'Defensa', 'Medio', 'Delantero'],
        fileRecords: [],
        uploadUrl: 'https://www.mocky.io/v2/5d4fb20b3000005c111099e3',
        uploadHeaders: { 'X-Test-Header': 'vue-file-agent' },
        fileRecordsForUpload: [], // maintain an upload queue
      }
  },
  methods: {
      show () {
          this.$modal.show('modal-new-player');

          $(function() {
          //SUMMERNOTE
              $('#editorCase').summernote();
              $('#editorCase').summernote('code', '')
          });
          
          
      },
      hide () {
          this.$modal.hide('modal-new-player');
      }
  },
  mounted() {
    this.minDateTime = moment().format("YYYY-MM-DD")
  }
}
</script>