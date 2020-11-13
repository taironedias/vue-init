<template>
  <div id="app" class="container">
    <h1>Vue JS</h1>

    <Post>
      <h3 slot="cabecalho">Components no Vue.js</h3>

      <p>Components são instâncias reutilizáveis no Vue.js com nome.</p>
      <p>Componentes podem ser reutilizados quantas vezes você quiser</p>
      <p>...</p>

      <small slot="rodape">por Tairone Dias</small>

      <!-- Comente o template abaixo, para verificar o conteúdo default em slots -->
      <template slot="link">
        Detalhes...
      </template>
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