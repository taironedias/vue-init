<template>
  <div id="app" class="container">
    <h1>Vue JS</h1>

    <button @click="componentSelecionado = 'Home'">Home</button>
    <button @click="componentSelecionado = 'PostsLista'">Posts</button>
    <button @click="componentSelecionado = 'Sobre'">Sobre</button>

    <!-- Mantém a instância do Vue em cache para não ser criada a cada chamada, pois sem o keep-alive ao sair do component ele é destruído -->
    <keep-alive>
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