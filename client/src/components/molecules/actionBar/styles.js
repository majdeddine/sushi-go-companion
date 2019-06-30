import styled from 'styled-components'
import { string } from 'prop-types'
import { alignmentMapper } from './helper'

const propTypes = {
  alignment: string,
}

const defaultProps = {
  alignment: 'right',
}

const styles = styled.div(props => {
  const { alignment } = props
  return `
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${alignmentMapper(alignment)};
    padding: 4px 0;
    margin: 6px 0;
    button {
      margin: 0 6px;
    }

    ${alignment === 'right' &&
      `
      button {
        &:last-of-type {
          margin-right: 0;
        }
      } 
    `}

    ${alignment === 'left' &&
      `
    button {
      &:first-of-type {
        margin-left: 0;
      }
    } 
  `}
  `
})

styles.propTypes = propTypes

styles.defaultProps = defaultProps

export default styles
