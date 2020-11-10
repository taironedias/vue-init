<template>
    <div class="row">
        <!-- column 1 -->
        <div class="col-8">
            <h2>Filmes</h2>

            <ul class="list-group list-group-flush">
                <!-- Essa é a forma simple, pois o objeto filme possue poucos atributos. -->
                <!-- <FilmesListaItem v-for="filme in filmes" :key="filme.id" :filmeTitulo="filme.title" :filmeAno="filme.ano"/> -->
                <!-- No entanto, se existir mais atributos o código ficará muito verboso. Então, a solução que o Vue oferece é utilizando a diretiva v-bind, porém as props devem ter o mesmo nome dos atributos. Ou sjea, 'filmeTitulo' deve passar a se chamar 'titulo', a mesma coisa para 'filmeAno' que deverá ser apenas 'ano' -->
                <FilmesListaItem v-for="filme in filmes" :key="filme.id" v-bind="filme"/>
            </ul>
        </div>

        <!-- column 2 -->
        <div class="col-4">
            <FilmesListaItemInfo/>
        </div>
    </div>
</template>

<script>
import FilmesListaItem from './FilmesListaItem.vue';
import FilmesListaItemInfo from './FilmesListaItemInfo.vue';

export default {
    components: {
        FilmesListaItem,
        FilmesListaItemInfo
    },
    data() {
        return {
            filmes: [
                { id: 1, title: 'Capitão Marvel', year: 2019},
                { id: 2, title: 'Vingadores: Guerra Infinita', year: 2019},
                { id: 3, title: 'Homem-Aranha: Longe de Casa', year: 2019},
                { id: 4, title: 'Viúva Negra', year: 2021}
            ]
        }
    }
}
</script>