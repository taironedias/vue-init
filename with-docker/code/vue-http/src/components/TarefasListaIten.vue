<template>
    <li class="list-group-item d-flex">
        <span>{{ task.title }}</span>
        <span class="espacar"></span>
        <button
            class="btn btn-sm mr-4"
            :class="cssClasses"
            :title="titleDoneButton"
            @click="doneTask">
                <i class="fa fa-check"></i>
        </button>
        <button
            class="btn btn-primary btn-sm mr-1"
            title="Editar"
            @click="$emit('updateAction', task)">
                <i class="fa fa-pencil-alt"></i>
        </button>
        <button
            class="btn btn-danger btn-sm"
            title="Deletar"
            @click="$emit('deleteAction', task)">
                <i class="fa fa-trash"></i>
        </button>
    </li>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    computed: {
        cssClasses() {
            return {
                'btn-secondary': !this.task.done,
                'btn-success': this.task.done
            }
        },
        titleDoneButton() {
            return this.task.done
                ? 'Refazer Tarefa'
                : 'Concluir Tarefa'
        }
    },
    methods: {
        doneTask() {
            /* Fazendo a emissão do evento dessa forma, para reaproveitar o método de requisição PUT no component pai (TarefasLista) */
            this.$emit('doneTaskAction', Object.assign({}, this.task, { done: !this.task.done }))
        }
    }
}
</script>

<style scoped>
    .espacar {
        flex: 1 1 auto;
    }
</style>