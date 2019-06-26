import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import Button from '@material-ui/core/Button'
import LogoutIcon from '@material-ui/icons/ExitToApp'
import UserIcon from '@material-ui/icons/AccountBox'
import NewGameIcon from '@material-ui/icons/VideogameAsset'
import { Logo } from 'atoms'
import hero from 'resources/images/hero.svg'
import { handleLogout } from 'utils/auth'
import StyledDrawer from './styles'

@observer
@inject(stores => {
  return {
    isOpen: stores.DrawerStore.isOpen,
    toggleDrawer: stores.DrawerStore.toggleDrawer,
  }
})
class Drawer extends Component {
  navigateAway = page => {
    const { history } = this.props
    // if (!history.location.pathname.includes(page)) {
    //   this.setState(
    //     prevState => ({ burgerOpen: !prevState.burgerOpen }),
    //     () => {
    //       history.push(`/${page}`)
    //       this.updateLinksState()
    //     },
    //   )
    // }
  }

  handleOnLogout = () => {
    const { history, toggleDrawer } = this.props
    history.push('/')
    toggleDrawer()
    handleLogout(history)
  }

  render() {
    const { isOpen, toggleDrawer, history } = this.props
    console.group('%cHISTORY', 'color: hotpink')
    console.log(history)
    console.groupEnd()
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
            // disabled={history.location.pathname.includes('profile')}
          >
            <UserIcon />
            Profile
          </Button>
          <Button
            color="primary"
            variant="outlined"
            onClick={() => this.navigateAway('new-game')}
            // disabled={history.location.pathname.includes('new-game')}
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

Drawer.propTypes = {
  history: PropTypes.object,
  isOpen: PropTypes.bool,
  toggleDrawer: PropTypes.func,
}

Drawer.defaultProps = {
  history: {},
  isOpen: false,
  toggleDrawer() {},
}

export default Drawer
