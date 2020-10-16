import React from 'react'
import Container from '../../atoms/Container'
import { StyledOverlay, StyledCTA, StyledButton } from './index.style'

import backgroundMountainAsset from '../../../assets/images/cervin_mountain_c7a2ba29c6.jpg'

function HomeIntroduction({ btnTitle, onClick }) {
  return (
    <StyledOverlay>
      <img src={backgroundMountainAsset} alt="Avatar" className="image" />
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
