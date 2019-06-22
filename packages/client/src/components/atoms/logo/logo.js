import React from 'react';
import { oneOf } from 'prop-types';
import SGLogo from 'resources/images/logo.png';
import StyledLogo from './styledLogo';

const logos = [{ variant: 'white', logo: SGLogo }];

const getLogoByVariant = variant => logos.find(logo => logo.variant === variant);

const Logo = ({ variant, size }) => (
  <StyledLogo size={size}>
    <img src={getLogoByVariant(variant).logo} alt="GDM Logo" />
  </StyledLogo>
);

Logo.propTypes = {
  size: oneOf(['small', 'medium', 'large']),
  variant: oneOf(['white']),
};

Logo.defaultProps = {
  size: 'small',
  variant: 'white',
};

export default Logo;
