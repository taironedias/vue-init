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
                @updateAction="selectedTaskForUpdate"/>
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
                    this.showForm = false
                })
                .catch(reason => {
                    console.log('reason :>> ', reason);
                })
        },
        updateTask(task) {
            console.log('updateTask :>> ', task)
        },
        selectedTaskForUpdate(task) {
            this.selectedTask = task
            this.showForm = true
        }
    }
}
</script>