<template>
    <div>
        <h2>{{ titulo }}</h2>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        titulo: String
    }
}
</script>