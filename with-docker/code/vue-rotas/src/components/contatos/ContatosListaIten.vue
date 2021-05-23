<template>
    <li>
        <span>{{ contact.name }}</span>
        <router-link
            :to="{ name: 'contato', params: { id : contact.id } }"
            class="btn btn-info btn-sm float-right">
                Detalhes
        </router-link>
        <!-- <button
            class="btn btn-info btn-sm float-right"
            @click="verDetalhes">
                Detalhes
        </button> -->
    </li>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            require: true
        }
    },
    methods: {
        verDetalhes() {
            // this.$router.push(`/contatos/${this.contact.id}`)   // forma que adiciona na pilha de navegação
            // this.$router.push({ path: `/contatos/${this.contact.id}`})   // variação da forma acima porém com outra sintaxe
            // this.$router.push({ path: '/contatos', params: { id: this.contact.id } })   // utilizando o 'params' essa forma NÃO FUNCIONA pois a rota está nomeada, então a forma correta é o código abaixo
            // this.$router.push({ name: 'contato', params: { id: this.contact.id } })   // utilizando o 'params' essa forma NÃO FUNCIONA pois a rota está nomeada, então a forma correta é o código abaixo
            // this.$router.replace({ name: 'contato', params: { id: this.contact.id } })   // uma outra variação que substitui a rota na pilha de navegação
        }
    }
}
</script>