<template>
    <div>
        <h2>Filme selecionado</h2>

        <div class="card" v-if="movie">
            <div class="card-body">
                <h5 class="card-title">{{ movie.title }} ({{ movie.year }})</h5>
                <span class="font-italic">Diretor: {{ movie.director }}</span>
                <button @click="edit" class="btn btn-danger float-right">Editar</button>
            </div>
        </div>

        <p v-else>Nenhum filme foi selecionado</p>
    </div>
</template>

<script>

import { eventBus } from './../main';

export default {
    data() {
        return {
            movie: undefined
        }
    },
    created() {
        eventBus.$on('movieSelected', (value) => {
            this.movie = value
        })
    },
    methods: {
        edit() {
            this.$emit('editMovie', this.movie)
        }
    }
}
</script>