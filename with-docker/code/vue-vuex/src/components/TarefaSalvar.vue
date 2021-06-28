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
                            :value="task && task.title">
                    </div>
                </div>
                <div class="col-sm-2" v-if="task">
                    <div class="form-group">
                        <label for="done">Tarefa concluída?</label>
                        <button
                            type="button"
                            class="btn btn-sm d-block"
                            :class="doneBtnClass">
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
    computed: {
        colunmClass() {
            return this.task
                ? 'col-sm-10'
                : 'col-sm-12'
        },
        doneBtnClass() {
            return this.task && this.task.done === true
                ? 'btn-success'
                : 'btn-secondary'
        }
    },
    created() {
        if (this.task) {
            console.log('searchTaskById :>> ', this.$store.getters.searchTaskById(this.task.id))
        }
    },
    methods: {
        save() {
            const operation = !this.task ? 'create' : 'update'
            console.log('operation :>> ', operation)
        }
    }
}
</script>