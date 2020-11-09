/* Normalmente utiliza-se o prefixo App, Basic ou V para components base, components que montam o layout da aplicação */
<template>
    <div>
        <h2>Contador Vue.js</h2>
        <hr>
    </div>
</template>

/* o scoped deve ser utilizado caso não exista uma grande quantidade de elementos, pois não é custoso para o css checkar e validar a regra de estilos para o elemento */
<style scoped>
    div {
        border: 1px solid blue;
    }
</style>