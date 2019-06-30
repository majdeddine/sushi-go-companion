import styled from 'styled-components'
import { shape } from 'prop-types'
import { pageContainer } from 'utils/style/extends'

const propTypes = {
  theme: shape({}),
}

const defaultProps = {
  theme: {},
}

const StyledProfile = styled.div(props => {
  const { theme } = props
  return `
    
  `
})

StyledProfile.propTypes = propTypes

StyledProfile.defaultProps = defaultProps

export default StyledProfile
