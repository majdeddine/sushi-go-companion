import React, { Component } from 'react'
import { func, oneOf } from 'prop-types'
import { observer, inject } from 'mobx-react'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { isLoggedIn } from 'utils/auth'
import StyledBurger from './styles'

@observer
@inject(stores => {
  return {
    toggleDrawer: stores.DrawerStore.toggleDrawer,
  }
})
class Burger extends Component {
  render() {
    const { toggleDrawer, color } = this.props
    return (
      <If condition={isLoggedIn()}>
        <StyledBurger color={color}>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </StyledBurger>
      </If>
    )
  }
}

Burger.propTypes = {
  toggleDrawer: func,
  color: oneOf(['light', 'dark', 'primary', 'secondary', 'success', 'danger']),
}

Burger.defaultProps = {
  toggleDrawer() {},
  color: 'dark',
}

export default Burger
