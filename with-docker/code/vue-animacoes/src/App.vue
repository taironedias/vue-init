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

            <!-- Biblioteca de animações: https://animate.style/ -->
            <transition
                appear
                appear-class=""
                appear-active-class="animate__animated animate__bounceIn"
                appear-to-class=""

                enter-class=""
                enter-active-class="animate__animated animate__backInLeft"
                enter-to-class=""
                leave-class=""
                leave-active-class="animate__animated animate__backOutDown"
                leave-to-class="">
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

<style>
    body {
        overflow: hidden;
    }
</style>

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

    /* utilizando o efeito de slide */
    .slide-enter, .slide-leave-to {
        opacity: 0;
    }
    .slide-enter-active {
        /* Site onde montei e peguei a curva de animação: https://cubic-bezier.com/#.88,.61,1,.23 */
        animation: slideAnimations 700ms cubic-bezier(.88,.61,1,.23);
        transition: opacity 700ms cubic-bezier(.88,.61,1,.23);
    }
    .slide-enter-to, .slide-leave {
        opacity: 1;
    }
    .slide-leave-active {
        animation: slideAnimations 700ms reverse;
        transition: opacity 2s;
    }
    @keyframes slideAnimations {
        0% {
            transform: translateX(-100px);
        }
        100% {
            transform: translateX(0px);
        }
    }
</style>