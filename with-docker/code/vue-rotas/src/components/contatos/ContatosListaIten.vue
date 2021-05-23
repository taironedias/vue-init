<template>
    <li>
        <span>{{ contact.name }}</span>
        <button class="btn btn-info btn-sm float-right">Detalhes</button>
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