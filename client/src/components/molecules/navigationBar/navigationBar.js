import React, { Component } from 'react'
import { func, bool } from 'prop-types'
import { observer, inject } from 'mobx-react'
import { withTranslation } from 'react-i18next'
import Button from '@material-ui/core/Button'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset'
import InsertChartIcon from '@material-ui/icons/InsertChart'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { History } from 'utils'
import StyledNavigationBar from './styles'

const propTypes = {
  t: func.isRequired,
  logout: func,
  isLoggedIn: bool,
}

const defaultProps = {
  logout() {},
  isLoggedIn: false,
}

@observer
@inject(stores => {
  return {
    logout: stores.LoginStore.logout,
    isLoggedIn: stores.LoginStore.isLoggedIn,
  }
})
class NavigationBar extends Component {
  render() {
    const { t, logout, isLoggedIn } = this.props

    const navButtons = [
      {
        key: 1,
        text: t('profile'),
        icon: <AccountBoxIcon />,
        action: () => History.push('/profile'),
      },
      {
        key: 2,
        text: t('new game'),
        icon: <VideogameAssetIcon />,
        action: () => History.push('/new-game'),
      },
      {
        key: 3,
        text: t('stats'),
        icon: <InsertChartIcon />,
        action: () => History.push('/stats'),
      },
      {
        key: 4,
        text: t('logout'),
        icon: <ExitToAppIcon />,
        action: () => logout(() => History.push('/')),
      },
    ]

    return (
      <If condition={isLoggedIn}>
        <StyledNavigationBar>
          {navButtons.map(item => {
            return (
              <Button color="secondary" onClick={item.action}>
                {item.icon}
                {item.text}
              </Button>
            )
          })}
        </StyledNavigationBar>
      </If>
    )
  }
}

NavigationBar.propTypes = propTypes

NavigationBar.defaultProps = defaultProps

export default withTranslation()(NavigationBar)
