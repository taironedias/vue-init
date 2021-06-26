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
        <ul class="list-group" v-if="sortTasks.length > 0">
            <TarefasListaIten
                v-for="task in sortTasks"
                :key="task.id"
                :task="task"
                @updateAction="selectedTaskForUpdate"
                @deleteAction="deleteTask"
                @doneTaskAction="updateTask"/>
        </ul>

        <p v-else-if="!errorMessage">Nenhuma tarefa criada</p>

        <div class="alert alert-danger" v-else>{{ errorMessage }}</div>

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
            selectedTask: undefined,
            errorMessage: undefined
        }
    },
    computed: {
        sortTasks() {
            return this.tasks.slice().sort((task1, task2) => {
                if (task1.done === task2.done) {
                    /* Realizando uma segunda ordenação, só que agora por ordem alfabética do título */
                    return task1.title < task2.title
                        ? -1
                        : task1.title > task2.title
                            ? 1
                            : 0
                }

                /* Apesar de done ser do tipo Boolean, no JS é possível fazer esse tipo de operação, pois como é tipo primitivo há naturalmente a conversão para inteiros e a operação aritmética é realizada */
                return task1.done - task2.done
            })
        }
    },
    created() {
        // axios.get(`${config.apiUrl}/endpointNotFound`)   // forçando um Client Error
        // axios.get(`http://0.0.0.0:3001/tasks`)           // forçando um Server Error
        // axios.get(`${config.apiUrl}12345/tasks`)         // forçando um erro na montagem da requisição
        axios.get(`${config.apiUrl}/tasks`)
            .then(response => {
                /* Semelhante ao DONE (SUCCESS) do jQuery */
                console.log('GET /tasks :>> ', response);
                this.tasks = response.data
                return 'Valor para o "optionalParams" do always (from then)'
            }, error => {
                /* Essa é a primeira forma de capturar o erro; normlamente, é utilizada para caputrar o mesmo erro em várias situações da requisição, considerando que a requisição tenha mais de um then */
                console.log('Erro capturado no then :>> ', error)
                /* O return abaixo é para repassar o erro para que seja capturado no próximo then ou catch que existir */
                return Promise.reject(error)
            }).catch(error => {
                /* Semelhante ao FAIL (ERROR) do jQuery */
                /* Essa é a segunda forma de capturar o erro; normlamente, é utilizada uma única vez para capturar o error da requisição como um todo */
                console.log('Error capturado no catch :>> ', error)

                if (error.response) {           // significa que o servidor processou a requisição, mas retornou um Client Error (400-499)
                    this.errorMessage = `Servidor retornou um erro: ${error.message} -- ${error.response.statusText}`
                    console.log('Erro [response] :>> ', error.response);

                } else if (error.request) {     // significa que o servidor não chegou a processar a requisição, Server Error (500-599)
                    this.errorMessage = `Erro ao tentar se comunicar com o servidor: ${error.message}`
                    console.log('Erro [request] :>> ', error.request);
                } else {                        // significa que teve algum erro na codificação da requisição que não foi perceptível pelo Vue
                    this.errorMessage = `Erro na montagem da requisição do axios: ${error.message}`
                }

                return 'Valor para o "optionalParams" do always (from catch)'
            }).then(optionalParams => {
                /* Semelhante ao ALWAYS (COMPLETE) do jQuery */
                console.log('Sempre é executado e o parâmetro passado para esse callback pode existir ou não, dependendo se nos callbacks de sucesso e erro haverá alguma return :>> ', optionalParams);
            })
    },
    methods: {
        createTask(task) {
            // axios.post(`${config.apiUrl}/tasks`, task)
            //     .then(response => {
            //         console.log('POST /tasks :>> ', response);
            //         this.tasks.push(response.data)
            //         this.reset()
            //     })
            //     .catch(reason => {
            //         console.log('reason :>> ', reason);
            //     })

            axios.request({
                method: 'POST',
                baseURL: config.apiUrl,
                url: '/tasks',
                data: task
            }).then(response => {
                console.log('POST /tasks :>> ', response);
                this.tasks.push(response.data)
                this.reset()

            }).catch(error => {
                if (error.response) {
                    this.errorMessage = `Servidor retornou um erro: ${error.message} -- ${error.response.statusText}`
                } else if (error.request) {
                    this.errorMessage = `Erro ao tentar se comunicar com o servidor: ${error.message}`
                } else {
                    this.errorMessage = `Erro na montagem da requisição do axios: ${error.message}`
                }
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
                .catch(error => {
                    if (error.response) {
                        this.errorMessage = `Servidor retornou um erro: ${error.message} -- ${error.response.statusText}`
                    } else if (error.request) {
                        this.errorMessage = `Erro ao tentar se comunicar com o servidor: ${error.message}`
                    } else {
                        this.errorMessage = `Erro na montagem da requisição do axios: ${error.message}`
                    }
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
                .catch(error => {
                    if (error.response) {
                        this.errorMessage = `Servidor retornou um erro: ${error.message} -- ${error.response.statusText}`
                    } else if (error.request) {
                        this.errorMessage = `Erro ao tentar se comunicar com o servidor: ${error.message}`
                    } else {
                        this.errorMessage = `Erro na montagem da requisição do axios: ${error.message}`
                    }
                })
        },
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
            this.selectedTask = undefined
            this.showForm = false
        }
    }
}
</script>