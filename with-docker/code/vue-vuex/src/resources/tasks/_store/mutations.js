import { LIST_TASKS } from './mutations-types'

export default {
    [LIST_TASKS]: (state, { tasks }) => {
        state.tasks = tasks
    }
}