import Vue from 'vue'

Vue.component('tcd-component', {
  data: function() {
    return {
      titulo: 'Curso de Vue.js'
    }
  },
  template: '<h2>{{ titulo }}</h2>'
})

new Vue({
  el: '#app'
})
