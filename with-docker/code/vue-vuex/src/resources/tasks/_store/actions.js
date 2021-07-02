import TasksService from './../_services/TasksService'
import * as types from './mutations-types'

function identifierError(error) {
    if (error.response) {
        console.log(`Servidor retornou um erro: ${error.message} -- ${error.response.statusText}`)
    } else if (error.request) {
        console.log(`Erro ao tentar se comunicar com o servidor: ${error.message}`)
    } else {
        console.log(`Erro na montagem da requisição do axios: ${error.message}`)
    }
}

export default {
    createTask: ({ commit }, payload) => {
        return TasksService.postTask(payload.task)
            .then(response => commit(types.CREATE_TASKS, { task: response.data }))
            .catch(error => {
                identifierError(error)
            })
    },
    editTask: async ({ commit }, { task }) => {
        try {
            const response = await TasksService.putTask(task)
            commit(types.EDIT_TASKS, { task: response.data })
        } catch (error) {
            identifierError(error)
        }
    },
    deleteTask: async ({ commit }, { id }) => {
        try {
            await TasksService.deleteTask(id)
            commit(types.DELETE_TASKS, id)
        } catch (error) {
            identifierError(error)
        }
    },
    listTasks: async ({ commit }) => {
        try {
            const response = await TasksService.getTasks()
            commit(types.LIST_TASKS, { tasks: response.data })
        } catch (error) {
            identifierError(error)
        }
    }
}