<template>
  <div id="app" class="container">
    <h1>Vue JS</h1>

    <button @click="componentSelecionado = 'Home'">Home</button>
    <button @click="componentSelecionado = 'PostsLista'">Posts</button>
    <button @click="componentSelecionado = 'Sobre'">Sobre</button>

    <!-- Tanto o include e exclude, podemos utilizar tanto de forma estática e de forma dinâmica, passando o v-bind antes (ou apenas : ). E na forma dinâmica, podemos passar uma propriedade (contendo string, array ou expressão regular) ou passar diretamente a string, array ou expressão regular. -->
    <!-- Utilizando o include, eu mantenho em cache apenas o(s) component(s) específicado(s). No exemplo abaixo o component Sobre é mantido em cache -->
    <!-- <keep-alive :include="'Sobre'"> -->
    <!-- Utilizando o exclude, eu NÃO mantenho em cache o(s) component(s) específicado(s). No exemplo abaixo apenas o PostsLista é mantido em cache -->
    <!-- <keep-alive :exclude="['Sobre', 'Home']"> -->
    <!-- Utilizando expressão regular. No exemplo abaixo apenas o Sobre é mantido em cache -->
    <!-- <keep-alive :exclude="/Home|PostsLista/"> -->
    <!-- Utilizando o max, eu defino a quantidade de components que serão mantidos em cache. Sendo destruído a instância do component acessada menos recente -->
    <keep-alive :max="2">
      <component 
        :is="componentSelecionado"
        v-bind="propsPostsLista">
      </component>
    </keep-alive>

  </div>
</template>

<script>

import Home from './components/Home';
import PostsLista from './components/PostsLista';
import Sobre from './components/Sobre';

export default {
  components: {
    Home,
    PostsLista,
    Sobre
  },
  data() {
    return {
      componentSelecionado: 'Home',
      posts: [
        { 
          id: 1,
          titulo: 'Components no Vue.js',
          conteudo: 'Components são instâncias reutilizáveis no Vue.js com nome. Componentes podem ser reutilizados quantas vezes você quiser.',
          autor: 'Tairone Dias'
        },
        { 
          id: 2,
          titulo: 'Slot no Vue.js',
          conteudo: 'Vue implementa uma API de distribuição de conteúdo que é modelada após o atual detalhamento da especificação dos componentes da Web, usando o elemento <slot> para servir como saída de distribuição de conteúdos.',
          autor: 'Tairone Dias'
        }
      ]
    }
  },
  computed: {
    propsPostsLista() {
      return this.componentSelecionado === 'PostsLista' ? { posts: this.posts } : {}
    }
  }
}
</script>

<style scoped>
  .container {
    width: 960px;
    margin: auto;
  }

  /* descomentar para perceber que a estilização, apesar de estar no component pai, é aplicada no slot existente no component filho */
  /* .post-paragrafo {
    color: red;
  } */
</style>