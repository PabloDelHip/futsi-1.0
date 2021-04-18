<template>
    <div class="row col-12 justify-content-center">
      <modal name="my-first-modal"
        :height="'auto'"
        :scrollable="true">
        <div class="row m-0 p-3">
          <div class="col-12 text-center mt-2">
            <p class="titulo-azul">Editar información de la liga.</p>
          </div>
          <div class="col-12 row">
            <div class="col-12">
              <label>Nombre del torneo</label>
              <input type="text" class="form-control rounded-0" placeholder="Eje: Torneo de apertura">
            </div>
            <div class="col-sm-12 mt-3">
                <div class="form-group">
                    <label>Descripción</label>
                    <textarea class="form-control" rows="3" placeholder></textarea>
                </div>
            </div>

            <div class="form-group col-6">
                <label for="exampleInputRounded0">Tipo de torneo</label>
                <select class="custom-select rounded-0" id="exampleSelectRounded0">
                  <option></option>
                  <option>Profecional</option>
                  <option>Amateur</option>
                </select>
            </div>

            <div class="form-group col-6">
                <label for="exampleInputRounded0">Deporte</label>
                <select class="custom-select rounded-0" id="exampleSelectRounded0">
                  <option></option>
                  <option>Futbol 7</option>
                  <option>Futbol 11</option>
                  <option>Futbol Rapido</option>
                </select>
            </div>

            <div class="form-group col-6">
                <label for="exampleInputRounded0">Genero</label>
                <select class="custom-select rounded-0" id="exampleSelectRounded0">
                  <option></option>
                  <option>Masculino</option>
                  <option>Femenino</option>
                  <option>Mixto</option>
                </select>
            </div>

            <div class="col-12">
              <a href="#" class="eliminar">
                <i class="fas fa-trash-alt"></i>
                Eliminar competición
              </a>
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
                Guardar
              </button>
            </div>
          </div>
        </div>
      </modal>
      <div class="row col-8 contenedor-info">
          <div class="col-12" style="padding-top: 13px;">
              <h1 class="titulo-profile">Liga Dominical 228</h1>
          </div>
          <div class="col-12 row img-portada-league p-0 m-0 align-items-center"
              :style="{
                'background': 'url(/dist/img/leagues/default-profile.png) no-repeat center',}">
              <div class="col-12 text-center">
                <img src="/dist/img/camera.png" >
              </div>
              <!--<VueFileAgent
                      ref="vueFileAgent"
                      :theme="'default'"
                      :multiple="true"
                      :deletable="true"
                      :meta="true"
                      :accept="'image/*'"
                      :maxSize="'30MB'"
                      :maxFiles="1"
                      :helpText="'Solooo se aceptan imagenes'"
                      :errorText="{
                          type: 'Tipo de archivo invalido. Solo se permiten imágenes',
                          size: 'Los archivos no deben exceder los 30MB de tamaño',
                      }"
                      @select="filesSelected($event)"
                      @beforedelete="onBeforeDelete($event)"
                      @delete="fileDeleted($event)"
                      v-model="fileRecords"
                      >
                  </VueFileAgent> -->
          </div>

          <div class="col-6 img-profile-league pl-5 m-0">
            <img class="img-profile" src="/dist/img/leagues/league-profile.png" >
              <img class="camere" src="/dist/img/camera.png" >
          </div>
          <div class="col-6 text-right pt-3">
            <!--<a href="#" class="btn-futsi btn-azul-fuerte">
              Administrar
            </a>-->
            <button @click="show()" class="ml-4 btn-futsi-outline">
              Editar
            </button>
          </div>
          <div class="col-12 pl-4 pt-4 pr-4 pb-2">
            <h2 class="titulo-profile">Liga Dominical 228</h2>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus, id dignissimos esse fugit atque minus. Explicabo neque sint a, ut molestiae sapiente et, quia dolore qui quidem dicta voluptate.</small>
            <hr>
            <a href="#">Ver campeones de la liga</a>
          </div>
          <div class="col-12 pl-4 mb-4 mt-1 details-leagues">
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
      </div>
      <!--Info del torneo -->
      <div class="col-10 row contenedor-info mt-4 p-3 info-torneos-league">
        <div class="col-12">
          <h3>Torneos</h3>
        </div>
        <div class="col-4 mb-3">
          <div class="torneo-league row align-items-center text-center m-0">
            <div class="col-12 plus-torneo">
              <router-link
                  :to="{ name:'VersionTournament',
                        params: {id_league: 3} }">
                  <img src="/dist/img/leagues/plus.png">
                  <p class="mt-2">Crear Torneo</p>
              </router-link>
            </div>
          </div> 
        </div>
        <div class="col-4 mb-3">
          <div class="torneo-league">
            <img src="/dist/img/leagues/default-profile.png" class="sub-img-league">
            <h3 class="texto-liga-torneo text-center">Nombre torneo</h3>
            <div class="col-12 row pl-3 pr-3">
              <p>
                <i class="fas fa-shield-alt"></i>
                Num. Equipos: <span>14</span>
              </p>
              <p>
                <i class="far fa-handshake"></i>
                Jornada Actual: <span>9</span>
              </p>
              <p>
                <i class="fas fa-medal"></i>
                Mejor equipo: <span>Sporting</span>
              </p>
              <p>
                <i class="fas fa-futbol"></i>
                Goleador: <span>Jehu Oxte</span>
              </p>
            </div>
            <div class="col-12 text-center status-torneo">
              <span>En curso</span>
            </div>
          </div>
        </div>

        <div class="col-4 mb-3">
          <div class="torneo-league">
            <img src="/dist/img/leagues/default-profile.png" class="sub-img-league">
            <h3 class="texto-liga-torneo text-center">Nombre torneo</h3>
            <div class="col-12 row pl-3 pr-3">
              <p>
                <i class="fas fa-shield-alt"></i>
                Num. Equipos: <span>14</span>
              </p>
              <p>
                <i class="far fa-handshake"></i>
                Jornada Actual: <span>9</span>
              </p>
              <p>
                <i class="fas fa-medal"></i>
                Mejor equipo: <span>Sporting</span>
              </p>
              <p>
                <i class="fas fa-futbol"></i>
                Goleador: <span>Jehu Oxte</span>
              </p>
            </div>
            <div class="col-12 text-center status-torneo">
              <span>En curso</span>
            </div>
          </div>
        </div>

        <div class="col-4 mb-3">
          <div class="torneo-league">
            <img src="/dist/img/leagues/default-profile.png" class="sub-img-league">
            <h3 class="texto-liga-torneo text-center">Nombre torneo</h3>
            <div class="col-12 row pl-3 pr-3">
              <p>
                <i class="fas fa-shield-alt"></i>
                Num. Equipos: <span>14</span>
              </p>
              <p>
                <i class="far fa-handshake"></i>
                Jornada Actual: <span>9</span>
              </p>
              <p>
                <i class="fas fa-medal"></i>
                Mejor equipo: <span>Sporting</span>
              </p>
              <p>
                <i class="fas fa-futbol"></i>
                Goleador: <span>Jehu Oxte</span>
              </p>
            </div>
            <div class="col-12 text-center status-torneo">
              <span>En curso</span>
            </div>
          </div>
        </div>

        <div class="col-4 mb-3">
          <div class="torneo-league">
            <img src="/dist/img/leagues/default-profile.png" class="sub-img-league">
            <h3 class="texto-liga-torneo text-center">Nombre torneo</h3>
            <div class="col-12 row pl-3 pr-3">
              <p>
                <i class="fas fa-shield-alt"></i>
                Num. Equipos: <span>14</span>
              </p>
              <p>
                <i class="far fa-handshake"></i>
                Jornada Actual: <span>9</span>
              </p>
              <p>
                <i class="fas fa-medal"></i>
                Mejor equipo: <span>Sporting</span>
              </p>
              <p>
                <i class="fas fa-futbol"></i>
                Goleador: <span>Jehu Oxte</span>
              </p>
            </div>
            <div class="col-12 text-center status-torneo-finalizado">
              <span>Finalizado</span>
            </div>
          </div>
        </div>

        <div class="col-4 mb-3">
          <div class="torneo-league">
            <img src="/dist/img/leagues/default-profile.png" class="sub-img-league">
            <h3 class="texto-liga-torneo text-center">Nombre torneo</h3>
            <div class="col-12 row pl-3 pr-3">
              <p>
                <i class="fas fa-shield-alt"></i>
                Num. Equipos: <span>14</span>
              </p>
              <p>
                <i class="far fa-handshake"></i>
                Jornada Actual: <span>9</span>
              </p>
              <p>
                <i class="fas fa-medal"></i>
                Mejor equipo: <span>Sporting</span>
              </p>
              <p>
                <i class="fas fa-futbol"></i>
                Goleador: <span>Jehu Oxte</span>
              </p>
            </div>
            <div class="col-12 text-center status-torneo">
              <span>En curso</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    data: function () {
      return {
        fileRecords: [
          {
            "name":"Some Large File",
            "type": "image/png",
            "url": "/dist/img/leagues/default-profile.png",
            "size": 25165824, // 24 MB
            "ext":"png",
          },
        ],
        uploadUrl: '/dist/img/leagues/default-profile.png',
        uploadHeaders: { 'X-Test-Header': 'vue-file-agent' },
        fileRecordsForUpload: [], // maintain an upload queue
      };
    },
    methods: {
      show () {
            this.$modal.show('my-first-modal');
      },
      hide () {
            this.$modal.hide('my-first-modal');
      },
      uploadFiles: function () {
        // Using the default uploader. You may use another uploader instead.
        this.$refs.vueFileAgent.upload(this.uploadUrl, this.uploadHeaders, this.fileRecordsForUpload);
        this.fileRecordsForUpload = [];
      },
      deleteUploadedFile: function (fileRecord) {
        // Using the default uploader. You may use another uploader instead.
        this.$refs.vueFileAgent.deleteUpload(this.uploadUrl, this.uploadHeaders, fileRecord);
      },
      filesSelected: function (fileRecordsNewlySelected) {
        var validFileRecords = fileRecordsNewlySelected.filter((fileRecord) => !fileRecord.error);
        this.fileRecordsForUpload = this.fileRecordsForUpload.concat(validFileRecords);
      },
      onBeforeDelete: function (fileRecord) {
        var i = this.fileRecordsForUpload.indexOf(fileRecord);
        if (i !== -1) {
        // queued file, not yet uploaded. Just remove from the arrays
          this.fileRecordsForUpload.splice(i, 1);
          var k = this.fileRecords.indexOf(fileRecord);
          if (k !== -1) this.fileRecords.splice(k, 1);
        } else {
          if (confirm('¿Estás segura de que quieres eliminar la imagen?')) {
            this.$refs.vueFileAgent.deleteFileRecord(fileRecord); // will trigger 'delete' event
          }
        }
      },
      fileDeleted: function (fileRecord) {
        var i = this.fileRecordsForUpload.indexOf(fileRecord);
        if (i !== -1) {
          this.fileRecordsForUpload.splice(i, 1);
        } else {
          this.deleteUploadedFile(fileRecord);
        }
      },
    },
  };
</script>