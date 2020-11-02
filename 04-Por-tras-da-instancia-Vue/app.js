let vm = new Vue({
    // el: '#app',
    data: {
        titulo: 'Curso de Vue.js'
    },
    methods: {
        alterarTitulo: function(event) {
            this.titulo = 'Curso de Vue.js, Vuex e VueRouter'
        },
        destruindoInstancia: function(event) {
            this.$destroy();
        }
    },
    beforeCreate: function() {
        console.log('01 - beforeCreate');
    },
    created: function() {
        console.log('02 - created');
    },
    beforeMount: function() {
        console.log('03 - beforeMount');
    },
    mounted: function() {
        console.log('04 - mounted');
    },
    beforeUpdate: function() {
        console.log('05 - beforeUpdate');
    },
    updated: function() {
        console.log('06 - updated');
    },
    beforeDestroy: function() {
        console.log('07 - beforeDestroy');
    },
    destroyed: function() {
        console.log('08 - destroyed');
    },
});

/* Visualizando no log que o beforeMount e mounted sera executado após 3 segundos */
setTimeout(() => {
    vm.$mount('#app');
}, 3000);