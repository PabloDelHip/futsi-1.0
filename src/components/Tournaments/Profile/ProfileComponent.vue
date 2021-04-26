<template>
    <div class="row col-12 justify-content-center">
        <div class="row col-12 align-items-center contenedor-menu-tournament contenedor-info-tournament mb-3">
            <div class="col-12 text-center menu-tournament">
                <router-link
                    active-class="active-menu-tournament"
                    :to="{ name: 'InformationTournaments', params: {id: 5}}">
                    <i class="fas fa-info-circle"></i> Inf. Torneo
                </router-link>
                <router-link
                    active-class="active-menu-tournament"
                    :to="{ name: 'NewsTournaments', params: {id: 5}}">
                    <i class="fas fa-newspaper"></i>
                    Noticias
                </router-link>
                <router-link
                    active-class="active-menu-tournament"
                    :to="{ name: 'TeamsInTournaments', params: {id: 5}}">
                    <i class="fas fa-shield-alt"></i>
                    Equipos
                </router-link>
                <router-link
                    active-class="active-menu-tournament"
                    :to="{ name: 'MatchesTournaments', params: {id: 5}}">
                    <i class="fas fa-sitemap"></i>
                    Partidos
                </router-link>
                <!--<router-link
                    active-class="active-menu-tournament"
                    :to="{ name: 'ResultsTournaments', params: {id: 5}}">
                    <i class="fas fa-list-alt"></i>
                    Resultados
                </router-link> -->
                <router-link
                    active-class="active-menu-tournament"
                    :to="{ name: 'PositionsTournaments', params: {id: 5}}">
                    <i class="fas fa-list-ol"></i>
                    Tabla
                </router-link>
                <router-link
                    active-class="active-menu-tournament"
                    :to="{ name: 'ReportsTournaments', params: {id: 5}}">
                    <i class="fas fa-chart-bar"></i>
                    Reportes
                </router-link>
                <router-link
                    active-class="active-menu-tournament"
                    :to="{ name: 'PlayersTournaments', params: {id: 5}}">
                    <i class="fas fa-user-shield"></i>
                    Jugadores
                </router-link>
            </div>
        </div>
    
        <transition class="col-12" name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        
    </div>
</template>

<script>
export default {
    
}
</script>
