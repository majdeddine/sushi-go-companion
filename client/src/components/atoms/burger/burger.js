import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
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
      <StyledBurger color={color}>
        <IconButton onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </StyledBurger>
    )
  }
}

Burger.propTypes = {
  toggleDrawer: PropTypes.func,
  color: PropTypes.oneOf(['light', 'dark', 'primary', 'secondary', 'success', 'danger']),
}

Burger.defaultProps = {
  toggleDrawer() {},
  color: 'dark',
}

export default Burger
