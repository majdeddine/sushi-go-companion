import React from 'react'
import PropTypes from 'prop-types'
import keycode from 'keycode'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import StyledLogin from './styledLogin'

const Login = () => {
  return (
    <StyledLogin>
              <Card className="content">
          <TextField
            id="username"
            name="username"
            label="Username"
            value={username}
            onChange={this.handleOnChange}
            autoFocus
            fullWidth
            autoComplete="username"
            onKeyPress={event => {
              if (keycode(event) === 'enter') {
                this.handleOnLogin()
              }
            }}
          />
          <TextField
            type="password"
            label="Password"
            name="password"
            id="password"
            value={password}
            onChange={this.handleOnChange}
            autoComplete="password"
            fullWidth
            onKeyPress={event => {
              if (keycode(event) === 'enter') {
                this.handleOnLogin()
              }
            }}
          />
        </Card>
        <div className="actions">
          <Button onClick={this.navigateToRegister} variant="outlined">
            Register
          </Button>
          <Button onClick={() => this.handleOnLogin()} variant="contained" color="primary">
            Login
          </Button>
        </div>
        </Card>
    </StyledLogin>
  )
}

Login.propTypes = {}

Login.defaultProps = {}

export default Login
