import styled from '@emotion/styled'

export const StyledOverlay = styled.div`
  width: 100%;
  position: relative;
  
  img {
    height: 100%;
    width: 100%;
  }

  .overlay {
    position: absolute;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    top: 0px;
    right: 0px;
    left: 0px;
    overflow: hidden;
  }
`

export const StyledCTA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 44px;

    span {
      font-weight: 700;
      color: #FFFFFF;
    }
  
    span:nth-of-type(1) { 
      font-size: 2.25rem;
    }
  
    span:nth-of-type(2) { 
      font-size: 3.5625rem;
    }
  }
`
