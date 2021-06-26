import Vue from 'vue'

export default new Vue({
    data: {
        authenticated: false,
        contacts: [
            { id: 1, name: 'Danilo Gentili', email: 'danilo@gentili.com' },
            { id: 2, name: 'Thiago Ventura', email: 'thiago@ventura.com' },
            { id: 3, name: 'Rafael Portugal', email: 'rafael@portugal.com' }
        ]
    },
    created() {
        this.$on('authenticate', (payload) => {
            this.authenticated = payload.authenticated
        })
    },
    methods: {
        searchContact(id) {
            return Object.assign({} ,this.contacts.find(iten => iten.id === id))
        },
        updateContact(contact) {
            const index = this.contacts.findIndex(iten => iten.id === contact.id);

            if (index < 0) {
                return false
            }

            this.contacts.splice(index, 1, contact)
            return true
        },
        deleteContact(id) {
            const index = this.contacts.findIndex(iten => iten.id === id);

            if (index < 0) {
                return false
            }

            this.contacts.splice(index, 1)
            return true
        }
    }
})