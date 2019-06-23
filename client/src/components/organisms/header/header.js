import React from 'react'
import { Logo, Text, Burger } from 'atoms'
import StyledHeader from './styledHeader'

const Header = () => {
  return (
    <StyledHeader>
      <Logo variant="white" size="small" />
      <Text color="light" weight="bold">
        Sushi Go!
      </Text>
      <Burger />
    </StyledHeader>
  )
}

export default Header
