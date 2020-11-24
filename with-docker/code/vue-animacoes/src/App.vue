<template>
    <div id="app">

        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Animações</h1>
                <p class="lead">Treinando transição/animação de elementos/components no Vue.js</p>
            </div>
        </div>

        <div class="container">
            <h3 class="font-weight-light">Tecnologias</h3>

            <div class="form-group">
                <input type="text" class="form-control"
                placeholder="Insira um novo item e pressione Enter"
                @keyup.enter="adicionar"
                ref="input">
            </div>

            <transition-group tag="ul" class="list-group" name="list">
                <li class="list-group-item"
                    v-for="(tecnologia, index) in tecnologias"
                    :key="tecnologia">
                        <span>{{ tecnologia }}</span>
                        <button class="btn btn-danger btn-sm float-right"
                            @click="remover(index)">
                                X
                        </button>
                </li>
            </transition-group>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            tecnologias: [
                'JavaScript',
                'Vue JS',
                'Vuex',
                'Vue Router'
            ]
        }
    },
    methods: {
        adicionar(event) {
            const novoIten = event.target.value;

            if (novoIten) {
                const index = Math.floor(Math.random() * this.tecnologias.length)
                this.tecnologias.splice(index, 0, novoIten)
                this.$refs.input.value = ''
            }
        },
        remover(index) {
            this.tecnologias.splice(index, 1)
        }
    }
}
</script>

<style scoped>
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateX(-70px);
    }
    .list-enter-active, .list-leave-active {
        transition: all 800ms;
    }
</style>