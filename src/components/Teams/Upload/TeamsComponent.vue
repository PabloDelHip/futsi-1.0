<template>
    <div class="col-md-6">
        <!-- general form elements -->
        <div class="card card-primary">
            <div class="card-header">
            <h3 class="card-title">Informacion del torneo</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body row">
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
                    <label for="exampleInputRounded0">Nombre del equipo</label>
                    <input type="text" class="form-control rounded-0" placeholder="Eje: Torneo de apertura">
                </div>
                <div class="col-12 row">
                    <div class="col-4">
                        <button type="submit" class="btn btn-block btn-success">
                            Guardar Equipo
                            <i class="fas fa-sync-alt fa-spin"></i>
                        </button>
                    </div>
                </div>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
        </div>
</template>

<script>
  export default {
    data: function () {
      return {
        fileRecords: [],
        uploadUrl: 'https://www.mocky.io/v2/5d4fb20b3000005c111099e3',
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