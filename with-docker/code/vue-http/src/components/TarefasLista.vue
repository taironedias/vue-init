<template>
    <div>
        <h1 class="font-weight-light">Lista de Tarefas</h1>
        <ul class="list-group" v-if="tasks.length > 0">
            <TarefasListaIten
                v-for="task in tasks"
                :key="task.id"
                :task="task" />
        </ul>

        <p v-else>Nenhuma tarefa criada</p>
        <TarefaSalvar />
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
            tasks: []
        }
    },
    created() {
        axios.get(`${config.apiUrl}/tasks`)
            .then(response => {
                console.log('response :>> ', response);
                this.tasks = response.data
            })
    }
}
</script>