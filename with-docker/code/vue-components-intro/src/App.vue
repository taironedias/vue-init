<template>
    <div>
        <!-- Apesar do registro dos components estarem no padrão PascalCase, o próprio Vue, faz a conversar para kebab-case. Porém, a reciprocidade não é a mesma, ou seja, se o registro for no padrão kebab-case e utilizar os components como PascalCase, é disparado um erro no console do navegador -->
        <app-header></app-header>
        <app-contador></app-contador>
        <!-- Logicamente pode-se utilizar o padrão PascalCase diretamente como tags, assim como é no React -->
        <AppHeader></AppHeader>
        <AppContador></AppContador>
        <!-- Como o exemplo acima, os components não possuem um conteúdo entre suas tags, pode fazer um "self closing" -->
        <AppHeader/>
        <AppContador/>
    </div>
</template>

<script>

import AppContador from './AppContador.vue';
import AppHeader from './AppHeader.vue';

export default {
    components: {
        AppContador,
        AppHeader
    }
}
</script>