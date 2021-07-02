import TasksService from './../_services/TasksService'
import * as types from './mutations-types'

export default {
    createTask: ({ commit }, payload) => {
        return TasksService.postTask(payload.task)
            .then(response => commit(types.CREATE_TASK, { task: response.data }))
            .catch(error => commit(types.SET_ERROR, { error }))
    },
    editTask: async ({ commit }, { task }) => {
        try {
            const response = await TasksService.putTask(task)
            commit(types.EDIT_TASK, { task: response.data })
        } catch (error) {
            commit(types.SET_ERROR, { error })
        }
    },
    deleteTask: async ({ commit }, { id }) => {
        try {
            await TasksService.deleteTask(id)
            commit(types.DELETE_TASK, id)
        } catch (error) {
            commit(types.SET_ERROR, { error })
        }
    },
    listTasks: async ({ commit }) => {
        try {
            const response = await TasksService.getTasks()
            commit(types.LIST_TASKS, { tasks: response.data })
        } catch (error) {
            commit(types.SET_ERROR, { error })
        }
    },
    doneTask: ({ dispatch }, payload) => {
        const task = Object.assign({}, payload.task)
        task.done = !task.done

        /* não precisa ter o async/await pois essa action está apenas chamando outra action que tem faz todo o procedimento de chamada na API e atualizando no estado do Vuex */
        dispatch('editTask', { task })
    },
    selectTask: ({ commit }, payload) => {
        commit(types.SELECT_TASK, payload)
    },
    resetSelectedTask: ({ commit }) => {
        commit(types.SELECT_TASK, { selectedTask: undefined })
    }
}