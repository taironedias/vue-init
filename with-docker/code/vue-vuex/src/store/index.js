import Vue from 'vue'
import Vuex from 'vuex'

import contador from '@/resources/contador/_store/index'
import tasks from '@/resources/tasks/_store/index'

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