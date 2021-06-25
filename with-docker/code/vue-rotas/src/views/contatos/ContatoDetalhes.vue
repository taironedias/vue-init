<template>
    <div>
        <h3 class="font-weight-light">Detalhes sobre o Contato (ID: {{ id }})</h3>
        <div style="height: 900px"></div>
        <p id="params" class="font-weight-light">Parâmetros: {{ parametros }}</p>
        <p class="font-weight-light">Hash: {{ $route.hash }}</p>
        <router-link
            :to="`/contatos/${id}/editar`"
            class="btn btn-primary mt-4 mb-4">
                Editar
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            require: true
        }
    },
    data() {
        return {
            parametros: this.$route.params
        }
    },
    beforeRouteUpdate(to, from, next) {
        console.log('beforeRouteUpdate')
        this.parametros = to.params
        next()
    }
}
</script>