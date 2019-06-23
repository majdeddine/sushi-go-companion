import React, { Component } from 'react'
import { observer, inject, PropTypes } from 'mobx-react'
import { withTranslation } from 'react-i18next'
import WithAuth from 'utils/auth/withAuthHOC'
import { Loading } from 'components'
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
  me: PropTypes.object,
  isLoading: PropTypes.bool,
  getUser: PropTypes.func,
}

Profile.defaultProps = {
  me: {},
  isLoading: false,
  getUser() {},
}

export default WithAuth(withTranslation()(Profile))
