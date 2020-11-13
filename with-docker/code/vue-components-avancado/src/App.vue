<template>
  <div id="app" class="container">
    <h1>Vue JS</h1>

    <Post>
      <h3 slot="cabecalho">Components no Vue.js</h3>
      <template slot="conteudo">
        <p>Components são instâncias reutilizáveis no Vue.js com nome.</p>
        <p>...</p>
      </template>
      <small slot="rodape">por Tairone Dias</small>
    </Post>

  </div>
</template>

<script>

import Post from './components/Post';

export default {
  components: {
    Post
  }
}
</script>

<style scoped>
  .container {
    width: 960px;
    margin: auto;
  }
</style>