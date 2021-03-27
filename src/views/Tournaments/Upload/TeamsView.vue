<template>
    <!-- Main content -->
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
            <div class="col-sm-6">
                <h1>{ {Alta equipo} }</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">Equipos</li>
                </ol>
            </div>
            </div>
        </div><!-- /.container-fluid -->
        </section>
        <section class="content">
            <div class="container-fluid">
                <div class="row col-12">
                    <TeamsComponent/>
                    <PlayersComponent/>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import TeamsComponent from '@/components/Teams/Upload/TeamsComponent';
    import PlayersComponent from '@/components/Teams/Upload/PlayersComponent';

    export default {
        components: {
            TeamsComponent,
            PlayersComponent
        },
    }
</script>