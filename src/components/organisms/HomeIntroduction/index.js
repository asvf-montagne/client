import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Container from '../../atoms/Container'
import Button from '../../atoms/Button'
import { StyledOverlay, StyledCTA } from './index.style'

import backgroundMountainAsset from '../../../assets/images/cervin_mountain_c7a2ba29c6.jpg'

HomeIntroduction.propTypes = {
  btnTitle: PropTypes.string.isRequired,
}

function HomeIntroduction({ btnTitle }) {
  const router = useRouter()

  const handleRedirection = () => {
    router.push('/programmes')
  }

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
            <Button large onClick={handleRedirection}>{btnTitle}</Button>
          </StyledCTA>
        </Container>
      </div>
    </StyledOverlay>
  )
}

export default HomeIntroduction
