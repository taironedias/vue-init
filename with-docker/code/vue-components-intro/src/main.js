import Vue from 'vue'

const data = {
  titulo: 'Curso de Vue.js',
  contador: 0
}

const tcdComponent = {
  data: function() {
    return data
  },
  methods: {
    incrementar: function() {
      this.contador++
    }
  },
  template: `
    <div>
      <h2>{{ titulo }}</h2>
      <button @click="incrementar">Clicado {{ contador }} vezes</button>
    </div>
  `
}

new Vue({
  el: '#app1',
  components: {
    'tcd-component': tcdComponent
  }
})

new Vue({
  el: '#app2'
})
