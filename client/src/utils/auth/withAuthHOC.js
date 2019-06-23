/* eslint-disable react/prop-types */
import React from 'react'
import { validateToken } from 'utils/auth'

const WithAuth = WrappedComponent => props => {
  if (validateToken()) {
    return <WrappedComponent {...props} />
  }
  const { history } = props

  history.push('/login')

  return <div />
}

export default WithAuth
