<template>
    <div>
        <h2 class="font-weight-light">Contador: {{ contador }}</h2>
        <h4 class="font-weight-light">Contador x2: {{ contadorMultiplicado }}</h4>
        <h4 class="font-weight-light">Contador Alias: {{ contadorAlias }}</h4>
        <button class="btn btn-lg btn-danger mr-1" @click="decrementar">
            <i class="fa fa-minus"></i>
        </button>
        <button class="btn btn-lg btn-success" @click="incrementar">
            <i class="fa fa-plus"></i>
        </button>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            constLocal: 2
        }
    },
    // computed: mapState(['contador']),    // primeira forma
    computed: {
        ...mapState('contador', {                    // segunda forma
            contador: state => state.contador,  // variação 1
            contadorMultiplicado(state) {       // variação 1.1
                /* utilizando essa variação quando é necessário acessar algum estado de propriedade local da instância Vue do component */
                return state.contador * this.constLocal
            },
            contadorAlias: state => state.contador           // variação 2
        })
        // outras computed properties do component
    },
    methods: {
        decrementar() {
            this.$store.state.contador.contador--
        },
        incrementar() {
            this.$store.state.contador.contador++
        }
    }
}
</script>