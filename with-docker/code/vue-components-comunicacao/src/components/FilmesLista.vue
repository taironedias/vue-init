<template>
    <div class="row">
        <!-- column 1 -->
        <div class="col-8">
            <h2>Filmes</h2>

            <ul class="list-group list-group-flush">
                <!-- <FilmesListaItem v-for="(filme, index) in filmes" :key="index" :filmeTitulo="filme"/> -->
                <FilmesListaItem filmeTitulo="Capitã Marvel"/>
            </ul>
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
    },
    data() {
        return {
            filmes: [
                'Capitão Marvel',
                'Vingadores: Guerra Infinita',
                'Homem-Aranha: Longe de Casa',
                'Viúva Negra'
            ]
        }
    }
}
</script>