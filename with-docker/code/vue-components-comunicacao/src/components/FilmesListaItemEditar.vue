<template>
    <div>
        <h2>Editar Filme</h2>

        <div class="form-group">
            <label for="">Título</label>
            <input
                type="text"
                class="form-control"
                placeholder="Insira o título"
                :value="movie.title"
            >
        </div>

        <div class="form-group">
            <label for="">Ano</label>
            <input
                type="text"
                class="form-control"
                placeholder="Insira o ano"
                :value="movie.year"
            >
        </div>
    </div>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true
        }
    }
}
</script>