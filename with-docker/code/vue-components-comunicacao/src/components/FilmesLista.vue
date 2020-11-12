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
                    :class="setActiveMovie(movie.id)"
                />
            </ul>
        </div>

        <!-- column 2 -->
        <div class="col-4">
            <FilmesListaItemInfo
                v-if="!edit"
                @editMovie="editMovie"
            />

            <FilmesListaItemEditar
                v-else
                :movie="movieSelected"
            />
        </div>
    </div>
</template>

<script>
import FilmesListaItem from './FilmesListaItem.vue';
import FilmesListaItemInfo from './FilmesListaItemInfo.vue';
import FilmesListaItemEditar from './FilmesListaItemEditar.vue';
import { eventBus } from './../main';

export default {
    components: {
        FilmesListaItem,
        FilmesListaItemInfo,
        FilmesListaItemEditar
    },
    data() {
        return {
            movies: [
                { id: 1, title: 'Capitão Marvel', year: 2019, director: 'Stan Lee'},
                { id: 2, title: 'Vingadores: Guerra Infinita', year: 2019, director: 'Stan Lee'},
                { id: 3, title: 'Homem-Aranha: Longe de Casa', year: 2019, director: 'Stan Lee'},
                { id: 4, title: 'Viúva Negra', year: 2021, director: 'Stan Lee'}
            ],
            movieSelected: undefined,
            edit: false
        }
    },
    methods: {
        setActiveMovie(movie_id) {
            return {
                active: this.movieSelected && this.movieSelected.id === movie_id
            }
        },
        editMovie(value) {
            this.edit = true
            this.movieSelected = value
        },
        updateMovie(movieUpdated) {
            const index = this.movies.findIndex(movie => movie.id === movieUpdated.id);
            this.movies.splice(index, 1, movieUpdated);
            this.movieSelected = undefined;
            this.edit = false;
        }
    },
    created() {
        eventBus.$on('movieSelected', (value) => {
            this.movieSelected = value
        }),
        eventBus.$on('updateMovie', this.updateMovie)
    }
}
</script>