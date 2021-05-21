<template>
    <div>
        <h3 class="font-weight-light">Contatos</h3>
        <button class="btn btn-secondary mt-4 mb-4" @click="voltarPagina">Voltar</button>
    </div>
</template>

<script>
export default {
    methods: {
        voltarPagina() {
            /* Para qualquer caso abaixo, temos duas sintaxe: { path: 'nome_da_rota' } e apenas a string 'nome_da_rota' */
            // this.$router.push({ path: '/'})          // adiciona uma nova a rota no histórico de navegação
            // this.$router.replace('/')                // substitui a rota atual pela nova
            // this.$router.go(-1)                      // indica quantos passos que deseja avançar (número maior que 0) ou voltar (número menor que 0) no histórico de navegação
            // this.$router.forward()                   // avança um registro no histórico de navegação
            this.$router.back()                         // volta um registro no histórico de navegação
        }
    }
}
</script>