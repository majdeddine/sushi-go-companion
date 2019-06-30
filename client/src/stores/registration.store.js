import { observable, action, computed } from 'mobx'
import { toast } from 'react-toastify'
import {} from 'utils/auth'
import { api } from './helper'

class Store {
  @observable forename = ''

  @observable surname = ''

  @observable email = ''

  @observable username = ''

  @observable password = ''

  @observable ConfirmPassword = ''

  @observable avatar = 'placeholder'

  @observable isLoading = false

  @action setStoreValue = event => {
    const { name, value } = event.target
    this[name] = value
  }

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

const RegistrationStore = new Store()

export default RegistrationStore
