<template>
    <div>
        <h2>Editar Filme</h2>

        <div class="form-group">
            <label for="">Título</label>
            <input
                type="text"
                class="form-control"
                placeholder="Insira o título"
                :value="movieSelected.title"
                @input="movieSelected = { key: 'title', value: $event.target.value }"
            >
        </div>

        <div class="form-group">
            <label for="">Ano</label>
            <input
                type="text"
                class="form-control"
                placeholder="Insira o ano"
                :value="movieSelected.year"
                @input="movieSelected = { key: 'year', value: parseInt($event.target.value) }"
            >
        </div>

        <button @click="saveMovie" class="btn btn-primary float-right">Salvar</button>

    </div>
</template>

<script>

import { eventBus } from './../main';

export default {
    props: {
        movie: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            movieLocal: this.movie
        }
    },
    computed: {
        movieSelected: {
            set(data) {
                this.movieLocal = Object.assign(
                    {},
                    this.movieLocal,
                    { [data.key]: data.value }
                )
            },
            get() {
                return this.movie
            }
        }
    },
    methods: {
        saveMovie() {
            // this.$emit('updateMovie', this.movieLocal)
            eventBus.updateMovie(this.movieLocal)
        }
    }
}
</script>