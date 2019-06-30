import React from 'react'
import { string, bool, func, object } from 'prop-types'
import { withTranslation } from 'react-i18next'
import keycode from 'keycode'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { observer, inject } from 'mobx-react'
import { ActionBar, Loading, Paper, Text } from 'components'
import AVATARS from 'resources/images/avatars'
import StyledRegistration, { StyledSelect, StyledAvatar } from './styles'
import validation, { isFormValid } from './validation'

const propTypes = {
  history: object,
  forename: string,
  surname: string,
  email: string,
  username: string,
  password: string,
  ConfirmPassword: string,
  avatar: string,
  isLoading: bool,
  setStoreValue: func,
  submit: func,
  isValid: bool,
  t: func.isRequired,
}

const defaultTypes = {
  history: {},
  forename: '',
  surname: '',
  email: '',
  username: '',
  password: '',
  ConfirmPassword: '',
  avatar: 'placeholder',
  isLoading: false,
  isValid: false,
  setStoreValue() {},
  submit() {},
}

@observer
@inject(stores => {
  return {
    forename: stores.RegistrationStore.forename,
    surname: stores.RegistrationStore.surname,
    email: stores.RegistrationStore.email,
    username: stores.RegistrationStore.username,
    password: stores.RegistrationStore.password,
    ConfirmPassword: stores.RegistrationStore.ConfirmPassword,
    avatar: stores.RegistrationStore.avatar,
    isLoading: stores.RegistrationStore.isLoading,
    setStoreValue: stores.RegistrationStore.setStoreValue,
    submit: stores.RegistrationStore.submit,
  }
})
class RegisterPage extends React.Component {
  handleOnSubmit = event => {
    const { submit, history } = this.props
    if (!keycode(event) || keycode(event) === 'enter') {
      submit(() => history.push('/profile'))
    }
  }

  handleOnCancel = () => {
    // TODO: clear store?
    const { history } = this.props
    history.push('/')
  }

  render() {
    const {
      forename,
      surname,
      email,
      username,
      password,
      ConfirmPassword,
      avatar,
      isLoading,
      setStoreValue,
      isValid,
      t,
    } = this.props

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
      <Choose>
        <When condition={isLoading}>
          <Loading />
        </When>
        <Otherwise>
          <StyledRegistration>
            <div className="header">
              <Text color="primary" size="large" weight="bold">
                {APP_NAME}
              </Text>
              <Text color="secondary" size="small" weight="thin">
                {t('register a new account')}
              </Text>
            </div>

            <Paper className="formContainer">
              <StyledSelect
                value={avatar}
                onChange={setStoreValue}
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
              <TextField
                type="text"
                name="forename"
                id="forename"
                label="Forename"
                value={forename}
                onChange={setStoreValue}
                autoComplete="forename"
                // error={validationObj && validationObj.forename.error}
                // helperText={validationObj && validationObj.forename.message}
                fullWidth
              />
              <TextField
                type="text"
                name="surname"
                id="surname"
                label="Surname"
                value={surname}
                onChange={setStoreValue}
                autoComplete="surname"
                // error={validationObj && validationObj.surname.error}
                // helperText={validationObj && validationObj.surname.message}
                fullWidth
              />
              <TextField
                type="text"
                name="username"
                id="username"
                label="Username"
                value={username}
                onChange={setStoreValue}
                autoComplete="username"
                // error={validationObj && validationObj.username.error}
                // helperText={validationObj && validationObj.username.message}
                fullWidth
              />
              <TextField
                type="email"
                name="email"
                id="email"
                label="Email"
                value={email}
                onChange={setStoreValue}
                autoComplete="email"
                // error={validationObj && validationObj.email.error}
                // helperText={validationObj && validationObj.email.message}
                fullWidth
              />
              <TextField
                type="password"
                name="password"
                id="password"
                label="Password"
                value={password}
                onChange={setStoreValue}
                autoComplete="password"
                // error={validationObj && validationObj.password.error}
                // helperText={validationObj && validationObj.password.message}
                fullWidth
              />
              <TextField
                type="password"
                name="ConfirmPassword"
                id="confirm"
                label="Confirm Password"
                value={ConfirmPassword}
                onChange={setStoreValue}
                autoComplete="confirm password"
                fullWidth
              />
            </Paper>
            <ActionBar alignment="right" actions={actions} />
          </StyledRegistration>
        </Otherwise>
      </Choose>
    )
  }
}

RegisterPage.propTypes = propTypes

RegisterPage.defaultProps = defaultTypes

export default withTranslation()(RegisterPage)
