<template>
    <li>
        <span>{{ contact.name }}</span>
        <button
            class="btn btn-danger btn-sm float-right font-weight-bold"
            @click="deleteContact(contact.id)">
                X
        </button>
        <router-link
            :to="{
                name: 'contato',
                params: { id : contact.id }
            }"
            class="btn btn-info btn-sm float-right mr-2">
                Detalhes
        </router-link>
    </li>
</template>

<script>
import EventBus from '@/event-bus'

export default {
    props: {
        contact: {
            type: Object,
            require: true
        }
    },
    methods: {
        deleteContact(id) {
            window.confirm(`Deseja realmente deletar o contato: ${this.contact.name}?`)
            const r = EventBus.deleteContact(id)
        }
    }
}
</script>