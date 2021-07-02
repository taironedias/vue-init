import { CREATE_TASKS, EDIT_TASKS, DELETE_TASKS, LIST_TASKS } from './mutations-types'

export default {
    [CREATE_TASKS]: (state, { task }) => {
        state.tasks.push(task)
    },
    [EDIT_TASKS]: (state, { task }) => {
        const index = state.tasks.findIndex(t => t.id === task.id)
        state.tasks.splice(index, 1, task)
    },
    [DELETE_TASKS]: (state, id) => {
        const index = state.tasks.findIndex(t => t.id === id)
        state.tasks.splice(index, 1)
    },
    [LIST_TASKS]: (state, { tasks }) => {
        state.tasks = tasks
    }
}