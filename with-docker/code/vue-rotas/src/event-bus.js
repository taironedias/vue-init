import Vue from 'vue'

export default new Vue({
    data: {
        authenticated: false
    },
    created() {
        this.$on('authenticate', (payload) => {
            this.authenticated = payload.authenticated
        })
    }
})