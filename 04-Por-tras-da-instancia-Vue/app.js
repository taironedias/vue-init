let vm = new Vue({
    data: {
        curso: 'Curso de Vue.js'
    }
});

/* (i) forma */
// vm.$mount('#app');
setTimeout(() => {
    vm.$mount('#app');
}, 2000);

let vm2 = new Vue({
    template: '<h2>Utilizando propriedade template</h2>'
});

/* (ii) forma */
// vm2.$mount('#app2');
/* (iii) forma */
vm2.$mount();
document.getElementById('app2').appendChild(vm2.$el);