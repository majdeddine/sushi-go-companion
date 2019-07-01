/* eslint-disable react/prop-types */
import React from 'react'
import { validateToken } from 'utils/auth'
import History from '../history'

const WithAuth = WrappedComponent => props => {
  if (validateToken()) {
    return <WrappedComponent {...props} />
  }

  History.push('/login')

  return <div />
}

export default WithAuth
