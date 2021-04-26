<template>
    <div class="row col-12 justify-content-center">
        <div class="col-8 contenedor-info text-center p-2 mb-3">
            <h1 class="titulo-profile">
                Tabla de posiciones del torneo
            </h1>
        </div>

        <div class="col-12 contenedor-info">
            <div class="card-body">
                <table id="dataTable" class="table table-bordered table-striped tabla-posiciones">
                  <thead>
                    <tr>
                        <th class="table-posicion">Pos</th>
                        <th class="table-equipos">Equipo</th>
                        <th class="table-puntos">(+/-) Puntos</th>
                        <th class="table-posicion">PJ</th>
                        <th class="table-posicion">G</th>
                        <th class="table-posicion">E</th>
                        <th class="table-posicion">P</th>
                        <th class="table-posicion">GF</th>
                        <th class="table-posicion">GC</th>
                        <th class="table-posicion">DG</th>
                        <th class="table-posicion">Pts</th>
                        <th>Últimos 5 partidos</th>
                    </tr>
                  </thead>
                    <tbody>
                        <tr>
                          <td>1</td>
                          <td class="tabla-nombre-equipo">Cruz Azul</td>
                          <td>
                              <button class="btn-blue btn-puntos btn-futsi-outline">
                                +/-
                            </button>
                          </td>
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
                        <tr>
                          <td>2</td>
                          <td class="tabla-nombre-equipo">America</td>
                          <td>
                              <button class="btn-blue btn-puntos btn-futsi-outline">
                                +/-
                            </button>
                          </td>
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
                        <tr>
                          <td>3</td>
                          <td class="tabla-nombre-equipo">Santos</td>
                          <td>
                              <button class="btn-blue btn-puntos btn-futsi-outline">
                                +/-
                            </button>
                          </td>
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
    
    </div>
</template>