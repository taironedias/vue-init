import Vue from 'vue'
import VueRouter from 'vue-router'

import Contatos from './views/contatos/Contatos.vue'
import ContatosHome from './views/contatos/ContatosHome.vue'
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue'
import ContatoEditar from './views/contatos/ContatoEditar.vue'
import Home from './views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history', // em aplicações publicadas esse modo deve ter tratado no servidor para que sempre retorne o index, e assim o Vue continuar o tratamento das rotas no front-end
  linkExactActiveClass: 'active', // adiciona class bootstrap para destacar o elemento a qual foi clicado para a rota. Vale ressaltar que o Vue possue sua própria class que é 'router-link-active', essa que foi utilizado é a do bootstrap
  routes: [
    {
      path: '/contatos',
      component: Contatos,
      children: [
        { path: ':id', component: ContatoDetalhes, name: 'contato' }, // meu-dominio.com/contatos/1
        {
          path: ':id/editar',
          components: {
            default: ContatoEditar,
            'contato-detalhes': ContatoDetalhes
          }
        }, // meu-dominio.com/contatos/1/editar
        { path: '', component: ContatosHome }, // meu-dominio.com/contatos/
      ]
    }, // meu-dominio.com/contatos
    { path: '/', component: Home } // meu-dominio.com/
  ]
})
