import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const contadorModule = {
    state: {
        contador: 0
    }
}

const tasksModule = {
    state: {
        tasks: []
    },
    getters: {
        doneTasks: (state, getters, rootState) => {
            console.log('Getters: state, rootState :>> ', state, rootState);
            return state.tasks.filter(t => t.done)
        },
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
        searchTaskById: state => {
            /* Nesse caso, esse getter será sempre executado mesmo que a state task não sofra nenhum alteração. Isso, pois estou definindo que esse getter será chamando como uma função passando um parâmetro para ela, que é a implementação abaixo */
            return id => {
                return state.tasks.find(t => t.id === id)
            }
        }
    },
    mutations: {
        listTasks: (state, { tasks }) => {
            state.tasks = tasks
        }
    },
    actions: {
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
        listTasks: async ({ commit, dispatch, state, rootState }) => {
            console.log('Action: listTasks executada')
            const tasks = await dispatch('searchAllTasks')
            console.log('Mutation: listTasks executada')
            console.log('Actions: state, rootState :>> ', state, rootState);
            return commit('listTasks', { tasks })
        }
    }
}

export default new Vuex.Store({
    state: {
        user: 'taironedias'
    },
    modules: {
        contador: contadorModule,
        tasks: tasksModule
    }
})