import styled from 'styled-components'

const StyledRegistration = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  width: 100%;
  height: 100%;
  .header {
    width: 100%;
    height: 100px;
    padding: 0 12px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 75px;
      margin-right: 12px;
    }
    h1 {
      font-family: ${({ theme }) => theme.fontHeading};
      color: ${({ theme }) => theme.font.light};
      font-size: 8vw;
      line-height: 1;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
  .content {
    width: 90%;
    margin: 12px 0;
    padding: 16px 22px 32px;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    & > div:first-of-type,
    & > div:nth-of-type(2) {
      width: 49%;
    }
    & > div:nth-of-type(4) {
      flex: 1;
    }
    & > div:not(:nth-of-type(1)),
    & > div:not(:nth-of-type(2)) {
      margin-top: 24px;
    }
    .avatar {
      margin-right: 14px;
      & > div {
        cursor: pointer;
      }
      .avatar-image {
        width: 50px;
      }
      input[name='avatar'] + svg {
        display: none;
      }
    }
  }
  .actions {
    width: 100%;
    display: flex;
    padding: 12px;
    button {
      width: 47.5%;
      height: 45px;
      &:first-of-type {
        background-color: ${({ theme }) => theme.white};
      }
      &:not(:first-of-type) {
        margin-left: 5%;
      }
    }
  }
`

export default StyledRegistration
