import { CREATE_TASK, EDIT_TASK, DELETE_TASK, LIST_TASKS, SELECT_TASK } from './mutations-types'

export default {
    [CREATE_TASK]: (state, { task }) => {
        state.tasks.push(task)
    },
    [EDIT_TASK]: (state, { task }) => {
        const index = state.tasks.findIndex(t => t.id === task.id)
        state.tasks.splice(index, 1, task)
    },
    [DELETE_TASK]: (state, id) => {
        const index = state.tasks.findIndex(t => t.id === id)
        state.tasks.splice(index, 1)
    },
    [LIST_TASKS]: (state, { tasks }) => {
        state.tasks = tasks
    },
    [SELECT_TASK]: (state, { selectedTask }) => {
        state.selectedTask = selectedTask
    }
}