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

      <button
        class="btn btn-primary mt-4 mb-2"
        @click="downloadImg">
          <i class="fa fa-download mr-2"></i>
          <span>Baixar Imagem</span>
      </button>

      <div class="progress" v-if="progressDownload > 0">
        <div
          class="progress-bar"
          role="progressbar"
          :style="{ width: progressDownload + '%' }"
          :aria-valuenow="progressDownload"
          aria-valuemin="0"
          aria-valuemax="100">
            {{ progressDownload }}%
        </div>
      </div>

      <div v-if="image" class="mt-2 mb-4">
        <img :src="image" class="rounded" style="max-width: 100%">
      </div>

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
  data() {
    return {
      progressDownload: 0,
      image: undefined
    }
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
  },
  methods: {
    downloadImg() {
      axios.get(
        'https://images.unsplash.com/photo-1574903813031-311917165463?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1921&q=80',
        {
          responseType: 'blob',
          onDownloadProgress: (progressEvent) => {
            console.log('Fazendo download...')
            this.progressDownload = ((progressEvent.loaded / progressEvent.total) * 100).toFixed(0)
          }
        }
      ).then(response => {
        console.log('Download concluído :>> ', response)

        const reader = new window.FileReader()
        reader.readAsDataURL(response.data)
        reader.onload = () => {
          this.image = reader.result
        }
      })
    }
  }
}
</script>