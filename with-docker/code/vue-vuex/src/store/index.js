import Vue from 'vue'
import Vuex from 'vuex'

import contador from '@/resources/contador/_store/index'

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
    contador
}

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',   // essa config serve para disparar erro no console caso haja alteração direta no state (fora da mutation), porém só está sendo ativada fora do modo de produção, ou seja, nos modos 'development' e 'test' (apenas no teste unitário), pois com essa configuração como true a performance cai pois há um observador sendo executada a cada alteração no estado de cada módulo
    state,
    getters,
    mutations,
    actions,
    modules
})