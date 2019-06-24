import styled from 'styled-components'

const StyledHeader = styled.header`
  height: 50px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 16px;
  & > div:last-of-type {
    margin-left: auto;
  }
`

export default StyledHeader
