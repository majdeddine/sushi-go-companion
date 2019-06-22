import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: <p>Error</p>,
};

const Layout = ({ children }) => {
  return (
    <main>
      <section>
        <Header />
        {children}
      </section>
    </main>
  );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
