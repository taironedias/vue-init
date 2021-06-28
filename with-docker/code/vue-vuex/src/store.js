import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contador: 0,
        tasks: [
            { id: 1, title: 'Aprender Vue.js', done: true },
            { id: 2, title: 'Aprender Vue Router', done: true },
            { id: 3, title: 'Aprender Vuex', done: false }
        ]
    }
})