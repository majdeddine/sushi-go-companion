import React, { Component } from 'react'
import { observer, inject, PropTypes } from 'mobx-react'
import { Loading } from 'components'
import WithAuth from 'utils/auth'
import { Badge, MyHistory } from './components'
import StyledProfile from './styles'

@observer
@inject(stores => {
  return {
    me: stores.LoginStore.me,
    isLoading: stores.LoginStore.isLoading,
    getUser: stores.LoginStore.getUser,
  }
})
class Profile extends Component {
  componentDidMount() {
    const {
      me: { username },
      getUser,
    } = this.props
    if (!username) {
      getUser()
    }
  }

  render() {
    const { me, isLoading } = this.props

    return (
      <StyledProfile>
        <Choose>
          <When condition={isLoading}>
            <Loading />
          </When>
          <Otherwise>
            <Badge user={me} />
            <MyHistory games={me.games} />
          </Otherwise>
        </Choose>
      </StyledProfile>
    )
  }
}

Profile.propTypes = {
  me: PropTypes.shape({}),
  isLoading: PropTypes.bool,
  getUser: PropTypes.func,
}

Profile.defaultProps = {
  me: {},
  isLoading: false,
  getUser() {},
}

const ProfilePage = WithAuth(Profile)

export { ProfilePage }
