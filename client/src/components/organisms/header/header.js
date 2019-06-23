import React from 'react'
import { Logo, Text } from 'atoms'
import StyledHeader from './styledHeader'

const Header = () => {
  return (
    <StyledHeader>
      <Logo variant="white" size="small" />
      <Text color="light">Sushi Go!</Text>
    </StyledHeader>
  )
}

export default Header
