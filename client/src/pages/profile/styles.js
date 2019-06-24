import PropTypes from 'prop-types'
import styled from 'styled-components'
import { pageContainer } from 'utils/style/extends'

const Wrapper = styled.div(() => {
  return `
    ${pageContainer()}
  `
})

Wrapper.propTypes = {
  theme: PropTypes.shape({}),
}

Wrapper.defaultProps = {
  theme: {},
}

export default Wrapper
