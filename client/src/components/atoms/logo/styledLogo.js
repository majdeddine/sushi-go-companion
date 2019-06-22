import styled from 'styled-components';

const dimensions = {
  small: '34px',
  medium: '46px',
  large: '68px',
};

const StyledLogo = styled.div`
  height: ${({ size }) => dimensions[size]};
  width: ${({ size }) => dimensions[size]};
`;

export default StyledLogo;
