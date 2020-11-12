<template>
    <li class="list-group-item">
        <span>{{ movie.title }} ({{ movie.year }})</span>
        <button class="btn btn-success float-right" @click="chooseMovie">Selecionar</button>
    </li>
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
    methods: {
        chooseMovie() {
            // this.$emit('movieSelected', this.movie)
            // eventBus.$emit('movieSelected', this.movie)
            eventBus.movieSelected(this.movie)
        }
    }
}
</script>