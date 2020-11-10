<template>
    <div class="row">
        <!-- column 1 -->
        <div class="col-8">
            <h2>Filmes</h2>

            <ul class="list-group list-group-flush">
                <FilmesListaItem
                    v-for="movie in movies"
                    :key="movie.id"
                    :movie="movie"
                    @movieSelected="movieSelected = $event"
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
            movies: [
                { id: 1, title: 'Capitão Marvel', year: 2019, director: 'Stan Lee'},
                { id: 2, title: 'Vingadores: Guerra Infinita', year: 2019, director: 'Stan Lee'},
                { id: 3, title: 'Homem-Aranha: Longe de Casa', year: 2019, director: 'Stan Lee'},
                { id: 4, title: 'Viúva Negra', year: 2021, director: 'Stan Lee'}
            ],
            movieSelected: undefined
        }
    }
}
</script>