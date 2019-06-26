import styled from 'styled-components'

const dimensions = {
  small: '44px',
  medium: '68px',
  large: '128px',
}

const StyledLogo = styled.div`
  height: ${({ size }) => dimensions[size]};
  width: ${({ size }) => dimensions[size]};
`

export default StyledLogo
