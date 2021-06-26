import Vue from 'vue'
import VueRouter from 'vue-router'

import Erro404Contatos from './views/contatos/Erro404Contatos.vue'
import Erro404 from './views/Erro404.vue'
import Login from './views/login/Login.vue'

import EventBus from './event-bus'

/* Carregando determinadas sessões/recursos conforme demanda do usuário (lazy loading). Nesse caso, será apenas carregando quando o usuário clicar sobre o recurso a ser acessado. Isso é útil em aplicações de grande porte pois todos os components não são carregados no start da aplicação. Caso, deseja-se carregar k pacotes ao acessar apenas um recurso basta agrupá-los em um único package name através do comentário de bloco webpackChunkName, pois o webpack lê esse comentários e faz o agrupamento */
const Contatos = () => import(/* webpackChunkName: "contatos" */ './views/contatos/Contatos.vue')
const ContatosHome = () => import(/* webpackChunkName: "contatos" */ './views/contatos/ContatosHome.vue')
const ContatoDetalhes = () => import(/* webpackChunkName: "contatos" */ './views/contatos/ContatoDetalhes.vue')
const ContatoEditar = () => import(/* webpackChunkName: "contatos" */ './views/contatos/ContatoEditar.vue')
const Home = () => import('./views/Home.vue')

Vue.use(VueRouter)

const extrairParamId = route => ({
  // id: parseInt(route.params.id)
  id: +route.params.id // uma outra forma de conversão
})

const router = new VueRouter({
  mode: 'history', // em aplicações publicadas esse modo deve ter tratado no servidor para que sempre retorne o index, e assim o Vue continuar o tratamento das rotas no front-end
  linkExactActiveClass: 'active', // adiciona class bootstrap para destacar o elemento a qual foi clicado para a rota. Vale ressaltar que o Vue possue sua própria class que é 'router-link-active', essa que foi utilizado é a do bootstrap
  scrollBehavior(to, from, savedPosition) {
    /* FORMA SÍNCRONA */
    // if (savedPosition) {
    //   // caso queria manter as posições do browser, quando o usuário clicou em avanças ou voltar
    //   return savedPosition
    // }

    // if (to.hash) {
    //   // caso exista a âncora, é realizado o scroll sobre ela
    //   return {
    //     selector: to.hash
    //   }
    // }

    // // caso nenhuma das opções acima sejam satisfeitas, é retornado um objeto com as posições iniciais para o scroll
    // return { x: 0, y: 0 }

    /* FORMA ASSÍNCRONA */
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (savedPosition) {
          return resolve(savedPosition)
        }

        if (to.hash) {
          return resolve({
            selector: to.hash
          })
        }

        resolve({ x: 0, y: 0 })
      }, 3000);
    })
  },
  routes: [
    {
      path: '/contatos',
      component: Contatos,
      // alias: '/meus-contatos', // (primeira forma) ao chamar essa rota o nome continua, porém o que será renderizado será o '/contatos'
      alias: ['/meus-contatos', '/my-contacts'], // (segunda forma)
      children: [
        {
          path: ':id(\\d+)',
          component: ContatoDetalhes,
          name: 'contato',
          props: extrairParamId
        }, // meu-dominio.com/contatos/1
        {
          path: ':id(\\d+)/editar',
          // path: ':id(\\d+)/editar/:opcional?',     // a interrogação, informa que posso passar ou não apenas um parâmetro
          // path: ':id(\\d+)/editar/:zeroOuMais*',   // o asterisco, informa que posso ou não passar um ou vários parâmetros separando-os por /
          // path: ':id(\\d+)/editar/:umOuMais+',     // o sinal de mais, informa que tenho que passar no mínimo um parâmetro
          alias: ':id(\\d+)/update',
          meta:{ requiredAuth: true },
          components: {
            default: ContatoEditar,
            'contato-detalhes': ContatoDetalhes
          },
          props: {
            default: extrairParamId,
            'contato-detalhes': extrairParamId
          },
          beforeEnter(to, from, next) {   // essa sintaxe 'beforeEnter() {}' é a mesma coisa que 'beforeEnter: () => {}'
            console.log('beforeEnter');
            next()                   // continua a navegação
            // next(true)               // continua a navegação
            // next(false)              // bloqueia a navegação
            // next('/home')            // faz um redirecionamento
            // next({ path: '/home' })  // faz um redirecionamento
            // next(new Error(`Você não possue permissões suficientes para acessa esse recurso "${to.fullPath}"`))  // dispara um erro que pode ser recuperado pelo router.onError
          }
        }, // meu-dominio.com/contatos/1/editar
        {
          path: '',
          component: ContatosHome,
          name: 'contact',
          props: (route) => {
            const valueSearch = route.query.busca
            return !!valueSearch ? { 'busca': valueSearch } : {}
          },
        }, // meu-dominio.com/contatos/
        {
          path: '*',
          component: Erro404Contatos
        } // exibindo uma página específica de 404, caso seja necessário
      ]
    }, // meu-dominio.com/contatos
    { path: '/home', component: Home }, // meu-dominio.com/
    { path: '/login', component: Login},
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
  const isAuthenticate = EventBus.authenticated;
  const routContainsRequiredAuth = to.matched.some(rout => rout.meta.requiredAuth)

  if (routContainsRequiredAuth && !isAuthenticate) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
    return
  }

  next()
})

router.beforeResolve((to, from, next) => {
  console.log('beforeResolve')
  next()
})

router.afterEach((to, from) => {
  console.log('afterEach')
})

router.onError(error => {
  console.log(error);
})

export default router