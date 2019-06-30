import styled from 'styled-components'

const propTypes = {}

const defaultProps = {}

const StyledLogin = styled.div(() => {
  return `
    div:not(:last-of-type) {
      margin-bottom: 12px
    }
  `
})

StyledLogin.propTypes = propTypes

StyledLogin.defaultProps = defaultProps

export default StyledLogin
