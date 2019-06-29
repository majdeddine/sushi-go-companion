import { observable, action, computed } from 'mobx'
import { toast } from 'react-toastify'
import { handleLogin, handleLogout, validateToken } from 'utils/auth'
import { api } from './helper'

const MIN_USERNAME_LENGTH = 3
const MIN_PASSWORD_LENGTH = 6
class Store {
  @observable username = ''

  @observable password = ''

  @observable isLoading = false

  @observable isLoggedIn = validateToken()

  @computed get isValid() {
    return (
      MIN_USERNAME_LENGTH <= this.username.length && MIN_PASSWORD_LENGTH <= this.password.length
    )
  }

  @action.bound setUsername(event) {
    this.username = event.target.value
  }

  @action.bound setPassword(event) {
    this.password = event.target.value
  }

  @action login = async callback => {
    const loginQuery = {
      query: `
        query {
          login(username: "${this.username}", password: "${this.password}")
        }
      `,
    }
    this.isLoading = true
    try {
      const response = await api(loginQuery)
      this.isLoading = false
      const jwt = response.data.data.login
      handleLogin(jwt)
      callback()
      this.isLoggedIn = true
      this.password = ''
      toast.success(`Welcome back ${this.username}`, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2000,
      })
    } catch (err) {
      this.isLoading = false
      toast.error(`Error! ${err[0].message}`, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2000,
      })
    }
  }

  @action logout = callback => {
    handleLogout()
    this.isLoggedIn = false
    callback()
  }
}

const LoginStore = new Store()

export default LoginStore
