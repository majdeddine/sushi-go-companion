import React from 'react';
import { Logo } from 'atoms';
import StyledHeader from './styledHeader';

const Header = () => {
  return (
    <StyledHeader>
      <Logo variant="white" size="small" />
    </StyledHeader>
  );
};

export default Header;
