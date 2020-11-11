<template>
    <div>
        <h2>Filme selecionado</h2>

        <div class="card" v-if="movie">
            <div class="card-body">
                <h5 class="card-title">{{ movie.title }} ({{ movie.year }})</h5>
                <span class="font-italic">Diretor: {{ movie.director }}</span>
                <button class="btn btn-danger float-right">Editar</button>
            </div>
        </div>

        <p v-else>Nenhum filme foi selecionado</p>
    </div>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object
        }
    }
}
</script>