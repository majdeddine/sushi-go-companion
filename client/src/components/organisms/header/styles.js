import styled from 'styled-components'

const StyledHeader = styled.header`
  height: 50px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 16px;
  & > div:first-of-type {
    margin-right: 16px;
  }
`

export default StyledHeader
