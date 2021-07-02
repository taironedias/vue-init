const state = {
    tasks: []
}

const getters = {
    doneTasks: state => state.tasks.filter(t => t.done),
    todoTasks: state => state.tasks.filter(t => !t.done),
    totalDoneTasks: (state, getters) => getters.doneTasks.length,
    sortTasks: state => {
        return state.tasks.sort((task1, task2) => {
            if (task1.done === task2.done) {
                return task1.title < task2.title
                    ? -1
                    : task1.title > task2.title
                        ? 1
                        : 0
            }

            return task1.done - task2.done
        })
    },
    searchTaskById: state => id => state.tasks.find(t => t.id === id),
    // eslint-disable-next-line no-unused-vars
    welcome: (state, getters, rootState, rootGetters) => rootGetters.welcomeMessage
}

const mutations = {
    listTasks: (state, { tasks }) => {
        state.tasks = tasks
    }
}

const actions = {
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
        commit('listTasks', { tasks })

        dispatch('singin', { user: 'Tairone Dias' }, { root: true })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}