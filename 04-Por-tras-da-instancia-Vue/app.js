let vm1 = new Vue({
    el: '#app1',
    data: {
        showMessage: false,
        titulo: 'Instância Vue 1',
        newTitulo: ''
    },
    computed: {
        tituloKebabCase: function() {
            return this.titulo.toLowerCase().split(' ').join('-');
        }
    },
    watch: {
        titulo: function(newValue, oldValue) {
            console.log(`Título alterado de ${oldValue} para ${newValue}`);
            this.showMessage = true;
            let self = this;
            setTimeout(() => {
                self.showMessage = false;
            }, 2000);
        }
    },
    methods: {
        alterarTitulo: function(event) {
            this.titulo = this.newTitulo;
            this.newTitulo = ''; /* reset no valor do input */
        }
    }

});

let vm2 = new Vue({
    el: '#app2',
    data: {
        titulo: 'Instância Vue 2'
    },
    methods: {
        alterarTitulo: function(event) {
            vm1.titulo = 'Curso de Vue.js 1';
        }
    }
});