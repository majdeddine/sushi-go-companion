import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Theme as defaultTheme } from '../../../resources/styles/theme'

const Text = styled.p(props => {
  const { weight, color, size } = props
  const theme = {
    ...defaultTheme,
    ...props.theme,
  }
  const mapColor = choice => {
    const colors = {
      light: theme.palette.text.light,
      dark: theme.palette.text.dark,
      primary: theme.palette.primary.main,
      secondary: theme.palette.secondary.main,
      success: theme.palette.success,
      danger: theme.palette.danger,
    }
    return colors[choice]
  }
  const mapSize = choice => {
    const sizes = {
      'x-small': '0.75rem',
      small: '1rem',
      medium: '1.25rem',
      large: '2rem',
      'x-large': '2.75rem',
    }
    return sizes[choice]
  }

  return `
    color: ${mapColor(color)};
    font-size: ${mapSize(size)};
    font-weight: ${weight};
    line-height: 1.4;
    margin: 0;
    padding: 0;
  `
})

Text.propTypes = {
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large', 'x-large']),
  color: PropTypes.oneOf(['light', 'dark', 'primary', 'secondary', 'success', 'danger']),
  weight: PropTypes.oneOf(['thin', 'normal', 'bold']),
}

Text.defaultProps = {
  size: 'medium',
  color: 'dark',
  weight: 'normal',
}

export default Text
