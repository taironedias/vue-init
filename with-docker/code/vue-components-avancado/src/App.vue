<template>
  <div id="app" class="container">
    <h1>Vue JS</h1>

    <h1>Forma Padrão</h1>

    <PostsLista :posts="posts" />

    <hr>
    <h1>Slots com escopo</h1>

    <PostsLista :posts="posts" >
      <template slot-scope="slotProps">
        <!-- {{slotProps}} -->
        <h2>{{ slotProps.meuPost.titulo }}</h2>
        <p>{{ slotProps.meuPost.conteudo }}</p>
        <small>{{ slotProps.meuPost.autor }}</small>
      </template>
    </PostsLista>

  </div>
</template>

<script>

import PostsLista from './components/PostsLista';

export default {
  components: {
    PostsLista
  },
  data() {
    return {
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