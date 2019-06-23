import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div``

Wrapper.propTypes = {
  theme: PropTypes.shape({}),
}

Wrapper.defaultProps = {
  theme: {},
}

export default Wrapper
