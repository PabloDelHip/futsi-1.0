<template>
  <div>
      <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Crear Torneo</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Crear Torneo</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <!-- left column -->
          <div class="col-md-8">

            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Informacion del torneo</h3>
              </div>
              <!-- /.card-header -->
                <div class="card-body row">
                    <div class="form-group col-12">
                        <label for="exampleInputRounded0">Nombre del torneo</label>
                        <input type="text" class="form-control rounded-0" placeholder="Eje: Torneo de apertura">
                    </div>
                    <div class="form-group col-7">
                        <label for="exampleInputRounded0">Num. de equipos que pasan a la siguiente ronda</label>
                        <input type="text" class="form-control rounded-0" placeholder="Eje: 14">
                    </div>
                    <div class="form-group col-6">
                        <label for="exampleInputRounded0">Num. de partidos de eliminacion</label>
                        <input type="text" class="form-control rounded-0" placeholder="Eje: 2">
                    </div>
                    <div class="form-group col-6">
                        <label for="exampleInputRounded0">Numero de partidos en la final</label>
                        <input type="text" class="form-control rounded-0" placeholder="Eje: 2">
                    </div>
                    <div class="form-group col-6">
                        <label for="exampleInputRounded0">Duracion de cada tiempo</label>
                        <div class="input-group mb-3">
                          <input type="text" class="form-control rounded-0" placeholder="Eje: 90">
                          <div class="input-group-append">
                            <span class="input-group-text">minutos</span>
                          </div>
                      </div>
                    </div>
                    <div class="form-group col-6">
                        <label for="exampleInputRounded0">Seleccionar genero</label>
                        <select class="custom-select rounded-0" id="exampleSelectRounded0">
                          <option></option>
                          <option>Masculino</option>
                          <option>Femenino</option>
                          <option>Mixto</option>
                        </select>
                    </div>
                    <div class="form-group col-6">
                        <label for="exampleInputRounded0">Fecha de inicio de torneo</label>
                        <datetime v-model="start_date" value-zone="local" zone="local" :min-datetime="minDateTime"></datetime>
                    </div>
                    <div class="form-group col-6">
                        <label for="exampleInputRounded0">Fecha estimada para finalizar el torneo</label>
                        <datetime  value-zone="local" zone="local" :min-datetime="minDateTimefinalizar"></datetime>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label>Texto Adicional</label>
                            <textarea class="form-control" rows="3" placeholder></textarea>
                        </div>
                    </div>
                    <div class="col-12 row">
                        <div class="col-4">
                            <button type="submit" class="btn btn-block btn-success">
                                Guardar Torneo
                                <i class="fas fa-sync-alt fa-spin"></i>
                            </button>
                        </div>
                    </div>
                </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!--/.col (left) -->
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
import { Datetime } from 'vue-datetime';
import moment from "moment";
export default {
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
  mounted() {
    this.minDateTime = moment().format("YYYY-MM-DD")
  }

}
</script>

