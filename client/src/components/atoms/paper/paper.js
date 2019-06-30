import React from 'react'
import { node, string } from 'prop-types'
import StyledPaper from './styles'

const propTypes = {
  children: node.isRequired,
  className: string,
}

const defaultProps = {
  className: '',
}

const Paper = ({ children, className }) => (
  <StyledPaper className={className}>{children}</StyledPaper>
)

Paper.propTypes = propTypes

Paper.defaultProps = defaultProps

export default Paper
