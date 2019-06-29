/* eslint-disable no-underscore-dangle */
import decode from 'jwt-decode'
import { TOKEN_NAME } from './consts'

// GET
const getToken = () => localStorage.getItem(TOKEN_NAME)

// SET
const setToken = token => localStorage.setItem(TOKEN_NAME, token)

// REMOVE
const removeToken = () => localStorage.removeItem(TOKEN_NAME)

// EXPOSED
export const handleLogin = jwt => setToken(jwt)

export const handleLogout = () => removeToken()

export const returnToken = () => getToken()

export const getIdFromToken = () => decode(getToken())._id

export const validateToken = () => {
  if (getToken()) {
    const { exp } = decode(getToken())
    if (exp > new Date().getTime() / 1000) {
      return true
    }
  }
  return false
}
