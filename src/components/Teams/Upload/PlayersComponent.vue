<template>

          <div class="col-6">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Jugadores</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="dataTable" class="table table-bordered table-striped table-responsive">
                  <thead>
                    <tr>
                        <th></th>
                        <th>Jugador</th>
                        <th>PJ</th>
                        <th>G</th>
                        <th>A</th>
                        <th>R</th>
                        <th>Status</th>
                        <th>Acciones</th>
                    </tr>
                  </thead>
                    <tbody>
                        <tr>
                            <td>Fotoo</td>
                            <td>Pablo Delfin</td>
                            <td>8</td>
                            <td>30</td>
                            <td>A</td>
                            <td>R</td>
                            <td>Status</td>
                            <td>Acciones</td>
                        </tr>
                    </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
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