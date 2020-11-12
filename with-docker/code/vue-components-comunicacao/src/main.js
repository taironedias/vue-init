import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    movieSelected(value) {
      this.$emit('movieSelected', value)
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
