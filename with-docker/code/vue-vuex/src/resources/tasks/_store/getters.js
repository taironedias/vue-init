export default {
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