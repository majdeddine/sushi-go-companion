import PropTypes from 'prop-types'
import styled from 'styled-components'
import { pageContainer } from 'resources/styles/helpers'

const Wrapper = styled.div`
  ${({ theme }) => pageContainer(theme)}
`

Wrapper.propTypes = {
  theme: PropTypes.shape({}),
}

Wrapper.defaultProps = {
  theme: {},
}

export default Wrapper
