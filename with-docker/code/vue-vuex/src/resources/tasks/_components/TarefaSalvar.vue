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
            /* uma outra forma de corrigir a chamada do getters, por exemplo, quando o módulo tem uma namespaced é atribuíndo a sintaxe apresentada abaixo, onde: temos envolvendo o nome do getter um colchetes, aspas e o primeiro valor o nome do módulo registrado na instância Vue e uma barra */
            console.log('searchTaskById :>> ', this.$store.getters['tasks/searchTaskById'](this.task.id))
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