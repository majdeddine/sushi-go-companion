import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withTranslation } from 'react-i18next'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
// import { Auth } from 'utils'
// import { AuthQueries } from 'gql'
// import { getErrorField } from 'utils/errors'
import { ActionBar, Text, Paper } from 'components'
import AVATARS from 'resources/images/avatars'
import StyledRegistration from './styles'
import validation, { isFormValid } from './validation'

const StyledSelect = styled(Select)`
  &:before,
  &:after {
    display: none;
  }
  & > div:first-of-type {
    & > div:first-of-type {
      padding: 0;
    }
  }
  .avatarMenu {
    width: 50px;
    minheight: 50px;
  }
`

const StyledAvatar = styled.img`
  width: 50px;
  img {
    width: 50px;
  }
`

class RegisterPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tempUser: {
        forename: '',
        surname: '',
        username: '',
        password: '',
        confirm: '',
        email: '',
        avatar: 'placeholder',
      },
      validationObj: undefined,
    }
  }

  handleOnError = (newValidation, error) => {
    const newObj = {
      ...newValidation,
      // [getErrorField(error.message)]: {
      //   error: true,
      //   message: 'Email adress already in use',
      // },
    }
    this.setState({
      validationObj: newObj,
    })
  }

  handleOnSubmit = () => {
    const { tempUser, validationObj } = this.state
    const { history } = this.props
    const { confirm, ...newUser } = tempUser
    const newValidation = validation(tempUser, validationObj)

    if (isFormValid(newValidation)) {
      // AuthQueries.register(newUser)
      //   .catch(err => console.error(err))
      //   .then(response => Auth.handleRegistration(response, history))
    } else {
      this.setState({ validationObj: newValidation })
    }
  }

  handleOnCancel = () => {
    const { history } = this.props
    this.setState({
      tempUser: {
        forename: '',
        surname: '',
        username: '',
        password: '',
        confirm: '',
        email: '',
        avatar: 'placeholder',
      },
      validationObj: undefined,
    })
    history.push('/')
  }

  handleOnChange = event => {
    const { tempUser } = this.state
    const user = tempUser
    user[event.target.name] = event.target.value
    this.setState({ tempUser: user })
  }

  render() {
    const {
      tempUser: { forename, surname, username, password, confirm, email, avatar },
    } = this.state

    const { t, isValid = false } = this.props
    const { validationObj } = this.state
    const { APP_NAME } = process.env

    const actions = [
      {
        text: t('cancel'),
        action: this.handleOnCancel,
        disabled: false,
        color: 'primary',
        variant: 'outlined',
      },
      {
        text: t('register'),
        action: this.handleOnSubmit,
        disabled: !isValid,
        color: 'primary',
        variant: 'contained',
      },
    ]
    return (
      <StyledRegistration>
        <div className="header">
          <Text color="primary" size="large" weight="bold">
            {APP_NAME}
          </Text>
          <Text color="secondary" size="small" weight="thin">
            {t('Register a new account')}
          </Text>
        </div>

        <Paper className="content">
          <TextField
            type="text"
            name="forename"
            id="forename"
            label="Forename"
            value={forename}
            onChange={this.handleOnChange}
            autoComplete="forename"
            error={validationObj && validationObj.forename.error}
            helperText={validationObj && validationObj.forename.message}
            fullWidth
          />
          <TextField
            type="text"
            name="surname"
            id="surname"
            label="Surname"
            value={surname}
            onChange={this.handleOnChange}
            autoComplete="surname"
            error={validationObj && validationObj.surname.error}
            helperText={validationObj && validationObj.surname.message}
            fullWidth
          />
          <div className="avatar">
            <StyledSelect
              value={avatar}
              onChange={this.handleOnChange}
              inputProps={{
                name: 'avatar',
                id: 'avatar',
              }}
              classes={{
                selectMenu: 'avatarMenu',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {AVATARS.map(avatarObject => (
                <MenuItem key={avatarObject.name} value={avatarObject.name}>
                  <StyledAvatar
                    src={avatarObject.image}
                    alt={avatarObject.name}
                    className="avatar-image"
                  />
                </MenuItem>
              ))}
            </StyledSelect>
          </div>
          <TextField
            type="text"
            name="username"
            id="username"
            label="Username"
            value={username}
            onChange={this.handleOnChange}
            autoComplete="username"
            error={validationObj && validationObj.username.error}
            helperText={validationObj && validationObj.username.message}
            fullWidth
          />
          <TextField
            type="email"
            name="email"
            id="email"
            label="Email"
            value={email}
            onChange={this.handleOnChange}
            autoComplete="email"
            error={validationObj && validationObj.email.error}
            helperText={validationObj && validationObj.email.message}
            fullWidth
          />
          <TextField
            type="password"
            name="password"
            id="password"
            label="Password"
            value={password}
            onChange={this.handleOnChange}
            autoComplete="password"
            error={validationObj && validationObj.password.error}
            helperText={validationObj && validationObj.password.message}
            fullWidth
          />
          <TextField
            type="password"
            name="confirm"
            id="confirm"
            label="Confirm Password"
            value={confirm}
            onChange={this.handleOnChange}
            autoComplete="confirm password"
            fullWidth
          />
        </Paper>
        <ActionBar alignment="right" actions={actions} />
        {/* <div className="actions">
          <Button onClick={this.handleOnCancel} variant="outlined">
            Cancel
          </Button>
          <Button onClick={this.handleOnSubmit} color="primary" variant="contained">
            Register
          </Button>
        </div> */}
      </StyledRegistration>
    )
  }
}

RegisterPage.propTypes = {
  history: PropTypes.shape({}),
  classes: PropTypes.shape({}),
}

RegisterPage.defaultProps = {
  classes: {},
  history: {},
}

export default withTranslation()(RegisterPage)
