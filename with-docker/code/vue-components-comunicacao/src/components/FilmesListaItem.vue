<template>
    <li class="list-group-item">
        <span>{{ filmeTituloConcat }} ({{ year }})</span>
        <button class="btn btn-success float-right">Selecionar</button>
    </li>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        year: {
            type: Number,
            required: true
        }
    },
    computed: {
        filmeTituloConcat() {
            return `Titulo: ${this.title}`
        }
    }
}
</script>