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

            <transition>
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
    /* entrada da transição */
    .v-enter {
        opacity: 0;
    }
    .v-enter-active {
        transition: opacity 1s;
    }
    .v-enter-to {
        opacity: 1;
    }

    /* saída da transição */
    .v-leave {
        opacity: 1;
    }
    .v-leave-active {
        transition: opacity 500ms;
    }
    .v-leave-to {
        opacity: 0;
    }
</style>