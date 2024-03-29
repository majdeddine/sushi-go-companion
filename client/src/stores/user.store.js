/* eslint-disable no-underscore-dangle */
import { observable, action } from 'mobx'
import { toast } from 'react-toastify'
import { getIdFromToken } from 'utils/auth'
import { api } from './helper'

class Store {
  @observable me = undefined

  @observable isLoading = false

  @action loadMyData = async () => {
    const _id = getIdFromToken()
    const meQuery = {
      query: `
          query {
            me(_id: "${_id}") {
              _id
              forename
              surname
              email
              username
              avatar
              games {
                players {
                  user {
                    username
                  }
                }
              }
              participations {
                score,
              }
              createdAt
              scope
            }
          }
        `,
    }
    this.isLoading = true
    try {
      const response = await api(meQuery)
      this.isLoading = false
      this.me = response.data.data.me
    } catch (err) {
      this.isLoading = false
      toast.error(`Error! ${err}`, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2000,
      })
    }
  }
}

const UserStore = new Store()

export default UserStore
