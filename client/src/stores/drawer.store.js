import { observable, action } from 'mobx'

class Store {
  @observable isOpen = false

  @action.bound toggleDrawer() {
    this.isOpen = !this.isOpen
  }
}

const DrawerStore = new Store()

export default DrawerStore
