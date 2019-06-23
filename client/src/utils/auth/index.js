/* eslint-disable no-underscore-dangle */
import decode from 'jwt-decode'
import { TOKEN_NAME } from './consts'

// IS
export const isToken = () => typeof localStorage.getItem(TOKEN_NAME) === 'string'
// GET
export const getToken = () => (isToken() ? localStorage.getItem(TOKEN_NAME) : undefined)
export const getIdFromToken = () => decode(getToken())._id
// SET
export const setToken = token => {
  localStorage.setItem(TOKEN_NAME, token)
}
// REMOVE
export const removeToken = () => localStorage.removeItem(TOKEN_NAME)
export const handleLogin = (response, history) => {
  const res = { ...response }
  if (res.data) {
    // console.group('%cAuth handleLogin', 'color: green')
    // console.log({ response })
    // console.groupEnd()
    if (typeof res.data.login === 'string') {
      setToken(res.data.login)
      history.replace('/')
    }
  } else if (res.error) {
    // const token = response.data.login
    // console.group('%cAuth handleLogin', 'color: tomato')
    // console.log({ response })
    // console.groupEnd()
  }
}
export const handleRegistration = (response, history) => {
  const res = { ...response }
  if (res.data) {
    // console.group('%cAuth handleLogin', 'color: green')
    // console.log({ response })
    // console.groupEnd()
    if (typeof res.data.register === 'string') {
      setToken(res.data.register)
      history.replace('/')
    }
  } else if (res.error) {
    // const token = response.data.login
    // console.group('%cAuth handleLogin', 'color: tomato')
    // console.log({ response })
    // console.groupEnd()
  }
}
export const validateToken = () => {
  if (isToken()) {
    const { exp } = decode(getToken())
    if (exp > new Date().getTime() / 1000) {
      return true
    }
  }
  return false
}
export const handleLogout = history => {
  removeToken()
  history.push('/')
}
