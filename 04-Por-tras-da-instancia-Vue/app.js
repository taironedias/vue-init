let vm = new Vue({
    el: '#app',
    data: {
        titulo: 'Curso de Vue.js',
        usuario: {}
    }
});

console.log(vm);
setTimeout(() => {
    vm.newProperty = 'Nova propriedade'; // NÃO REATIVO, porém como estou chamado o comando abaixo, o valor dessa propriedade acaba sendo exibida no dom. ou seja, como é não reativo essa propriedade fica dependente de qualquer alteração na interface, para que seu valor seja exibibo
    Vue.set(vm.usuario, 'nome', 'Tairone Dias');
    setTimeout(() => {
        vm.newProperty = 'Nova propriedade alterada.';
        Vue.set(vm.usuario, 'email', 'tairone@email.com');
    }, 2000);
}, 2000);