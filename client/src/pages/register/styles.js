import styled from 'styled-components'
import Select from '@material-ui/core/Select'

const StyledRegistration = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
  flex: 1;
  width: 100%;
  .header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-bottom: 12px;
  }
  .formContainer {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-around;
  }
`

export const StyledSelect = styled(Select)`
  width: 80px;
  &:before,
  &:after {
    display: none;
  }
  & > div:first-of-type {
    & > div:first-of-type {
      padding: 0;
    }
  }
  .avatarMenu {
    width: 50px;
    minheight: 50px;
  }
`

export const StyledAvatar = styled.img`
  width: 50px;
  img {
    width: 50px;
  }
`

export default StyledRegistration
