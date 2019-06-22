import styled from "styled-components";

const StyledHeader = styled.header`
  height: 50px;
  background-color: ${({ theme }) => theme.palette.grey.medium};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledHeader;
