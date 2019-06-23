import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { withTranslation } from 'react-i18next'
import WithAuth from 'utils/auth/withAuthHOC'
import { Loading } from 'components'
import { Badge, MyHistory } from './components'
import StyledProfile from './styles'

@observer
@inject(stores => {
  return {
    me: stores.UserStore.me,
    isLoading: stores.UserStore.isLoading,
    loadMyData: stores.UserStore.loadMyData,
  }
})
class Profile extends Component {
  componentDidMount() {
    const { me, loadMyData } = this.props
    if (!me) {
      loadMyData()
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
  loadMyData: PropTypes.func,
}

Profile.defaultProps = {
  me: {},
  isLoading: false,
  loadMyData() {},
}

export default WithAuth(withTranslation()(Profile))
