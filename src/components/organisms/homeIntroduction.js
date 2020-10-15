import React from 'react'
import styled from '@emotion/styled'
import Container from '../atoms/container'
import backgroundAsset from '../../assets/images/cervin_mountain_c7a2ba29c6.jpg'

const StyledOverlay = styled.div`
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

const StyledCTA = styled.div`
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

const StyledButton = styled.button`
  padding: 11px 16px;
  border-radius: 3px;
  background-color: #FFFFFF;
  border: none;
  color: #001768;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;

  :focus {
    outline: none;
    border-color: #FFFFFF;
    box-shadow: 0 0 0 0.2rem rgba(255,255,255,.5);
  }
`

function HomeIntroduction({ btnTitle, onClick }) {
  return (
    <StyledOverlay>
      <img src={backgroundAsset} alt="Avatar" className="image" />
      <div className="overlay">
        <Container>
          <StyledCTA>
            <div>
              <span>La montagne en</span>
              <span>Nord-Isère</span>
            </div>
            <StyledButton onClick={onClick}>{btnTitle}</StyledButton>
          </StyledCTA>
        </Container>
      </div>
    </StyledOverlay>
  )
}

export default HomeIntroduction
