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
import EventBus from '@/event-bus'  // o '@' aponta para o diretório 'src', com isso não é necessário ficar voltando níveis

export default {
    components: {
        ContatosListaIten
    },
    props: ['busca'],
    data() {
        return {
            contatos: []
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
    created() {
        this.contatos = EventBus.contacts
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