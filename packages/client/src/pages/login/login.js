import React, { Component } from 'react'
import PropTypes from 'prop-types'
import keycode from 'keycode'
import { observer, inject } from 'mobx-react'
import { withTranslation } from 'react-i18next'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import StyledLogin from './styledLogin'

@observer
@inject(stores => ({
  username: stores.LoginStore.username,
  password: stores.LoginStore.password,
  login: stores.LoginStore.login,
}))
class Login extends Component {
  handleOnChange = event => {
    this.props[event.target.name] = event.target.value
  }

  handleOnLogin = event => {
    const { login } = this.props
    if (keycode(event) === 'enter') {
      login()
    }
  }

  navigateToRegister = () => {
    const { history } = this.props
    history.push('/register')
  }

  render() {
    const { t, username, password } = this.props
    return (
      <StyledLogin>
        <Card className="content">
          <TextField
            id={t('username')}
            name="username"
            label={t('username')}
            value={username}
            onChange={this.handleOnChange}
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
            onChange={this.handleOnChange}
            autoComplete={t('password')}
            fullWidth
            onKeyPress={this.handleOnLogin}
          />

          <div className="actions">
            <Button onClick={this.navigateToRegister} variant="outlined">
              {t('register')}
            </Button>
            <Button onClick={this.handleOnLogin} variant="contained" color="primary">
              {t('login')}
            </Button>
          </div>
        </Card>
      </StyledLogin>
    )
  }
}

Login.propTypes = {
  t: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  history: PropTypes.object,
}

Login.defaultProps = {
  history: {},
}

export default withTranslation()(Login)
