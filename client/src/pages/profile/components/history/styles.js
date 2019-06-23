import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten } from 'polished'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 8px;
  background-color: ${({ theme }) => theme.white};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  .col1 {
    width: 100px;
  }
  .col2 {
    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 1.125rem;
      font-weight: 400;
    }
    p {
      font-size: 0.9rem;
    }
  }
`

Wrapper.propTypes = {
  theme: PropTypes.shape({}),
}

Wrapper.defaultProps = {
  theme: {},
}

export default Wrapper
