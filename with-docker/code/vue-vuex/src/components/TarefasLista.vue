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
import { createNamespacedHelpers } from 'vuex'

import TarefaSalvar from './TarefaSalvar.vue'
import TarefasListaIten from './TarefasListaIten.vue'

/* uma forma elegante de atribuir o namespaced na chamada dos mapActions, mapGetters, mapMutations e mapState é utilizando o createNamespacedHelpers. Essa função evitar adicionarmos antes de cada chamada do map... o nome do módulo */
const { mapActions, mapGetters, mapState } = createNamespacedHelpers('tasks')

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
        setTimeout(async () => {
            await this.listTasks()            // segunda forma mapActions variação 2
            console.log('Todas as actions foram executadas')
        }, 1000);
    },
    methods: {
        // ...mapActions(['listTasks']),                            // primeira forma
        ...mapActions({                                             // segunda forma
            loadingTasks: 'listTasks',                              // variação 1
            listTasks: (dispatch, payload, options) => {            // variação 2
                return dispatch('listTasks', payload, options)
            },
        }),
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