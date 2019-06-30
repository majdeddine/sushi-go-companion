import { observable, action, computed } from 'mobx'
import { toast } from 'react-toastify'
import {} from 'utils/auth'
import { api } from './helper'

class Store {
  @observable username = ''

  @observable isValid = false

  // @action login = async callback => {
  //   const loginQuery = {
  //     query: `
  //       query {
  //         login(username: "${this.username}", password: "${this.password}")
  //       }
  //     `,
  //   }
  //   this.isLoading = true
  //   try {
  //     const response = await api(loginQuery)
  //     this.isLoading = false
  //     const jwt = response.data.data.login
  //     handleLogin(jwt)
  //     callback()
  //     this.isLoggedIn = true
  //     this.password = ''
  //     toast.success(`Welcome back ${this.username}`, {
  //       position: toast.POSITION.BOTTOM_CENTER,
  //       autoClose: 2000,
  //     })
  //   } catch (err) {
  //     this.isLoading = false
  //     toast.error(`Error! ${err[0].message}`, {
  //       position: toast.POSITION.BOTTOM_CENTER,
  //       autoClose: 2000,
  //     })
  //   }
  // }
}

const LoginStore = new Store()

export default LoginStore
