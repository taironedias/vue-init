<template>
    <li class="list-group-item">
        <span>{{ filme.title }} ({{ filme.year }})</span>
        <button class="btn btn-success float-right">Selecionar</button>
    </li>
</template>

<script>
export default {
    props: {
        filme: {
            type: Object,
            required: true
        }
    }
}
</script>