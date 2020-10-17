import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Container from '../../atoms/Container'
import Button from '../../atoms/Button'
import { StyledOverlay, StyledContent } from './index.style'

import backgroundMountainAsset from '../../../assets/images/cervin_mountain_c7a2ba29c6.jpg'

HomeIntroduction.propTypes = {
  btnTitle: PropTypes.string.isRequired,
}

function HomeIntroduction({ btnTitle }) {
  const router = useRouter()

  const handleRedirection = () => {
    router.push('/program')
  }

  return (
    <StyledOverlay>
      <img src={backgroundMountainAsset} alt="background-mountain" />
      <div className="overlay">
        <Container>
          <StyledContent>
            <div>
              <span>La montagne en</span>
              <span>Nord-Isère</span>
            </div>

            <Button type="plain-white" size="large" onClick={handleRedirection}>{btnTitle}</Button>
          </StyledContent>
        </Container>
      </div>
    </StyledOverlay>
  )
}

export default HomeIntroduction
