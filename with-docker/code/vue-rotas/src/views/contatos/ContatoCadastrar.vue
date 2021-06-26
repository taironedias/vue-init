<template>
    <div>
        <form @submit.prevent="save">
            <ContatosForm
                :contact="contact"
                labelOperation="Cadastrar"
            />
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
    data() {
        return {
            contact: {
                id: undefined,
                name: undefined,
                email: undefined
            },
            messageError: '',
            isSubmit: false
        }
    },
    beforeRouteLeave(to, from, next) {
        console.log('beforeRouteLeave')
        !this.isSubmit
            ? next(window.confirm('Deseja realmente sair do cadastro de contatos?'))
            : next()
    },
    methods: {
        save() {
            const r = EventBus.createContact(this.contact)

            if (!r) {
                this.messageError = `Ocorreu um erro ao cadastrar o contato: ${this.contact.name}`
                return
            }

            this.isSubmit = true;
            this.$router.push('/contatos')
        }
    }
}
</script>