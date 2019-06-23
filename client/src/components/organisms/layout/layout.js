import React from 'react'
import PropTypes from 'prop-types'
import Header from '../header/header'
import Drawer from '../drawer/drawer'

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
    <main>
      <Drawer history={history} />
      <section>
        <Header history={history} />
        {children}
      </section>
    </main>
  )
}

Layout.propTypes = propTypes
Layout.defaultProps = defaultProps

export default Layout
