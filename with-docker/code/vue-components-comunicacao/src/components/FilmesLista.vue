<template>
    <div class="row">
        <!-- column 1 -->
        <div class="col-8">
            <h2>Filmes</h2>

            <div class="list-group list-group-flush">
                <FilmesListaItem filmeTitulo="Capitão Marvel"/>
                <FilmesListaItem filmeTitulo="Vingadores: Guerra Infinita" />
                <FilmesListaItem filmeTitulo="Homem-Aranha: Longe de Casa"/>
            </div>
        </div>

        <!-- column 2 -->
        <div class="col-4">
            <FilmesListaItemInfo/>
        </div>
    </div>
</template>

<script>
import FilmesListaItem from './FilmesListaItem.vue';
import FilmesListaItemInfo from './FilmesListaItemInfo.vue';

export default {
    components: {
        FilmesListaItem,
        FilmesListaItemInfo
    }
}
</script>