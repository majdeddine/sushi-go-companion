import { observable, action } from 'mobx'

class Store {
  @observable username = ''

  @observable password = ''

  @action login = () => {}
}

const LoginStore = new Store()

export default LoginStore
