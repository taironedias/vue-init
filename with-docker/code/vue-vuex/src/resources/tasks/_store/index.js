import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
    tasks: [],
    selectedTask: undefined,
    error: undefined
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}