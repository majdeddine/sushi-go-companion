import axios from 'axios'
import { returnToken } from 'utils/auth'

const { API_URL } = process.env

const api = query => {
  const axiosInstance = axios.create({
    Authorization: `bearer ${returnToken()}`,
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },
  })
  const data = JSON.stringify(query)
  return axiosInstance.post(API_URL, data)
}

export { api }
