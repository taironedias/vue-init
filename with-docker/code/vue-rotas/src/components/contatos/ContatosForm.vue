<template>
    <div>
        <div class="form-group">
            <label>Nome</label>
            <input
                type="text"
                class="form-control"
                placeholder="Insira o nome"
                required
                autofocus
                v-model="contact.name">
        </div>
        <div class="form-group">
            <label>E-mail</label>
            <input
                type="email"
                class="form-control"
                placeholder="Insira o e-mail"
                required
                v-model="contact.email">
        </div>

        <button
            class="btn btn-secondary mt-4 mb-4 mr-2"
            @click="$router.back()">
                Voltar
        </button>
        <button
            type="submit"
            class="btn btn-success">
                {{ labelOperation }}
        </button>
    </div>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true
        },
        labelOperation: {
            type: String,
            default: 'Salvar'
        }
    }
}
</script>