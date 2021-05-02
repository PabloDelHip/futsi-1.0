<template>
    <div class="col-5 row p-0 m-0 login">
       <div class="col-6 m-0 fondo-login justify-content-center row align-items-center">
          <img src="/dist/img/Logo-futsi.png" >
       </div>
       <div class="col-6 login-inputs">
           <h2>Login</h2>
           <div class="form-group col-12">
                <label for="exampleInputRounded0">
                    <i class="fas fa-id-card"></i>
                    Correo Electronico
                </label>
                <input type="text" class="form-control rounded-0" placeholder="Eje: example@email.com">
            </div>
            <div class="form-group col-12 contrasena-login">
                <label for="exampleInputRounded0">
                    <i class="fas fa-id-card"></i>
                    Contraseña
                </label>
                <input type="text" class="form-control rounded-0" placeholder="********">
            </div>
            <div class="col-12 mt-4 text-right">
                <button class="btn-futsi-outline">
                    Ingresar
                </button>
            </div>
       </div>
    </div>
</template>

<style >
body {
    
    background: url(/dist/img/fondo-login.png) center center no-repeat;
    background-size: cover !important;
}

.fondo-login {
    background: rgb(2,0,36);
    background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(35,162,204,0.196516106442577) 35%, rgba(0,212,255,1) 100%);
    background-size: cover !important;
    padding: 0 35px;
}
</style>