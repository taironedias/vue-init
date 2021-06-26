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

export default instance