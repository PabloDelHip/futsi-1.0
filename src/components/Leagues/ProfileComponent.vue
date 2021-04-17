<template>
    <div class="row col-12 justify-content-center">
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
              <a href="#" class="btn-futsi btn-azul-fuerte">
                Ver
              </a>
              <a href="#" class="ml-4 btn-futsi-outline">
                Editar
              </a>
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
                <img src="/dist/img/leagues/plus.png">
                <p class="mt-2">Crear Torneo</p>
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