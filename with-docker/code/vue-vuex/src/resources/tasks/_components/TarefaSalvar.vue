<template>
    <div class="mt-4">
        <hr>
        <h2 class="font-weight-light">Salvar Tarefa</h2>
        <form @submit.prevent="save">
            <div class="row">
                <div :class="colunmClass">
                    <div class="form-group">
                        <label for="title">Título</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            class="form-control"
                            placeholder="Informe o título da tarefa"
                            v-model="task.title">
                    </div>
                </div>
                <div class="col-sm-2" v-if="selectedTask">
                    <div class="form-group">
                        <label for="done">Concluída?</label>
                        <button
                            type="button"
                            class="btn btn-sm d-block"
                            :class="doneBtnClass"
                            @click="task.done = !task.done">
                                <i class="fa fa-check"></i>
                        </button>
                    </div>
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Salvar</button>
        </form>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            task: {}
        }
    },
    computed: {
        ...mapState('tasks', ['selectedTask']),
        colunmClass() {
            return this.selectedTask
                ? 'col-sm-10'
                : 'col-sm-12'
        },
        doneBtnClass() {
            return this.selectedTask && this.task.done === true
                ? 'btn-success'
                : 'btn-secondary'
        }
    },
    watch: {
        selectedTask(newTask) {
            this.synchronize(newTask)
        }
    },
    created() {
        this.synchronize(this.selectedTask)
    },
    methods: {
        save() {
            const operation = !this.selectedTask ? 'create' : 'update'
            this.$emit('saveAction', { operation, task: this.task })
        },
        synchronize(newTask) {
            /* fazendo uma cópia local do meu objeto no Store para utilizar o v-model direto no meu component */
            this.task = Object.assign(
                {},
                newTask || { title: '', done: false }
            )
        }
    }
}
</script>