<template>
    <!-- Main content -->
    <div class="padre row align-items-center col-12">
        <LoginComponent/>
    </div>
</template>

<script>
    import LoginComponent from '@/components/Login/LoginComponent';

    export default {
        components: {
            LoginComponent
        },
    }
</script>

<style>
.padre {
  display: flex;
  justify-content: center;
  height: 100vh;
}
</style>