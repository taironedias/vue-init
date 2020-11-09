/* Normalmente utiliza-se o prefixo App, Basic ou V para components base, components que montam o layout da aplicação */
<template>
    <div :class="$style.cont">
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

/* o recurso module, permite criar a property "$style" sendo um objeto onde suas chaves são os nomes das classes utilizado na tag de estilização. Por esse motivo, é possível chamar na diretiva 'v-bind:class' a property $style.nome_da_classe_definida */
<style module>
    .cont {
        border: 1px solid red;
    }
</style>