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

            <transition
                appear

                @beforeEnter="beforeEnter"
                @enter="enter"
                @afterEnter="afterEnter"
                @enter-cancelled="enterCancelled"
                
                @beforeLeave="beforeLeave"
                @leave="leave"
                @afterLeave="afterLeave"
                @leave-cancelled="enterCancelled"
                
                :css="false">
                <!-- com :css="false" indicamos ao Vue.js para pular a verificação de animações do CSS -->
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
    },
    methods: {
        beforeEnter(el) {
            console.log('beforeEnter');
            el.style.opacity = 0
        },
        enter(el, done) {
            console.log('enter');

            let cont = 0
            const interval = setInterval(() => {
                el.style.opacity = parseFloat(el.style.opacity) + 0.1
                cont++

                if (cont > 10) {
                    clearInterval(interval)
                    done()
                }

            }, 150)
        },
        afterEnter(el) {
            console.log('afterEnter', el);
        },
        enterCancelled(el) {
            console.log('enterCancelled', el);
        },

        beforeLeave(el) {
            console.log('beforeLeave');
            el.style.transition = 'width 0.5s'
            el.style.overflow = 'hidden'
            el.style.whiteSpace = 'nowrap'
        },
        leave(el, done) {
            console.log('leave');
            let cont = 0
            const lenght = el.offsetWidth

            const interval = setInterval(() => {
                el.style.width = (lenght * (1 - (cont / 10))) + 'px'
                cont++

                if (cont > 10) {
                    clearInterval(interval)
                    done()
                }
            }, 150)
        },
        afterLeave(el) {
            console.log('afterLeave', el);
        },
        leaveCancelled(el) {
            console.log('leaveCancelled', el);
            console.log('O leaveCancelled só funciona com a diretiva v-show');
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