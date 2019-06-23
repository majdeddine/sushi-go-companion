import { getToken } from 'utils/auth'

const { API_URL } = process.env

const api = query =>
  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(query),
    headers: {
      Authorization: `bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
  })

export { api }
