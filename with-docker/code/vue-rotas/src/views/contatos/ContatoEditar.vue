<template>
    <div>
        <h3 class="font-weight-light">Editar Contato (ID: {{ id }})</h3>
        <button
            class="btn btn-secondary mt-4 mb-4"
            @click="$router.back()">
                Voltar
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    beforeRouteUpdate(to, from, next) {
        this.id = to.params.id
        next()
    }
}
</script>