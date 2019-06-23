import React, { Component } from 'react'
import Loading from 'components'
import WithAuth from 'components'
import { UserQueries } from 'gql'
import { Badge, MyHistory } from './components'
import StyledProfile from './styles'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: undefined,
    }
  }

  componentDidMount() {
    const { user } = this.state
    if (user === undefined) {
      UserQueries.me()
        .catch(err => console.log(err))
        .then(response => this.setState({ user: response.data.me }))
    }
  }

  loadUser = () => {}

  render() {
    const { user } = this.state
    if (user === undefined) {
      return <Loading />
    }

    return (
      <StyledProfile>
        <Badge user={user} />
        <MyHistory games={user.games} />
      </StyledProfile>
    )
  }
}

Profile.propTypes = {}

Profile.defaultProps = {}

const ProfilePage = WithAuth(Profile)

export { ProfilePage }
