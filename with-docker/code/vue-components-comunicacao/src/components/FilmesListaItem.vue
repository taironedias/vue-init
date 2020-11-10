<template>
    <div>
        <input type="text" :value="title" :placeholder="$attrs.placeholder">
    </div>
    <!-- <li class="list-group-item">
        <span>{{ filmeTituloConcat }} ({{ year }})</span>
        <button class="btn btn-success float-right">Selecionar</button>
    </li> -->
</template>

<script>
export default {
    inheritAttrs: false, // Especifica se deseja herdar ou não os atributos do elemento root. Assim, podemos passar atributos customizáveis e utilizá-los nos elementos desejados. 
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
    },
    created() {
        console.log('Attrs: ', this.$attrs);
    }
}
</script>