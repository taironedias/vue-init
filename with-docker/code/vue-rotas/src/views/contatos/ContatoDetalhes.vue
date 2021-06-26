<template>
    <div v-if="contact">
        <h3 class="font-weight-light">Nome: {{ contact.name }}</h3>
        <p class="font-weight-light">E-mail: {{ contact.email }}</p>
        <button
            class="btn btn-secondary mr-2"
            @click="$router.back()">
                Voltar
        </button>
        <router-link
            :to="`/contatos/${id}/editar`"
            class="btn btn-primary mt-4 mb-4">
                Editar
        </router-link>
    </div>
</template>

<script>
import EventBus from '@/event-bus'

export default {
    props: {
        id: {
            type: Number,
            require: true
        }
    },
    data() {
        return {
            contact: undefined
        }
    },
    /* Essa é uma forma de buscar mais informações do contato */
    // created() {
    //     this.contact = EventBus.searchContact(this.id)
    // },
    /* Essa é outra forma de buscar mais informações do contato */
    beforeRouteEnter(to, from, next) {
        console.log('beforeRouteEnter')
        next(vm => {
            // vm.contact = EventBus.searchContact(vm.id)  // primeira forma buscando a prop ID (direto pela instância Vue do component)
            vm.contact = EventBus.searchContact(+to.params.id)  // segunda forma buscando pela rota a ser executada
        })
    },
    beforeRouteUpdate(to, from, next) {
        console.log('beforeRouteUpdate')
        this.contact = EventBus.searchContact(+to.params.id)
        next()
    }
}
</script>