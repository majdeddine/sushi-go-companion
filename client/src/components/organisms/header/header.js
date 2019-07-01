import React from 'react'
import { Logo, Text } from 'atoms'
import StyledHeader from './styles'

const { APP_NAME } = process.env

const Header = () => {
  return (
    <StyledHeader>
      <Logo variant="white" size="small" />
      <Text color="light" weight="bold">
        {APP_NAME}
      </Text>
      {/* <Burger color="light" /> */}
    </StyledHeader>
  )
}

export default Header
