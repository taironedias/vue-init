<template>
    <div class="row">
        <!-- column 1 -->
        <div class="col-8">
            <h2>Filmes</h2>

            <ul class="list-group list-group-flush">
                <!-- a class 'dark-theme' é adicionada automaticamente pelo Vue no atributo class do component em questão, ficando assim o li com 'list-group-item dark-theme' -->
                <FilmesListaItem
                    v-for="filme in filmes"
                    :key="filme.id"
                    v-bind="filme"
                    class="dark-theme"
                    placeholder="Título do filme"
                />
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
                { id: 1, title: 'Capitão Marvel', year: 2019, director: 'Stan Lee'},
                { id: 2, title: 'Vingadores: Guerra Infinita', year: 2019, director: 'Stan Lee'},
                { id: 3, title: 'Homem-Aranha: Longe de Casa', year: 2019, director: 'Stan Lee'},
                { id: 4, title: 'Viúva Negra', year: 2021, director: 'Stan Lee'}
            ]
        }
    }
}
</script>