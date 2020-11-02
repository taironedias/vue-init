Vue.component('meu-component', {
    template: '<h2>Curso de Vue.js</h2>'
})

let vm1 = new Vue({
    el: '#app1'
});

let vm2 = new Vue({
    el: '#app2',
    template: '<div><h2>Instância 02</h2><meu-component></meu-component></div>'
});