let vm = new Vue({
    el: '#app',
    data: {
        titulo: 'Curso de Vue.js'
    },
    methods: {
        alterarTitulo: function(event) {
            this.$refs.myTitle.innerText = 'Vue por refs';
            this.$refs.myTitle.style.color = '#f90';
            /* Fazendo dessa forma, o Vue perde a referência da interpolação, logo, não será possível alterar a o valor do titulo pela propriedade data, como no exemplo abaixo: */
            let self = this;
            setTimeout(() => {
                self.titulo = 'Vue pela propriedade data'
            }, 3000);
        }
    }
});

console.log(vm);