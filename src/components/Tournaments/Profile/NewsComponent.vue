<template>
    <div class="row justify-content-center col-12 mb-3">
        <modal name="modal-noticias"
        :height="'auto'"
        :scrollable="true">
            <div class="row m-0 p-3">
                <div class="col-12 text-center mt-2">
                    <p class="titulo-azul">Crear Noticia</p>
                </div>
                <div class="col-12 row">
                    <div class="col-12">
                        <label>Titulo</label>
                        <input type="text" class="form-control rounded-0" placeholder="Eje: Torneo de apertura">
                    </div>
                    <div class="col-sm-12 mt-3">
                        <div class="form-group">
                            <label>Descripción corta</label>
                            <textarea class="form-control" rows="3" placeholder></textarea>
                        </div>
                    </div>
                    <div class="col-sm-12 mt-3">
                        <div class="form-group">
                            <label>Contenido de la noticia</label>
                            <textarea id="editorCase" class="form-control" rows="3" placeholder></textarea>
                        </div>
                    </div>

                    <!--<div class="col-12">
                    <a href="#" class="eliminar">
                        <i class="fas fa-trash-alt"></i>
                        Eliminar competición
                    </a>
                    </div> -->

                    <div style="width: 100%;">
                    <hr>
                    </div>
                    <div class="col-6 text-center">
                    <button class="btn-futsi-outline">
                        Cancelar
                    </button>
                    </div>
                    <div class="col-6 text-center">
                    <button class="btn-futsi btn-azul-fuerte" style="border: 0;">
                        Guardar
                    </button>
                    </div>
                </div>
            </div>
        </modal>
        <div class="col-8">
            <button @click="show()" class="btn-blue btn-block">
                <i class="fas fa-plus"></i>
                Crear Noticia
            </button>
        </div>
        <div class="row col-8 mb-2 contenedor-info-tournament p-0">
            <div class="col-12  p-3 text-center contenedor-noticia">
                <p class="texto-gris p-0 m-0">20-abril-2021</p>
                <p class="titulo-medio-pequeño-azul p-0 m-0">Esta noticia esta buena</p>
                <button>
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
        <div class="row col-8 mb-2 contenedor-info-tournament p-0">
            <div class="col-12  p-3 text-center contenedor-noticia">
                <p class="texto-gris p-0 m-0">20-abril-2021</p>
                <p class="titulo-medio-pequeño-azul p-0 m-0">Esta noticia esta buena</p>
                <button>
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
        <div class="row col-8 mb-2 contenedor-info-tournament p-0">
            <div class="col-12  p-3 text-center contenedor-noticia">
                <p class="texto-gris p-0 m-0">20-abril-2021</p>
                <p class="titulo-medio-pequeño-azul p-0 m-0">Esta noticia esta buena</p>
                <button>
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
        <div class="row col-8 mb-2 contenedor-info-tournament p-0">
            <div class="col-12  p-3 text-center contenedor-noticia">
                <p class="texto-gris p-0 m-0">20-abril-2021</p>
                <p class="titulo-medio-pequeño-azul p-0 m-0">Esta noticia esta buena</p>
                <button>
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
        <div class="row col-8 mb-2 contenedor-info-tournament p-0">
            <div class="col-12  p-3 text-center contenedor-noticia">
                <p class="texto-gris p-0 m-0">20-abril-2021</p>
                <p class="titulo-medio-pequeño-azul p-0 m-0">Esta noticia esta buena</p>
                <button>
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
        <div class="row col-8 mb-2 contenedor-info-tournament p-0">
            <div class="col-12  p-3 text-center contenedor-noticia">
                <p class="texto-gris p-0 m-0">20-abril-2021</p>
                <p class="titulo-medio-pequeño-azul p-0 m-0">Esta noticia esta buena</p>
                <button>
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
const $ = require("jquery")
import "summernote/dist/summernote-lite.min.css";
import "summernote/dist/summernote-lite.min";
export default {
    methods: {
        show () {
            this.$modal.show('modal-noticias');

            $(function() {
            //SUMMERNOTE
                $('#editorCase').summernote();
                $('#editorCase').summernote('code', '')
            });
            
            
        },
        hide () {
            this.$modal.hide('modal-noticias');
        }
    }
}
</script>