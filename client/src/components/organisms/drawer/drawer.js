import React, { Component } from 'react'
import { bool, func } from 'prop-types'
import { observer, inject } from 'mobx-react'
import Button from '@material-ui/core/Button'
import LogoutIcon from '@material-ui/icons/ExitToApp'
import UserIcon from '@material-ui/icons/AccountBox'
import NewGameIcon from '@material-ui/icons/VideogameAsset'
import { Logo } from 'atoms'
import hero from 'resources/images/hero.svg'
import { History } from 'utils'
import StyledDrawer from './styles'

const propTypes = {
  isOpen: bool,
  toggleDrawer: func,
  logout: func,
}

const defaultProps = {
  isOpen: false,
  toggleDrawer() {},
  logout() {},
}

@observer
@inject(stores => {
  return {
    isOpen: stores.DrawerStore.isOpen,
    toggleDrawer: stores.DrawerStore.toggleDrawer,
    logout: stores.LoginStore.logout,
  }
})
class Drawer extends Component {
  // navigateAway = page => {
  // const { history } = this.props
  // if (!history.location.pathname.includes(page)) {
  //   this.setState(
  //     prevState => ({ burgerOpen: !prevState.burgerOpen }),
  //     () => {
  //       history.push(`/${page}`)
  //       this.updateLinksState()
  //     },
  //   )
  // }
  // }

  handleOnLogout = () => {
    const { toggleDrawer, logout } = this.props
    toggleDrawer()
    logout(() => History.push('/'))
  }

  render() {
    const { isOpen, toggleDrawer } = this.props

    const backgroundImage = {
      backgroundImage: `url(${hero})`,
    }
    return (
      <StyledDrawer
        open={isOpen}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        anchor="right"
        classes={{ paper: 'drawerBody' }}
      >
        <header style={backgroundImage}>
          <Logo size="large" />
        </header>
        <main>
          <Button
            color="primary"
            variant="outlined"
            onClick={() => this.navigateAway('profile')}
            disabled={History.location.pathname.includes('profile')}
          >
            <UserIcon />
            Profile
          </Button>
          <Button
            color="primary"
            variant="outlined"
            onClick={() => this.navigateAway('new-game')}
            disabled={History.location.pathname.includes('new-game')}
          >
            <NewGameIcon />
            New Game
          </Button>
        </main>
        <footer>
          <Button color="secondary" variant="outlined" onClick={this.handleOnLogout}>
            <LogoutIcon />
            Logout
          </Button>
        </footer>
      </StyledDrawer>
    )
  }
}

Drawer.propTypes = propTypes

Drawer.defaultProps = defaultProps

export default Drawer
