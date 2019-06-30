import { observable, action, computed } from 'mobx'
import { toast } from 'react-toastify'
import { handleLogin } from 'utils/auth'
import LoginStore from './login.store'
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

  @computed get isValid() {
    return (
      this.forename &&
      this.surname &&
      this.email &&
      this.password &&
      this.ConfirmPassword &&
      this.password === this.ConfirmPassword
    )
  }

  @action submit = async callback => {
    const registrationQuery = {
      query: `
      mutation {
        register (
          forename: "${this.forename}"
          surname: "${this.surname}"
          email: "${this.email}"
          username: "${this.username}"
          password: "${this.password}"
          avatar: "${this.avatar}"
        )
      }
      `,
    }
    this.isLoading = true
    try {
      const response = await api(registrationQuery)
      this.isLoading = false
      const jwt = response.data.data.register
      handleLogin(jwt)
      callback()
      LoginStore.isLoggedIn = true
      this.resetFields()
      toast.success('Registration successful!', {
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

  @action resetFields = () => {
    this.forename = ''
    this.surname = ''
    this.email = ''
    this.username = ''
    this.password = ''
    this.ConfirmPassword = ''
    this.avatar = 'placeholder'
  }
}

const RegistrationStore = new Store()

export default RegistrationStore
