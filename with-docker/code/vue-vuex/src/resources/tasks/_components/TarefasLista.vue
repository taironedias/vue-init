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
                @updateAction="selectedTaskForUpdate"
                @doneAction="doneTask({ task: $event })"
                @deleteAction="confirmDeleteTask" />
        </ul>

        <p v-else>Nenhuma tarefa a fazer</p>

        <h3 class="font-weight-light mt-4">Concluída ({{ totalDoneTasks }})</h3>
        <ul class="list-group" v-if="totalDoneTasks > 0">
            <TarefasListaIten
                v-for="task in doneTasks"
                :key="task.id"
                :task="task"
                @updateAction="selectedTaskForUpdate"
                @doneAction="doneTask({ task: $event })"
                @deleteAction="confirmDeleteTask" />
        </ul>

        <p v-else>Nenhuma tarefa foi concluída</p>

        <TarefaSalvar
            v-if="showForm"
            @saveAction="saveTask"/>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import register from './../_store/register'
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
            errorMessage: undefined
        }
    },
    computed: {
        ...mapState(['selectedTask']),
        ...mapGetters([
            'doneTasks',
            'todoTasks',
            'totalDoneTasks',
            'welcome'
        ])
    },
    created() {
        register(this.$store)
        this.listTasks()
    },
    methods: {
        ...mapActions([
            'deleteTask',
            'listTasks',
            'doneTask',
            'selectTask',
            'resetSelectedTask',
            'createTask',
            'editTask'
        ]),
        confirmDeleteTask(task) {
            const confirm = window.confirm(`Deseja realmente apagar a tarefa "${task.title}"?`)

            if (!confirm)
                return

            this.deleteTask({ id: task.id })
        },
        async saveTask(event) {
            switch (event.operation) {
                case 'create':
                    await this.createTask({ task: event.task })
                    break;
                case 'update':
                    await this.editTask({ task: event.task })
                    break;
                default:
                    console.log('Invalid save operation')
                    break;
            }
            this.reset()
        },
        showFormCreateTask() {
            if (this.selectedTask) {
                this.resetSelectedTask()
                return
            }

            this.showForm = !this.showForm
        },
        selectedTaskForUpdate(task) {
            this.selectTask({ selectedTask: task })
            this.showForm = true
        },
        reset() {
            this.showForm = false
            this.resetSelectedTask()
        }
    }
}
</script>