<template>
    <div>
        <div class="row">
            <div class="col-sm-10">
                <h1 class="font-weight-light">Lista de Tarefas</h1>
            </div>
            <div class="col-sm-2">
                <button
                    class="btn btn-primary float-right"
                    @click="showForm = !showForm">
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
                @updateAction="selectedTaskForUpdate"
                @deleteAction="deleteTask"
                @doneTaskAction="updateTask"/>
        </ul>

        <p v-else>Nenhuma tarefa criada</p>
        <TarefaSalvar
            v-if="showForm"
            :task="selectedTask"
            @create="createTask"
            @update="updateTask"/>
    </div>
</template>

<script>
import axios from 'axios'

import config from '@/config/config'
import TarefaSalvar from './TarefaSalvar.vue'
import TarefasListaIten from './TarefasListaIten.vue'

export default {
    components: {
        TarefaSalvar,
        TarefasListaIten
    },
    data() {
        return {
            tasks: [],
            showForm: false,
            selectedTask: undefined
        }
    },
    created() {
        axios.get(`${config.apiUrl}/tasks`)
            .then(response => {
                console.log('GET /tasks :>> ', response);
                this.tasks = response.data
            })
    },
    methods: {
        createTask(task) {
            axios.post(`${config.apiUrl}/tasks`, task)
                .then(response => {
                    console.log('POST /tasks :>> ', response);
                    this.tasks.push(response.data)
                    this.reset()
                })
                .catch(reason => {
                    console.log('reason :>> ', reason);
                })
        },
        updateTask(task) {
            axios.put(`${config.apiUrl}/tasks/${task.id}`, task)
                .then(response => {
                    console.log(`PUT /tasks/${task.id} :>> `, response)
                    const index = this.tasks.findIndex(t => t.id === response.data.id)
                    this.tasks.splice(index, 1, response.data)
                    this.reset()
                })
                .catch(reason => {
                    console.log('reason :>> ', reason)
                })
        },
        deleteTask(task) {
            const confirm = window.confirm(`Deseja excluir a tarefa "${task.title}"?`)

            if (!confirm) {
                return
            }

            axios.delete(`${config.apiUrl}/tasks/${task.id}`)
                .then(response => {
                    const index = this.tasks.findIndex(t => t.id === response.data.id)
                    this.tasks.splice(index, 1)
                })
                .catch(reason => {
                    console.log('reason :>> ', reason);
                })
        },
        selectedTaskForUpdate(task) {
            this.selectedTask = task
            this.showForm = true
        },
        reset() {
            this.selectedTask = undefined
            this.showForm = false
        }
    }
}
</script>