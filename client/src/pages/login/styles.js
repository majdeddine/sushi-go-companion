import styled from 'styled-components'
import { shape } from 'prop-types'
import { pageContainer } from 'utils/style/extends'

const propTypes = {
  theme: shape({}),
}

const defaultProps = {
  theme: {},
}

const StyledLogin = styled.div(props => {
  const { theme } = props
  return `
    ${pageContainer(theme.palette)}
    div:not(:last-of-type) {
      margin-bottom: 12px
    }
  `
})

StyledLogin.propTypes = propTypes

StyledLogin.defaultProps = defaultProps

export default StyledLogin
