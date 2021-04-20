<template>
    <div class="row col-10 contenedor-info-tournament p-0">
        <div class="col-7 row img-portada-tournament p-0 m-0 align-items-center"
            :style="{
            'background': 'url(/dist/img/tournament/default-torneo.png) no-repeat center',}">
            <div class="col-12 text-center">
            <img src="/dist/img/camera.png" >
            </div>
        </div>

        <div class="col-5 info-tournament pl-4 pt-4">
            <div class="col-12 pl-3 pt-2 text-center">
                <h1 class="titulo-profile">Torneo de Apertura 2021</h1>
            </div>
            <hr>
            <div class="col-12">
                <p class="texto-mediano-ancho">
                    Tipo de torneo:
                    <span>
                        <i class="fas fa-futbol"></i>
                        Futbol 11 - Varones
                    </span>
                </p>
                <p class="texto-mediano-ancho">
                    Formato:
                    <span>
                        <i class="fas fa-sitemap"></i>
                        Liga con liguilla
                    </span>
                </p>
                <p class="texto-mediano-ancho">
                    Estatus:
                    <span>
                        <i class="fas fa-info-circle"></i>
                        Sin iniciar
                    </span>
                </p>
                <p class="texto-mediano-ancho">
                    Costo de inscripción:
                    <span>
                        <i class="fas fa-dollar-sign"></i>
                        500 mxn
                    </span>
                </p>
                <p class="texto-mediano-ancho">
                    Costo de albitraje:
                    <span>
                        <i class="fas fa-dollar-sign"></i>
                        250 mxn
                    </span>
                </p>
                <p class="texto-mediano-ancho">
                    Fecha de inicio:
                    <span>
                        <i class="fas fa-calendar-alt"></i>
                        25-Abril-2021
                    </span>
                </p>
                <p class="texto-mediano-ancho">
                    Fecha estimada de fin:
                    <span>
                        <i class="fas fa-calendar-alt"></i>
                        25-Julio-2021
                    </span>
                </p>
            </div>
            <div class="col-12">
                <button class="btn-futsi-outline">
                    Editar
                </button>
                <button class="btn-futsi btn-azul-fuerte mb-2">
                    Inscribir
                </button>
            </div>
        </div>
        <div class="col-7">
            <button class="btn-futsi btn-azul-marino">
                <i class="fas fa-chevron-down"></i>
                Estatus: Sin iniciar
            </button>
        </div>
        <div class="col-5">
            <small class="texto-gris">Recuerda invitar a los equipos de tu torneo a que se inscriban por Futsi, y la administración de tu torneo será sencilla</small>
        </div>
        <div class="col-12 mt-3 pl-4 pr-4">
            <h2 class="titulo-medio-pequeño-azul">Más información del torneo</h2>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus, id dignissimos esse fugit atque minus. Explicabo neque sint a, ut molestiae sapiente et, quia dolore qui quidem dicta voluptate.</small>
            <hr>
        </div>
        <div class="col-6 mt-3 pl-4 pr-4 pb-2 mas-informacion-torneo">
            <p class="texto-pequeno p-0 m-0 mb-3">
                <i class="fas fa-map-marker-alt"></i> Dirección:
                <span>
                    Domo de la region 228
                </span>
            </p>
            <p class="texto-pequeno p-0 m-0 mb-3">
                <i class="fas fa-calendar-alt"></i> Días de los partidos:
                <span>
                    Viernes, Sabado y Domingo
                </span>
            </p>
            <p class="texto-pequeno p-0 m-0 ">
                <i class="fas fa-info-circle"></i> Mas detalles del torneo
            </p>
            <di>
                <a href="#">Bases del torneo</a> 
            </di>
        </div>
        <div class="col-6 mt-3 pl-4 pr-4 pb-2 mas-informacion-torneo">
            <p class="texto-pequeno p-0 m-0 mb-3">
                <i class="fas fa-trophy"></i> Premios del torneo
            </p>
            <ul>
                <li class="texto-gris">Primer lugar trofeo y 5 mil pesos</li>
                <li class="texto-gris">Trofeo de goleador</li>
                <li class="texto-gris">Trofeo al portero menos goleado</li>
            </ul>
        </div>
    </div>
</template>