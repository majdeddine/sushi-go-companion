import styled from 'styled-components'

const StyledLayout = styled.main(() => {
  return `
    section {
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 100vh;
      overflow-x: hidden;
      overflow-y: auto;
    }
  `
})

export default StyledLayout
