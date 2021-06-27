import axios from 'axios'
import config from './config/config'

const instance = axios.create({})

instance.defaults.baseURL = config.apiUrl

instance.interceptors.request.use(config => {
    console.log('Interceptando requisições :>> ', config)
    config.data = {
        ...config.data,
        author: 'Tairone Dias'
    }

    /* adicionando um header de autorização para todas os verbos de requisição HTTP (GET, POST, PUT,...) */
    config.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    /* adicionando um header apenas para um tipo de requisição, nesse caso, o PUT */
    config.headers.put['my-custom-header'] = 'Avanti Palestra'

    // async
    // return new Promise((resolve) => {
    //     console.log('Simulando uma requisição async')
    //     setTimeout(() => {
    //         console.log('Enviando uma requisição')
    //         resolve(config)
    //     }, 5000);
    // })

    // sync
    return config

}, error => {
    /* Útil para algum tratamento global de manipulação de erro da aplicação */
    console.log('Erro ao fazer requisição :>> ', error)
    return Promise.reject(error)
})

instance.interceptors.response.use(response => {
    console.log('Interceptando a resposta :>> ', response)
    /* limitando a quantidade de dados do response.data */
    // if (Array.isArray(response.data)) {
    //     response.data = response.data.slice(1, 3)
    // }

    // async
    /* De forma análoga ao interceptors.request funciona a intercepção assíncrona */

    //  sync
    return response
}, error => {
    console.log('Erro capturado no interceptors.response :>> ', error)
    return Promise.reject(error)
})

export default instance