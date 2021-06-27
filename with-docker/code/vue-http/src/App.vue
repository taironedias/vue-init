<template>
  <div id="app">
    <div class="jumbotron jumbotron-fuild">
      <div class="container">
        <h1 class="display-4">Requisições HTTP no Vue</h1>
        <p class="lead">Usando a biblioteca Axios para fazer chamadas Ajax à uma API REST</p>
      </div>
    </div>

    <div class="container">
      <TarefasLista />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import config from './config/config'

import TarefasLista from './components/TarefasLista.vue'

export default {
  components: {
    TarefasLista
  },
  async created() {
    /* Primeira forma utilizando o axios */
    // axios.all([
    //   axios.get(`${config.apiUrl}/tasks/1`),
    //   axios.get(`${config.apiUrl}/tasks/3`),
    //   axios.get(`${config.apiUrl}/tasks/4`)
    // ]).then(axios.spread((responseTask1, responseTask3, responseTask4) => {
    //   console.log('Requisições simultâneas...')
    //   console.log('Response da Task1 :>> ', responseTask1)
    //   console.log('Response da Task3 :>> ', responseTask3)
    //   console.log('Response da Task4 :>> ', responseTask4)
    // }))

    /* Segunda forma utilizando o ES6 */
    // axios.all([
    //   axios.get(`${config.apiUrl}/tasks/1`),
    //   axios.get(`${config.apiUrl}/tasks/3`),
    //   axios.get(`${config.apiUrl}/tasks/4`)
    // ]).then(response => {
    //   console.log('Requisições simultâneas...')
    //   /* realizando a desestruturação na atribuição (destructuring assignment) */
    //   const [responseTask1, responseTask3, responseTask4] = response
    //   console.log('Response da Task1 :>> ', responseTask1)
    //   console.log('Response da Task3 :>> ', responseTask3)
    //   console.log('Response da Task4 :>> ', responseTask4)
    // })

    /* Utilizando o async/await */
    const responseTask1 = await axios.get(`${config.apiUrl}/tasks/1`)
    const responseTask3 = await axios.get(`${config.apiUrl}/tasks/3`)
    const responseTask4 = await axios.get(`${config.apiUrl}/tasks/4`)
    console.log('Requisições simultâneas com async/await...')
    console.log('Response da Task1 :>> ', responseTask1)
    console.log('Response da Task3 :>> ', responseTask3)
    console.log('Response da Task4 :>> ', responseTask4)
  }
}
</script>