<template>
    <div>
        <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Equipos</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Equipos</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">DataTable with default features</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="dataTable" class="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th id="columTeam">Equipo</th>
                    <th>PJ</th>
                    <th>G</th>
                    <th>E</th>
                    <th>P</th>
                    <th>GF</th>
                    <th>GC</th>
                    <th>DG</th>
                    <th>Pts</th>
                    <th>Últimos 5 partidos</th>
                  </tr>
                  </thead>
                    <tbody>
                        <tr>
                        <td>Cruz Azuuuuuuuul</td>
                        <td>12</td>
                        <td>10</td>
                        <td>0</td>
                        <td>2</td>
                        <td>25</td>
                        <td>8</td>
                        <td>17</td>
                        <td>30</td>
                        <td class="matchesTable">
                            <i class="fas fa-check-circle"></i>
                            <i class="fas fa-check-circle"></i>
                            <i class="fas fa-check-circle"></i>
                            <i class="fas fa-check-circle"></i>
                            <i class="fas fa-times-circle"></i>
                        </td>
                        </tr>
                    </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
    </div>
</template>
<script>
export default {
    methods: {
        createTable() {
            window.$(function () {
                    //DATA-TABLE
                    window.$("#dataTable").DataTable({
                    "ordering": false,
                    "responsive": false,
                    "buttons": ["copy", "csv", "excel", "pdf", "print"],
                    language: {
                        "decimal": "",
                        "emptyTable": "No hay información",
                        "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
                        "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
                        "infoFiltered": "(Filtrado de _MAX_ total entradas)",
                        "infoPostFix": "",
                        "thousands": ",",
                        "lengthMenu": "Mostrar _MENU_ Entradas",
                        "loadingRecords": "Cargando...",
                        "processing": "Procesando...",
                        "search": "Buscar:",
                        "zeroRecords": "Sin resultados encontrados",
                        "paginate": {
                            "first": "Primero",
                            "last": "Ultimo",
                            "next": "Siguiente",
                            "previous": "Anterior"
                        }
                    },
                    }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
                })
            let colum_team = document.getElementById("columTeam");
            colum_team.style.width = '25%'
        }
    },
    mounted() {
        
        this.createTable()
    }
}
</script>