<template>
  <div>
    <div class="row justify-content-center col-12 mb-3">
        <div class="col-8">
                <router-link :to="{ name:'TournamentsCreate'}" class="btn-blue btn-block">
                    <i class="fas fa-plus"></i>
                    Crear Liga
                </router-link>
        </div>
    </div>
    <div class="row justify-content-center">
        
        <div class="col-7 liga">
            <router-link :to="{ name:'ProfileLeagues', params: { id: 2 }}">
                <span class="texto-liga">
                    Liga Premier Dominical 228
                </span>
            </router-link>
        </div>
        <div class="col-7 liga">
            <a href="#">
                <span class="texto-liga">
                    Liga Infantil Dominical 228
                </span>
            </a>
        </div>
        <div class="col-7 liga">
            <a href="#">
                <span class="texto-liga">
                    Liga Juvenil Sabatina 228
                </span>
            </a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
