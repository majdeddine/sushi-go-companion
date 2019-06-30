import styled from 'styled-components'
import { pageContainer } from 'utils/style/extends'
import { Theme as defaultTheme } from 'resources/styles/theme'

const StyledLayout = styled.main(props => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  }
  return `
    & > section {
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      & > main {
        ${pageContainer(theme.palette)}
      }
    }

  `
})

export default StyledLayout
