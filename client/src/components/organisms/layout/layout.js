import React from 'react'
import PropTypes from 'prop-types'
import Header from '../header/header'
import Drawer from '../drawer/drawer'
import StyledLayout from './styles'

const propTypes = {
  children: PropTypes.node,
}

const defaultProps = {
  children: <p>Error</p>,
}

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Drawer />
      <section>
        <Header />
        {children}
      </section>
    </StyledLayout>
  )
}

Layout.propTypes = propTypes
Layout.defaultProps = defaultProps

export default Layout
