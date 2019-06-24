import React from 'react'
import { Logo, Burger } from 'atoms'
import StyledHeader from './styles'

const Header = () => {
  return (
    <StyledHeader>
      <Logo variant="white" size="small" />
      <Burger color="light" />
    </StyledHeader>
  )
}

export default Header
