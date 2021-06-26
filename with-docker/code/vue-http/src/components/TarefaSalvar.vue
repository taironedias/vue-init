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
                            v-model="localTask.title">
                    </div>
                </div>
                <div class="col-sm-2" v-if="task">
                    <div class="form-group">
                        <label for="done">Tarefa concluída?</label>
                        <button
                            type="button"
                            class="btn btn-sm d-block"
                            :class="doneBtnClass"
                            @click="localTask.done = !localTask.done">
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
export default {
    props: {
        task: {
            type: Object,
            default: undefined
        }
    },
    data() {
        return {
            localTask: Object.assign(
                {},
                { title: '', done: false },
                this.task
            )
        }
    },
    computed: {
        colunmClass() {
            return this.task
                ? 'col-sm-10'
                : 'col-sm-12'
        },
        doneBtnClass() {
            return this.task && this.localTask.done === true
                ? 'btn-success'
                : 'btn-secondary'
        }
    },
    watch: {
        task(newTask) {
            this.localTask = Object.assign({}, newTask)
        }
    },
    methods: {
        save() {
            const operation = !this.task ? 'create' : 'update'
            this.$emit(operation, this.localTask)
            this.localTask = { title: '', done: false }
        }
    }
}
</script>