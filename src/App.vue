<template>
  <transition name="fade" mode="out-in">
      <router-view></router-view>
  </transition>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
  window.$ = $
  export default {
    data(){
      return{
      usuarioActual: null,
      };
    },
  }
</script>
<style lang="scss">
   @import "./sass/main.scss";
</style>
<style>
  .logout {
    color: #fff;
    border: none;
  }
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>