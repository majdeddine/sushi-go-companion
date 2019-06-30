import React, { Component } from 'react'
import { object, func, string, bool } from 'prop-types'
import { observer, inject } from 'mobx-react'
import { ActionBar, Loading, Paper, Text } from 'components'
import { withTranslation } from 'react-i18next'
import TextField from '@material-ui/core/TextField'
import StyledLogin from './styles'

const propTypes = {
  history: object,
  t: func.isRequired,
  username: string,
  password: string,
  isLoading: bool,
  isValid: bool,
  login: func,
  setStoreValue: func,
}

const defaultProps = {
  history: {},
  username: '',
  password: '',
  isLoading: false,
  isValid: false,
  login() {},
  setStoreValue() {},
}

@observer
@inject(stores => {
  return {
    username: stores.LoginStore.username,
    password: stores.LoginStore.password,
    isLoading: stores.LoginStore.isLoading,
    isValid: stores.LoginStore.isValid,
    login: stores.LoginStore.login,
    setStoreValue: stores.LoginStore.setStoreValue,
  }
})
class Login extends Component {
  handleOnLogin = event => {
    const { login, history } = this.props
    if (!event.key || event.key === 'Enter') {
      login(() => history.push('/profile'))
    }
  }

  navigateToRegister = () => {
    const { history } = this.props
    history.push('/register')
  }

  render() {
    const { t, username, password, isLoading, setStoreValue, isValid } = this.props
    const { APP_NAME } = process.env
    const actions = [
      {
        text: t('register'),
        action: this.navigateToRegister,
        disabled: false,
        color: 'primary',
        variant: 'outlined',
      },
      {
        text: t('login'),
        action: this.handleOnLogin,
        disabled: !isValid,
        color: 'primary',
        variant: 'contained',
      },
    ]
    return (
      <StyledLogin>
        <Choose>
          <When condition={isLoading}>
            <Loading />
          </When>
          <Otherwise>
            <Paper>
              <Text color="dark" weight="bold">
                {APP_NAME}
              </Text>
              <TextField
                id={t('username')}
                name="username"
                label={t('username')}
                value={username}
                onChange={setStoreValue}
                autoFocus
                fullWidth
                autoComplete={t('username')}
                onKeyPress={this.handleOnLogin}
              />
              <TextField
                type="password"
                label={t('password')}
                name="password"
                id={t('password')}
                value={password}
                onChange={setStoreValue}
                autoComplete={t('password')}
                fullWidth
                onKeyPress={this.handleOnLogin}
              />
              <ActionBar alignment="right" actions={actions} />
            </Paper>
          </Otherwise>
        </Choose>
      </StyledLogin>
    )
  }
}

Login.propTypes = propTypes

Login.defaultProps = defaultProps

export default withTranslation()(Login)
