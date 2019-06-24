import React from 'react'
import { node } from 'prop-types'
import StyledPaper from './styles'

const propTypes = {
  children: node.isRequired,
}

const defaultProps = {}

const Paper = ({ children }) => <StyledPaper>{children}</StyledPaper>

Paper.propTypes = propTypes

Paper.defaultProps = defaultProps

export default Paper
