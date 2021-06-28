<template>
    <div>
        <h2 class="font-weight-light">Contador: {{ $store.state.contador }}</h2>
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
    methods: {
        decrementar() {
            this.$store.state.contador--
        },
        incrementar() {
            this.$store.state.contador++
        }
    }
}
</script>