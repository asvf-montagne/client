import React from 'react'
import PropTypes from 'prop-types'
import Container from '../../atoms/Container'
import Button from '../../atoms/Button'
import { StyledOverlay, StyledCTA } from './index.style'

import backgroundMountainAsset from '../../../assets/images/cervin_mountain_c7a2ba29c6.jpg'

HomeIntroduction.propTypes = {
  btnTitle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

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
            <Button large onClick={onClick}>{btnTitle}</Button>
          </StyledCTA>
        </Container>
      </div>
    </StyledOverlay>
  )
}

export default HomeIntroduction
