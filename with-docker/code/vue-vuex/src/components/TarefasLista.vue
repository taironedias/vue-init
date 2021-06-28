<template>
    <div>
        <div class="row">
            <div class="col-sm-10">
                <h1 class="font-weight-light">Lista de Tarefas</h1>
            </div>
            <div class="col-sm-2">
                <button
                    class="btn btn-primary float-right"
                    @click="showFormCreateTask">
                        <i class="fa fa-plus mr-2"></i>
                        <span>Criar</span>
                </button>
            </div>
        </div>

        <h3 class="font-weight-light mt-4">A Fazer ({{ todoTasks.length }})</h3>
        <ul class="list-group" v-if="todoTasks.length > 0">
            <TarefasListaIten
                v-for="task in todoTasks"
                :key="task.id"
                :task="task"
                @updateAction="selectedTaskForUpdate"/>
        </ul>

        <p v-else>Nenhuma tarefa a fazer</p>

        <h3 class="font-weight-light mt-4">Concluída ({{ totalDoneTasks }})</h3>
        <ul class="list-group" v-if="totalDoneTasks > 0">
            <TarefasListaIten
                v-for="task in doneTasks"
                :key="task.id"
                :task="task"
                @updateAction="selectedTaskForUpdate"/>
        </ul>

        <p v-else>Nenhuma tarefa foi concluída</p>

        <TarefaSalvar
            v-if="showForm"
            :task="selectedTask"/>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'

import TarefaSalvar from './TarefaSalvar.vue'
import TarefasListaIten from './TarefasListaIten.vue'

export default {
    components: {
        TarefaSalvar,
        TarefasListaIten
    },
    data() {
        return {
            showForm: false,
            selectedTask: undefined,
            errorMessage: undefined
        }
    },
    computed: {
        ...mapState(['tasks']),
        ...mapGetters(['doneTasks', 'todoTasks', 'totalDoneTasks'])
    },
    created() {
        // this.$store.commit({
        //     type: 'listTasks',
        //     tasks: [
        //         { id: 1, title: 'Aprender Vue.js', done: true },
        //         { id: 2, title: 'Aprender Vue Router', done: true },
        //         { id: 3, title: 'Aprender Vuex', done: false }
        //     ]
        // })

        /* Utilizando o mapMutations */
        /* primeira forma */
        // this.listTasks({
        //     tasks: [
        //         { id: 1, title: 'Aprender Vue.js', done: true },
        //         { id: 2, title: 'Aprender Vue Router', done: true },
        //         { id: 3, title: 'Aprender Vuex', done: false }
        //     ]
        // })

        /* segunda forma, variação 1 */
        // this.loadTasks({
        //     tasks: [
        //         { id: 1, title: 'Aprender Vue.js', done: true },
        //         { id: 2, title: 'Aprender Vue Router', done: true },
        //         { id: 3, title: 'Aprender Vuex', done: false }
        //     ]
        // })

        /* segunda forma, variação 1 */
        // this.loadTasks({
        //     tasks: [
        //         { id: 1, title: 'Aprender Vue.js', done: true },
        //         { id: 2, title: 'Aprender Vue Router', done: true },
        //         { id: 3, title: 'Aprender Vuex', done: false }
        //     ]
        // })

        /* segunda forma, variação 2 */
        this.listTasks({
            tasks: [
                { id: 1, title: 'Aprender Vue.js', done: true },
                { id: 2, title: 'Aprender Vue Router', done: true },
                { id: 3, title: 'Aprender Vuex', done: false }
            ]
        })
    },
    methods: {
        // ...mapMutations(['listTasks']),  // primeira forma
        ...mapMutations({                   // segunda forma
            // loadTasks: 'listTasks',                      // variação 1
            listTasks: (commit, payload, options) => {      // variação 2
                /* normalmente é utilizado para realizar algum processamento antes de commitar a mutation, por exemplo, converter um valor de string para number de um campo específico */
                console.log('payload.tasks :>> ', payload.tasks)
                commit('listTasks', payload, options)
            }
        }),// primeira forma
        showFormCreateTask() {
            if (this.selectedTask) {
                this.selectedTask = undefined
                return
            }

            this.showForm = !this.showForm
        },
        selectedTaskForUpdate(task) {
            this.selectedTask = task
            this.showForm = true
        },
        reset() {
            this.showForm = false
            this.selectedTask = undefined
        }
    }
}
</script>