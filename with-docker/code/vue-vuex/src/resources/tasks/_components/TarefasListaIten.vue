<template>
    <li class="list-group-item d-flex">
        <span>{{ task.title }}</span>
        <span class="espacar"></span>
        <button
            class="btn btn-sm mr-4"
            :class="cssClasses"
            :title="titleDoneButton"
            @click="$emit('doneAction', task)">
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
    }
}
</script>

<style scoped>
    .espacar {
        flex: 1 1 auto;
    }
</style>