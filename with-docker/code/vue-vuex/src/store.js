import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const contadorModule = {
    namespaced: true,
    state: {
        contador: 0
    },
    getters: {
        contadorAtual: state => state.contador
    }
}

const tasksModule = {
    namespaced: true,
    state: {
        tasks: []
    },
    getters: {
        /* o comentário abaixo é para evitar que o eslint não interrompa a compilação, porque uma variável foi definida porém não está sendo utilizada */
        // eslint-disable-next-line no-unused-vars
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
        },
        welcome: (state, getters, rootState, rootGetters) => {
            // state.tasks              // tasks.tasks
            // getters.todoTasks        // 'tasks/todoTasks'
            console.log('State Global :>> ', rootState.user)
            console.log('Getters Global :>> ', rootGetters.welcomeMessage)
            return rootGetters.welcomeMessage
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
            commit('listTasks', { tasks })

            // commit('singin', { user: 'Tairone Dias' })                   // não funcionará, pois o Vuex tentará acessar a mutation do próprio módulo
            // commit('singin', { user: 'Tairone Dias' }, { root: true })   // passando a option root: true, informo que é para acessar a global
            // dispatch('singin', { user: 'Tairone Dias' })                 // de forma análoga, tentará acessar a action do próprio módulo
            dispatch('singin', { user: 'Tairone Dias' }, { root: true })    // essa é a forma correta, pois acessará a action global
            // dispatch('singin', null, { root: true })                     // caso a action global não tenha payload, basta passar null para poder colocar o terceiro parâmetro

        }
    }
}

const store = new Vuex.Store({
    state: {
        user: 'taironedias'
    },
    getters: {
        welcomeMessage: state => `Olá ${state.user}!`
    },
    mutations: {
        singin: (state, payload) => {
            state.user = payload.user
        }
    },
    actions: {
        singin: ({ commit }, payload) => {
            commit('singin', payload)
        }
    },
    modules: {
        contador: contadorModule,
        tasks: tasksModule
    }
})

console.log('store :>> ', store)

export default store