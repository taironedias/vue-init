import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/** Essa é uma das formas que o Vue possui para trabalhar com Components Assíncronos */
// Vue.component('Assincrono', (resolve /*, reject*/) => {
//   setTimeout(() => {
//     resolve({
//       template: `
//         <div>
//           <h2>Component Assíncrono</h2>
//           <small>Método padrão de fazer o lazy load do Vue.js. O registro está acontecendo globalmente</small>
//         </div>
//       `
//     })
//   }, 2000);

//   // chamar reject em caso de erro
// });

/** Como temos o Webpack já instalado no projeto, há uma outra forma de fazer */
// Vue.component(
//   'Assincrono',
//   () => import('./components/Assincrono.vue')
// );

new Vue({
  render: h => h(App),
}).$mount('#app')
