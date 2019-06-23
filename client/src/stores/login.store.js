import { observable, action } from 'mobx'
import { toast } from 'react-toastify'
import { handleLogin } from 'utils/auth'
import { api } from './helper'

class Store {
  @observable username = ''

  @observable password = ''

  @observable isLoading = false

  @action.bound setUsername(event) {
    this.username = event.target.value
  }

  @action.bound setPassword(event) {
    this.password = event.target.value
  }

  @action login = async (username, password, history) => {
    const loginQuery = {
      query: `
        query {
          login(username: "${username}", password: "${password}")
        }
      `,
    }
    this.isLoading = true
    try {
      const response = await api(loginQuery).json()
      this.isLoading = false
      handleLogin(response, history)
      toast.success(`Welcome back ${username}`, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2000,
      })
    } catch (err) {
      this.isLoading = false
      toast.error(`Error! ${err}`, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2000,
      })
    }
  }
}

const AuthStore = new Store()

export default AuthStore
