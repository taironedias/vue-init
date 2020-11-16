<template>
    <div id="app">

        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Animações</h1>
                <p class="lead">Treinando transição/animação de elementos/components no Vue.js</p>
            </div>
        </div>

        <div class="container">
            <div class="btn btn-primary mb-3" @click="mostrar = !mostrar">Mostrar</div>

            <div class="alert alert-primary" v-if="mostrar">Animações em Vue.js</div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            mostrar: true
        }
    }
}
</script>