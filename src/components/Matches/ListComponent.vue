<template>
    <div>
        <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Jornadas { { Torneo } }</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Jornadas</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">

      <!-- Default box -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Jornada 1</h3>

          <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
              <i class="fas fa-minus"></i>
            </button>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-12 col-md-12 col-lg-12 order-2 order-md-1">
              <div class="row col-12">
                
                <div class="card col-12">
                    <div class="card-body">
                        <div class="row image-matches-teams">
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            
                        </div>
                        <!-- /.users-list -->
                    </div>
                    <!-- /.card-body -->
                </div>
                <!--/.card -->
                
                
              </div>
              <div class="row col-12">
                <div class="col-12 mb-1 mt-3">
                  <h4>Partidos / Resultados</h4>
                </div>
                <div class="col-3">
                    <div class="col-12 row imagenes-equipos-partidos">
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Sporting</span>
                            <br>
                            <span class="goles-ganador">3</span>
                            <!--<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">-->
                        </div>
                        <div class="col-2 text-center" style="margin: auto 0">
                            <span>vs</span>
                        </div>
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Fernandos</span>
                            <br>
                            <span class="goles-perdedor">2</span>    
                        </div>
                        <div class="col-12 text-center">
                            <router-link
                                    class="btn btn-sm btn-primary btn-block"
                                    :to="{ name: 'TournamentsPositionsTable', params: { idTournament: 1 } }"
                            >
                                <i class="far fa-handshake"></i> Resultado
                            </router-link>
                        </div>
                    </div>
                    
                </div>
                <div class="col-3">
                    <div class="col-12 row imagenes-equipos-partidos">
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Sporting</span>
                            <!--<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">-->
                        </div>
                        <div class="col-2 text-center" style="margin: auto 0">
                            <span>vs</span>
                        </div>
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Fernandos</span>      
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="col-12 row imagenes-equipos-partidos">
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Sporting</span>
                            <!--<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">-->
                        </div>
                        <div class="col-2 text-center" style="margin: auto 0">
                            <span>vs</span>
                        </div>
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Fernandos</span>      
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="col-12 row imagenes-equipos-partidos">
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Sporting</span>
                            <!--<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">-->
                        </div>
                        <div class="col-2 text-center" style="margin: auto 0">
                            <span>vs</span>
                        </div>
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Fernandos</span>      
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="col-12 row imagenes-equipos-partidos">
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Sporting</span>
                            <!--<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">-->
                        </div>
                        <div class="col-2 text-center" style="margin: auto 0">
                            <span>vs</span>
                        </div>
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Fernandos</span>      
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="col-12 row imagenes-equipos-partidos">
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Sporting</span>
                            <!--<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">-->
                        </div>
                        <div class="col-2 text-center" style="margin: auto 0">
                            <span>vs</span>
                        </div>
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Fernandos</span>      
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->

      <!-- Default box -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Jornada 2</h3>

          <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
              <i class="fas fa-minus"></i>
            </button>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-12 col-md-12 col-lg-12 order-2 order-md-1">
              <div class="row col-12">
                
                <div class="card col-12">
                    <div class="card-body">
                        <div class="row image-matches-teams">
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            
                        </div>
                        <!-- /.users-list -->
                    </div>
                    <!-- /.card-body -->
                </div>
                <!--/.card -->
                
                
              </div>
              <div class="row col-12">
                <div class="col-12 mb-1 mt-3">
                  <h4>Partidos / Resultados</h4>
                </div>
                <div class="col-3">
                    <div class="col-12 row imagenes-equipos-partidos">
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Sporting</span>
                            <!--<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">-->
                        </div>
                        <div class="col-2 text-center" style="margin: auto 0">
                            <span>vs</span>
                        </div>
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Fernandos</span>      
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="col-12 row imagenes-equipos-partidos">
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Sporting</span>
                            <!--<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">-->
                        </div>
                        <div class="col-2 text-center" style="margin: auto 0">
                            <span>vs</span>
                        </div>
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Fernandos</span>      
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="col-12 row imagenes-equipos-partidos">
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Sporting</span>
                            <!--<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">-->
                        </div>
                        <div class="col-2 text-center" style="margin: auto 0">
                            <span>vs</span>
                        </div>
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Fernandos</span>      
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="col-12 row imagenes-equipos-partidos">
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Sporting</span>
                            <!--<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">-->
                        </div>
                        <div class="col-2 text-center" style="margin: auto 0">
                            <span>vs</span>
                        </div>
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Fernandos</span>      
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="col-12 row imagenes-equipos-partidos">
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Sporting</span>
                            <!--<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">-->
                        </div>
                        <div class="col-2 text-center" style="margin: auto 0">
                            <span>vs</span>
                        </div>
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Fernandos</span>      
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="col-12 row imagenes-equipos-partidos">
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Sporting</span>
                            <!--<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">-->
                        </div>
                        <div class="col-2 text-center" style="margin: auto 0">
                            <span>vs</span>
                        </div>
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Fernandos</span>      
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->

      <!-- Default box -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Jornada 3</h3>

          <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
              <i class="fas fa-minus"></i>
            </button>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-12 col-md-12 col-lg-12 order-2 order-md-1">
              <div class="row col-12">
                
                <div class="card col-12">
                    <div class="card-body">
                        <div class="row image-matches-teams">
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            
                        </div>
                        <!-- /.users-list -->
                    </div>
                    <!-- /.card-body -->
                </div>
                <!--/.card -->
                
                
              </div>
              <div class="row col-12">
                <div class="col-12 mb-1 mt-3">
                  <h4>Partidos / Resultados</h4>
                </div>
                <div class="col-3">
                    <div class="col-12 row imagenes-equipos-partidos">
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Sporting</span>
                            <!--<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">-->
                        </div>
                        <div class="col-2 text-center" style="margin: auto 0">
                            <span>vs</span>
                        </div>
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Fernandos</span>      
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="col-12 row imagenes-equipos-partidos">
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Sporting</span>
                            <!--<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">-->
                        </div>
                        <div class="col-2 text-center" style="margin: auto 0">
                            <span>vs</span>
                        </div>
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Fernandos</span>      
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="col-12 row imagenes-equipos-partidos">
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Sporting</span>
                            <!--<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">-->
                        </div>
                        <div class="col-2 text-center" style="margin: auto 0">
                            <span>vs</span>
                        </div>
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Fernandos</span>      
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="col-12 row imagenes-equipos-partidos">
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Sporting</span>
                            <!--<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">-->
                        </div>
                        <div class="col-2 text-center" style="margin: auto 0">
                            <span>vs</span>
                        </div>
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Fernandos</span>      
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="col-12 row imagenes-equipos-partidos">
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Sporting</span>
                            <!--<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">-->
                        </div>
                        <div class="col-2 text-center" style="margin: auto 0">
                            <span>vs</span>
                        </div>
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Fernandos</span>      
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="col-12 row imagenes-equipos-partidos">
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Sporting</span>
                            <!--<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">-->
                        </div>
                        <div class="col-2 text-center" style="margin: auto 0">
                            <span>vs</span>
                        </div>
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Fernandos</span>      
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->

      <!-- Default box -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Jornada 4</h3>

          <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
              <i class="fas fa-minus"></i>
            </button>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-12 col-md-12 col-lg-12 order-2 order-md-1">
              <div class="row col-12">
                
                <div class="card col-12">
                    <div class="card-body">
                        <div class="row image-matches-teams">
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            <div class="col-2">
                                <img src="/dist/img/user8-128x128.jpg" class="rounded float-left" alt="...">
                            </div>
                            
                        </div>
                        <!-- /.users-list -->
                    </div>
                    <!-- /.card-body -->
                </div>
                <!--/.card -->
                
                
              </div>
              <div class="row col-12">
                <div class="col-12 mb-1 mt-3">
                  <h4>Partidos / Resultados</h4>
                </div>
                <div class="col-3">
                    <div class="col-12 row imagenes-equipos-partidos">
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Sporting</span>
                            <!--<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">-->
                        </div>
                        <div class="col-2 text-center" style="margin: auto 0">
                            <span>vs</span>
                        </div>
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Fernandos</span>      
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="col-12 row imagenes-equipos-partidos">
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Sporting</span>
                            <!--<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">-->
                        </div>
                        <div class="col-2 text-center" style="margin: auto 0">
                            <span>vs</span>
                        </div>
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Fernandos</span>      
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="col-12 row imagenes-equipos-partidos">
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Sporting</span>
                            <!--<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">-->
                        </div>
                        <div class="col-2 text-center" style="margin: auto 0">
                            <span>vs</span>
                        </div>
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Fernandos</span>      
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="col-12 row imagenes-equipos-partidos">
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Sporting</span>
                            <!--<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">-->
                        </div>
                        <div class="col-2 text-center" style="margin: auto 0">
                            <span>vs</span>
                        </div>
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Fernandos</span>      
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="col-12 row imagenes-equipos-partidos">
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Sporting</span>
                            <!--<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">-->
                        </div>
                        <div class="col-2 text-center" style="margin: auto 0">
                            <span>vs</span>
                        </div>
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Fernandos</span>      
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="col-12 row imagenes-equipos-partidos">
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Sporting</span>
                            <!--<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">-->
                        </div>
                        <div class="col-2 text-center" style="margin: auto 0">
                            <span>vs</span>
                        </div>
                        <div class="col-5 text-center">
                            <img class="card-img-top" style="width: 100%;" src="/dist/img/user8-128x128.jpg" alt="Card image cap">
                            <span>Fernandos</span>      
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->

      

    </section>
    <!-- /.content -->
    </div>
</template>