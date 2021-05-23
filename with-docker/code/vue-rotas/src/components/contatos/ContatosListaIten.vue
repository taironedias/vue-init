<template>
    <li>
        <span>{{ contact.name }}</span>
        <router-link
            :to="{ name: 'contato', params: { id : contact.id } }"
            class="btn btn-info btn-sm float-right">
                Detalhes
        </router-link>
    </li>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            require: true
        }
    }
}
</script>