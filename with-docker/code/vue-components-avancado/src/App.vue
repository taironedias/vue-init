<template>
  <div id="app" class="container">
    <h1>Vue JS</h1>

    <Post>
      <h3 slot="cabecalho">Components no Vue.js</h3>

      <p class="post-paragrafo">Components são instâncias reutilizáveis no Vue.js com nome. Componentes podem ser reutilizados quantas vezes você quiser.</p>
      <p>...</p>

      <small slot="rodape">por {{ autor }}</small>
    </Post>

  </div>
</template>

<script>

import Post from './components/Post';

export default {
  components: {
    Post
  },
  data() {
    return {
      autor: 'Tairone'
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