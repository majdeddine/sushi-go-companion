import styled from 'styled-components'
import { object } from 'prop-types'
import { Theme as defaultTheme } from 'resources/styles/theme'

const propTypes = {
  theme: object,
}

const defaultProps = {
  theme: {},
}

const styles = styled.div(props => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  }

  return `
    border-left: 3px solid ${theme.palette.secondary.main};
    border-right: 3px solid ${theme.palette.secondary.main};
    border-bottom: 1px dashed ${theme.palette.secondary.main};
    height: 50px;
    display: flex;
    justify-content: space-around;
  
    button {
      font-size: 0.70rem;
      svg {
        font-size: 1.5rem;
        margin-right: 2px;
      }
    }
  `
})

styles.propTypes = propTypes

styles.defaultProps = defaultProps

export default styles
