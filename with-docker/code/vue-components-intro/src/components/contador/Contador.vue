/* Normalmente utiliza-se o prefixo App, Basic ou V para components base, components que montam o layout da aplicação */
<template>
    <div>
        <h3>Clicado {{ contador }} vezes </h3>
        <button @click="incrementar">Incrementar ++</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        incrementar() {
            this.contador++
        }
    }
}
</script>

<style scoped>
    div {
        border: 1px solid red;
    }
</style>