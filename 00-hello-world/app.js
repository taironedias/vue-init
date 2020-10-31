new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js',
        name: ''
    },
    methods: {
        inputName: function(event) {
            this.name = event.target.value;
        }
    }
});