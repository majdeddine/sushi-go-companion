import { Auth } from 'utils'

const { API_URL } = process.env

const api = query =>
  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(query),
    headers: {
      Authorization: `bearer ${Auth.getToken()}`,
      'Content-Type': 'application/json',
    },
  })

export { api }
