import Vue from 'vue'
import Vuex from 'vuex'

import contador from './modules/contador'
import tasks from './modules/tasks'

Vue.use(Vuex)

const state = {
    user: 'taironedias'
}

const getters = {
    welcomeMessage: state => `Olá ${state.user}!`
}

const mutations = {
    singin: (state, payload) => {
        state.user = payload.user
    }
}

const actions = {
    singin: ({ commit }, payload) => {
        commit('singin', payload)
    }
}

const modules = {
    contador,
    tasks
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules
})