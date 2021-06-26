<template>
    <div v-if="contact">
        <h3 class="font-weight-light">Nome: {{ contact.name }}</h3>

        <form @submit.prevent="save">
            <div class="form-group">
                <label>Nome</label>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Insira o nome"
                    autofocus
                    v-model="contact.name">
            </div>
            <div class="form-group">
                <label>E-mail</label>
                <input
                    type="email"
                    class="form-control"
                    placeholder="Insira o e-mail"
                    v-model="contact.email">
            </div>

            <div class="alert alert-danger mt-3" v-if="messageError">{{ messageError }}</div>

            <button
                class="btn btn-secondary mt-4 mb-4 mr-2"
                @click="$router.back()">
                    Voltar
            </button>
            <button
                type="submit"
                class="btn btn-success">
                    Salvar
            </button>
        </form>
    </div>
</template>

<script>
import EventBus from '@/event-bus'

export default {
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
        this.isSubmit
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