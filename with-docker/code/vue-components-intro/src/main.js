import Vue from 'vue'

// import App from './App.vue';
import AppHeader from './AppHeader.vue';

Vue.component('AppHeader', AppHeader)

new Vue({
  // render: h => h(App)
}).$mount('#app')