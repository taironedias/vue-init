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
                { id: 1, title: 'Aprender JavaScript', done: true },
                { id: 2, title: 'Aprender Vue.js', done: true },
                { id: 3, title: 'Aprender Axios', done: false }
            ]
        }
    }
}
</script>