import Vue from 'vue'
import VueRouter from 'vue-router'

import Contatos from './views/contatos/Contatos.vue'
import ContatosHome from './views/contatos/ContatosHome.vue'
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue'
import ContatoEditar from './views/contatos/ContatoEditar.vue'
import Erro404Contatos from './views/contatos/Erro404Contatos.vue'
import Erro404 from './views/Erro404.vue'
import Home from './views/Home.vue'

Vue.use(VueRouter)

const extrairParamId = route => ({
  // id: parseInt(route.params.id)
  id: +route.params.id // uma outra forma de conversão
})

const router = new VueRouter({
  mode: 'history', // em aplicações publicadas esse modo deve ter tratado no servidor para que sempre retorne o index, e assim o Vue continuar o tratamento das rotas no front-end
  linkExactActiveClass: 'active', // adiciona class bootstrap para destacar o elemento a qual foi clicado para a rota. Vale ressaltar que o Vue possue sua própria class que é 'router-link-active', essa que foi utilizado é a do bootstrap
  routes: [
    {
      path: '/contatos',
      component: Contatos,
      // alias: '/meus-contatos', // (primeira forma) ao chamar essa rota o nome continua, porém o que será renderizado será o '/contatos'
      alias: ['/meus-contatos', '/my-contacts'], // (segunda forma)
      props: (route) => {
        const valueSearch = route.query.busca
        return !!valueSearch ? { 'busca': valueSearch } : {}
      },
      children: [
        {
          path: ':id(\\d+)',
          component: ContatoDetalhes,
          name: 'contato',
          props: extrairParamId
        }, // meu-dominio.com/contatos/1
        {
          path: ':id(\\d+)/editar/:opcional?',     // a interrogação, informa que posso passar ou não apenas um parâmetro
          // path: ':id(\\d+)/editar/:zeroOuMais*',   // o asterisco, informa que posso ou não passar um ou vários parâmetros separando-os por /
          // path: ':id(\\d+)/editar/:umOuMais+',     // o sinal de mais, informa que tenho que passar no mínimo um parâmetro
          alias: ':id(\\d+)/update',
          components: {
            default: ContatoEditar,
            'contato-detalhes': ContatoDetalhes
          },
          props: {
            default: extrairParamId,
            'contato-detalhes': extrairParamId
          }
        }, // meu-dominio.com/contatos/1/editar
        {
          path: '',
          component: ContatosHome,
          name: 'contact'
        }, // meu-dominio.com/contatos/
        {
          path: '*',
          component: Erro404Contatos
        } // exibindo uma página específica de 404, caso seja necessário
      ]
    }, // meu-dominio.com/contatos
    { path: '/home', component: Home }, // meu-dominio.com/
    // { path: '/', redirect: '/contatos' } // primeira forma de redirect
    {
      path: '/',
      redirect: to => {
        // return '/contatos' // podemos retornar apenas a string path
        return { name: 'contact' } // podemos retornar o objeto contendo o name da rota
      }
    }, // segunda forma de redirect
    { path: '*', component: Erro404 }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  next()
})

router.afterEach((to, from) => {
  console.log('afterEach')
})

export default router