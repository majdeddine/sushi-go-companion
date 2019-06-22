import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Theme as defaultTheme } from '../../../resources/styles/theme';

const Text = styled.p(props => {
  const { weight, color } = props;
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };
  const mapColor = choice => {
    const colors = {
      light: theme.palette.text.light,
      dark: theme.palette.text.dark,
      primary: theme.palette.primary.main,
      secondary: theme.palette.secondary.main,
      success: theme.palette.success,
      danger: theme.palette.danger,
    };
    return colors[choice];
  };

  return `
    color: ${mapColor(color)}
    font-size: 18px;
    font-weight: ${weight};
    line-height: 1.4;
    margin: 0;
    padding: 0;
  `;
});

Text.propTypes = {
  color: PropTypes.oneOf(['light', 'dark', 'primary', 'secondary', 'success', 'danger']),
  weight: PropTypes.oneOf(['thin', 'medium', 'bold']),
};

Text.defaultProps = {
  color: 'dark',
  weight: 'medium',
};

export default Text;
