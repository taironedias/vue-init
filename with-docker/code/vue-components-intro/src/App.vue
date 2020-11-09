<template>
    <div>
        <!-- Apesar do registro dos components estarem no padrão PascalCase, o próprio Vue, faz a conversar para kebab-case. Porém, a reciprocidade não é a mesma, ou seja, se o registro for no padrão kebab-case e utilizar os components como PascalCase, é disparado um erro no console do navegador -->
        <app-header></app-header>
        <contador></contador>
        <!-- Logicamente pode-se utilizar o padrão PascalCase diretamente como tags, assim como é no React -->
        <AppHeader></AppHeader>
        <Contador></Contador>
        <!-- Como o exemplo acima, os components não possuem um conteúdo entre suas tags, pode fazer um "self closing" -->
        <AppHeader/>
        <Contador/>
    </div>
</template>

<script>

import AppHeader from './components/shared/AppHeader.vue';
import Contador from './components/contador/Contador.vue';

export default {
    components: {
        Contador,
        AppHeader
    }
}
</script>