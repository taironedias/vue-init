import * as types from './mutations-types'

export default {
    searchAllTasks: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, title: 'Aprender Vue.js', done: true },
                    { id: 2, title: 'Aprender Vue Router', done: true },
                    { id: 3, title: 'Aprender Vuex', done: false },
                    { id: 4, title: 'Aprender JavaScript', done: true }
                ])
            }, 2000);
        })
    },
    listTasks: async ({ commit, dispatch }) => {
        const tasks = await dispatch('searchAllTasks')
        commit(types.LIST_TASKS, { tasks })

        dispatch('singin', { user: 'Tairone Dias' }, { root: true })
    }
}