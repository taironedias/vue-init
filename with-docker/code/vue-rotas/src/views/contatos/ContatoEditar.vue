<template>
    <div v-if="contact">
        <h3 class="font-weight-light">Nome: {{ contact.name }}</h3>

        <form @submit.prevent="save">
            <ContatosForm
                :contact="contact"/>
        </form>
        <div class="alert alert-danger mt-3" v-if="messageError">{{ messageError }}</div>
    </div>
</template>

<script>
import EventBus from '@/event-bus'
import ContatosForm from '@/components/contatos/ContatosForm.vue'

export default {
    components: {
        ContatosForm
    },
    props: ['id'],
    data() {
        return {
            contact: undefined,
            messageError: '',
            isSubmit: false
        }
    },
    beforeRouteEnter(to, from, next) {
        console.log('beforeRouteEnter')
        next(vm => {
            vm.contact = EventBus.searchContact(+to.params.id)
        })
    },
    beforeRouteLeave(to, from, next) {
        console.log('beforeRouteLeave')
        !this.isSubmit
            ? next(window.confirm('Deseja realmente sair da edição de contatos?'))
            : next()
    },
    methods: {
        save() {
            const r = EventBus.updateContact(this.contact)
            this.isSubmit = true;

            if (!r) {
                this.messageError = `Ocorreu um erro ao salvar o contato: ${this.contact.name}`
                return
            }

            this.$router.push('/contatos')
        }
    }
}
</script>