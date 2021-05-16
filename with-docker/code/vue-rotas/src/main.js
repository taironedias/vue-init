import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Contatos from './views/contatos/Contatos.vue'
import Home from './views/Home.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/contatos', component: Contatos }, // meu-dominio.com/contatos
    { path: '/', component: Home } // meu-dominio.com/
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
