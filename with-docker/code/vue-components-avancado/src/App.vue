<template>
  <div id="app">
    <h1>Vue JS</h1>

    <Post titulo="Components no Vue">
      <h3>Components no Vue.js</h3>
      <p>Components são propriedades mais importantes no Vue.js</p>
    </Post>

    <Post titulo="Passando dados via props"/>


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