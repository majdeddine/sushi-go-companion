import React, { Component } from 'react'
import PropTypes from 'prop-types'
import keycode from 'keycode'
import { observer, inject } from 'mobx-react'
import { withTranslation } from 'react-i18next'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import StyledLogin from './styles'

@observer
@inject(stores => {
  return {
    username: stores.LoginStore.username,
    password: stores.LoginStore.password,
    isLoading: stores.LoginStore.isLoading,
    isValid: stores.LoginStore.isValid,
    login: stores.LoginStore.login,
    setUsername: stores.LoginStore.setUsername,
    setPassword: stores.LoginStore.setPassword,
  }
})
class Login extends Component {
  handleOnChange = event => {
    this.props[event.target.name] = event.target.value
  }

  handleOnLogin = event => {
    const { login, history } = this.props
    if (!keycode(event) || keycode(event) === 'enter') {
      login(history)
    }
  }

  navigateToRegister = () => {
    const { history } = this.props
    history.push('/register')
  }

  render() {
    const { t, username, password, isLoading, setUsername, setPassword, isValid } = this.props
    return (
      <StyledLogin>
        <Choose>
          <When condition={isLoading}>Loading ...</When>
          <Otherwise>
            <Card className="content">
              <TextField
                id={t('username')}
                name="username"
                label={t('username')}
                value={username}
                onChange={setUsername}
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
                onChange={setPassword}
                autoComplete={t('password')}
                fullWidth
                onKeyPress={this.handleOnLogin}
              />

              <div className="actions">
                <Button onClick={this.navigateToRegister} variant="outlined">
                  {t('register')}
                </Button>
                <Button
                  onClick={this.handleOnLogin}
                  variant="contained"
                  color="primary"
                  disabled={!isValid}
                >
                  {t('login')}
                </Button>
              </div>
            </Card>
          </Otherwise>
        </Choose>
      </StyledLogin>
    )
  }
}

Login.propTypes = {
  history: PropTypes.object,
  t: PropTypes.func.isRequired,
  username: PropTypes.string,
  password: PropTypes.string,
  isLoading: PropTypes.bool,
  isValid: PropTypes.bool,
  login: PropTypes.func,
  setUsername: PropTypes.func,
  setPassword: PropTypes.func,
}

Login.defaultProps = {
  history: {},
  username: '',
  password: '',
  isLoading: false,
  isValid: false,
  login() {},
  setUsername() {},
  setPassword() {},
}

export default withTranslation()(Login)
