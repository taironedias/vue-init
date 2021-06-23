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
    props: ['id'],
    data() {
        return {
            curso: 'Curso Vue.js'
        }
    },
    beforeRouteEnter(to, from, next) {
        console.log('beforeRouteEnter');
        // console.log('this.curso :>> ', this.curso); // nesse momento, a instância Vue ainda não foi criada. Para executar qualquer instrução que necessite de algo dessa instância é importante implementar um callback para ser chamado pela função next, como segue abaixo
        if(to.query.auth === 'true') {
            return next(vm => {
                console.log('vm.curso :>> ', vm.curso);
            })
        }

        next('/contatos')
    },
    created() {
        console.log('this.$route.params :>> ', this.$route.params);
    }
}
</script>