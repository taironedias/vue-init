<template>
    <div>
        <h3 class="font-weight-light">Contatos</h3>
        <div class="form-group">
            <input
                type="search"
                class="form-control"
                placeholder="Buscar contato"
                @keyup.enter="buscar"
                :value="busca">
        </div>
        <hr/>
        <ul class="list-group" v-if="contactFilter.length > 0">
            <ContatosListaIten
                class="list-group-item"
                v-for="contato in contactFilter"
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
    props: ['busca'],
    data() {
        return {
            contatos: [
                { id: 1, name: 'Danilo Gentili', email: 'danilo@gentili.com' },
                { id: 2, name: 'Thiago Ventura', email: 'thiago@ventura.com' },
                { id: 3, name: 'Rafael Portugal', email: 'rafael@portugal.com' }
            ]
        }
    },
    computed: {
        contactFilter() {
            const value = this.busca
            return !value
                ? this.contatos
                : this.contatos.filter(c => c.name.toLowerCase().includes(value.toLowerCase()))
        }
    },
    methods: {
        buscar(event) {
            this.$router.push({
                path: '/contatos',
                query: {
                    busca: event.target.value
                }
            })
        },
        voltarPagina() {
            this.$router.back()
        }
    }
}
</script>