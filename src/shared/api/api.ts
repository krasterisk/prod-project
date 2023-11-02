import axios from 'axios'
import { TOKEN_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: ` Bearer ${localStorage.getItem(TOKEN_LOCALSTORAGE_KEY) || ''}`
  }
})

// $api.interceptors.request.use((config) => {
//   config.headers.authorization = `Bearer ${localStorage.getItem(TOKEN_LOCALSTORAGE_KEY) || ''}`
// })
