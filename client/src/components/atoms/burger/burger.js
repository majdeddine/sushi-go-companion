import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

@observer
@inject(stores => {
  return {
    toggleDrawer: stores.DrawerStore.toggleDrawer,
  }
})
class Burger extends Component {
  render() {
    const { toggleDrawer } = this.props
    return (
      <IconButton onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
    )
  }
}

Burger.propTypes = {
  toggleDrawer: PropTypes.func,
}

Burger.defaultProps = {
  toggleDrawer() {},
}

export default Burger
