<template>
    <div>
        <h3 class="font-weight-light">Detalhes sobre o Contato (ID: {{ id }})</h3>
        <router-link
            :to="`/contatos/${id}/editar`"
            class="btn btn-primary mt-4 mb-4">
                Editar
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['id']
}
</script>