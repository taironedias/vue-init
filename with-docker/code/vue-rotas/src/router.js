import Vue from 'vue'
import VueRouter from 'vue-router'

import Contatos from './views/contatos/Contatos.vue'
import Home from './views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history', // em aplicações publicadas esse modo deve ter tratado no servidor para que sempre retorne o index, e assim o Vue continuar o tratamento das rotas no front-end
    routes: [
    { path: '/contatos', component: Contatos }, // meu-dominio.com/contatos
    { path: '/', component: Home } // meu-dominio.com/
  ]
})
