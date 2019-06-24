import styled from 'styled-components'
import { mapColor } from 'utils/style/helpers'
import { Theme as defaultTheme } from 'resources/styles/theme'

const StyledBurger = styled.div(props => {
  const { color } = props
  const theme = {
    ...defaultTheme,
    ...props.theme,
  }

  return `
    button {
      padding : 0;
    }
    svg {
      color: ${mapColor(theme, color)};
      font-size: 35px;
    }
  `
})

export default StyledBurger
