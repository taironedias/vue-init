<template>
    <div>
        <h2 class="font-weight-light">Contador: {{ contador }}</h2>
        <button class="btn btn-lg btn-danger mr-1" @click="decrementar">
            <i class="fa fa-minus"></i>
        </button>
        <button class="btn btn-lg btn-success" @click="incrementar">
            <i class="fa fa-plus"></i>
        </button>
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
        decrementar() {
            this.contador--
        },
        incrementar() {
            this.contador++
        }
    }
}
</script>