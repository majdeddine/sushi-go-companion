import React from 'react'
import PropTypes from 'prop-types'
import Header from '../header/header'
import Drawer from '../drawer/drawer'
import StyledLayout from './styles'

const propTypes = {
  children: PropTypes.node,
  history: PropTypes.object,
}

const defaultProps = {
  children: <p>Error</p>,
  history: {},
}

const Layout = ({ children, history }) => {
  return (
    <StyledLayout>
      <Drawer history={history} />
      <section>
        <Header history={history} />
        {children}
      </section>
    </StyledLayout>
  )
}

Layout.propTypes = propTypes
Layout.defaultProps = defaultProps

export default Layout
