<template>
    <div>
        <h3 class="font-weight-light">Contatos</h3>
        <ul class="list-group" v-if="contatos.length > 0">
            <ContatosListaIten
                class="list-group-item"
                v-for="contato in contatos"
                :key="contato.id"
                :contact="contato"
            />
        </ul>
        <p v-else>Nenhum contato cadastrado.</p>
        <button class="btn btn-secondary mt-4 mb-4" @click="voltarPagina">Voltar</button>
    </div>
</template>

<script>
import ContatosListaIten from './ContatosListaIten.vue'

export default {
    components: {
        ContatosListaIten
    },
    data() {
        return {
            contatos: [
                { id: 1, name: 'Danilo Gentili', email: 'danilo@gentili.com' },
                { id: 2, name: 'Thiago Ventura', email: 'thiago@ventura.com' },
                { id: 3, name: 'Rafael Portugal', email: 'rafael@portugal.com' }
            ]
        }
    },
    methods: {
        voltarPagina() {
            this.$router.back()
        }
    }
}
</script>