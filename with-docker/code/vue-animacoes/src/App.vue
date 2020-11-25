<template>
    <div id="app">

        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Animações</h1>
                <p class="lead">Treinando transição/animação de elementos/components no Vue.js</p>
            </div>
        </div>

        <div class="container">
            <h3 class="font-weight-light">Animações de Estado</h3>

            <div class="form-group">
                <input class="form-control" v-model="numero" @keyup.enter="deslocar">
            </div>

            <div class="alert alert-info">
                <h3 class="font-weight-light">
                    <strong>Número: </strong>
                    <span id="test" ref="refTest">{{ numero }}</span>
                </h3>
            </div>
            <img ref="logo" src="./assets/logo.png" alt="Logo Vue.js">

        </div>

    </div>
</template>

<script>

import { gsap } from 'gsap';

export default {
    data() {
        return {
            numero: 0,
            numeroInerpolado: 0
        }
    },
    computed: {
        numeroAnimado() {
            return this.numeroInerpolado.toFixed(0)
        }
    },
    methods: {
        deslocar() {
            console.log('this.$refs.refTest :>> ', this.$refs.refTest);
            gsap.to(this.$refs.logo, {duration: 2, x: this.numero})
        }
    }
}
</script>

<style scoped>
    
</style>