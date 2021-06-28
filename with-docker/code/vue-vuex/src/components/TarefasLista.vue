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

        <ul class="list-group" v-if="tasks.length > 0">
            <TarefasListaIten
                v-for="task in tasks"
                :key="task.id"
                :task="task"
                @updateAction="selectedTaskForUpdate"/>
        </ul>

        <p v-else>Nenhuma tarefa criada</p>

        <TarefaSalvar
            v-if="showForm"
            :task="selectedTask"/>
    </div>
</template>

<script>
import TarefaSalvar from './TarefaSalvar.vue'
import TarefasListaIten from './TarefasListaIten.vue'

export default {
    components: {
        TarefaSalvar,
        TarefasListaIten
    },
    data() {
        return {
            tasks: [
                { id: 1, title: 'Aprender Vue.js', done: true },
                { id: 2, title: 'Aprender Vue Router', done: true },
                { id: 3, title: 'Aprender Vuex', done: false }
            ],
            showForm: false,
            selectedTask: undefined,
            errorMessage: undefined
        }
    },
    methods: {
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