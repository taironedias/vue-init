<template>
    <li class="list-group-item">
        <span>{{ filmeTituloConcat }}</span>
        <button class="btn btn-success float-right">Selecionar</button>
    </li>
</template>

<script>
export default {
    props: {
        filmeTitulo: String /* Caso deseje informar que o props pode receber mais de um tipo, basta passar um array das seguinte forma: [String, Number] */
    },
    computed: {
        filmeTituloConcat() {
            return `Titulo: ${this.filmeTitulo}`
        }
    },
    created() {
        console.log(typeof this.filmeTitulo);
    }
}
</script>