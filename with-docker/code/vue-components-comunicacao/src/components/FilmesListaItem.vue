<template>
    <li class="list-group-item">
        <span>{{ movie.title }} ({{ movie.year }})</span>
        <button class="btn btn-success float-right" @click="chooseMovie">Selecionar</button>
    </li>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true
        }
    },
    methods: {
        chooseMovie() {
            this.$emit('movieSelected', this.movie)
        }
    }
}
</script>