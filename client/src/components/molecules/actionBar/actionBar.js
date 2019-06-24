import React from 'react'
import { arrayOf, shape, func, string, bool } from 'prop-types'
import Button from '@material-ui/core/Button'
import StyledActionBar from './styles'

const propTypes = {
  actions: arrayOf(
    shape({
      text: string,
      action: func,
      disabled: bool,
      color: string,
      variant: string,
    }),
  ),
  alignment: string,
}

const defaultProps = {
  actions: [],
  alignment: 'right',
}

const ActionBar = ({ actions, alignment }) => {
  return (
    <StyledActionBar alignment={alignment}>
      {actions.map(button => {
        const { text, action, disabled, color, variant } = button
        return (
          <Button
            key={`${text}_${color}`}
            onClick={action}
            variant={variant}
            color={color}
            disabled={disabled}
          >
            {text}
          </Button>
        )
      })}
    </StyledActionBar>
  )
}

ActionBar.propTypes = propTypes

ActionBar.defaultProps = defaultProps

export default ActionBar
