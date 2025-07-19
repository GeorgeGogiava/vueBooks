import axios from 'axios'
import { ggConfig } from '@/config/config'
const api = axios.create({
  baseURL: ggConfig.apiUrl,
})

export default api


