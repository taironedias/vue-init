import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contador: 0,
        tasks: []
    },
    getters: {
        doneTasks: state => {
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
        /**
         * 1. a action executa sempre uma mutantions, ela nunca deve implementar e alterar um estado diretamente
         * 2. action deve ser usando quando há requisições assíncronas, diferente da mutation que não devemos jamais chamá-las em requisições assíncronos
         */
        listTasks: ({ commit }, payload) => {
            console.log('action chamada...')
            setTimeout(() => {
                console.log('action executada')
                commit('listTasks', payload)
            }, 2000);
            /* o primeiro parâmetro é o nome da mutation que definir e o segundo é o payload */
        }
    }
})