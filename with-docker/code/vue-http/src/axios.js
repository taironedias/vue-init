import axios from 'axios'
import config from './config/config'

axios.defaults.baseURL = config.apiUrl

export default axios