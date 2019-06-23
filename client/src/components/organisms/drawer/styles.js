import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import styled from 'styled-components'

const StyledDrawer = styled(SwipeableDrawer)`
  .drawerBody {
    width: 75vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    & > * {
      width: 100%;
    }
  }
  header {
    height: 175px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    img {
      width: 125px;
    }
  }
  main {
    padding: 24px 12px;
    button {
      height: 45px;
      &:not(:first-of-type) {
        margin-top: 12px;
      }
    }
  }
  footer {
    margin-top: auto;
    padding: 12px;
    button {
      height: 45px;
    }
  }
  main,
  footer {
    button {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      svg {
        margin-right: 12px;
      }
    }
  }
`
export default StyledDrawer
