<template>
    <li class="list-group-item">
        <span>{{ filmeTituloConcat }}</span>
        <button class="btn btn-success float-right">Selecionar</button>
    </li>
</template>

<script>
export default {
    props: ['filmeTitulo'],
    computed: {
        filmeTituloConcat() {
            return `Titulo: ${this.filmeTitulo}`
        }
    }
}
</script>