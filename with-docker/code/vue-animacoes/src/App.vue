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

            <transition name="zoom">
                <div class="alert alert-primary" v-if="mostrar">Animações em Vue.js</div>
            </transition>
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

<style scoped>
    /* utilizando efeito de fade in e fade out */
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity 1s;
    }
    .fade-enter-to, .fade-leave {
        opacity: 1;
    }
    .fade-leave-active {
        transition: opacity 500ms;
    }

    /* utilizando o efeito de zoom */
    .zoom-enter, .zoom-leave-to {
        transform: scale(0);
    }
    .zoom-enter-active, .zoom-leave-active {
        transition: transform 500ms;
    }
    .zoom-enter-to, .zoom-leave {
        transform: scale(1)
    }
</style>