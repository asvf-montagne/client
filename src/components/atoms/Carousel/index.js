import React from 'react'
import PropTypes from 'prop-types'
import { Carousel as CarouselProvider } from 'react-responsive-carousel'
import { StyledCarouselBox, StyledArrow } from './index.style'

Carousel.propTypes = {
  children: PropTypes.node.isRequired
}

function Carousel({ children, ...props }) {
  const arrowPrev = (onClickHandler, hasPrev, label) => hasPrev && (
    <StyledArrow onClick={onClickHandler} title={label} left>
      -
    </StyledArrow>
  )

  const arrowNext = (onClickHandler, hasPrev, label) => hasPrev && (
    <StyledArrow onClick={onClickHandler} title={label} right>
      +
    </StyledArrow>
  )

  return (
    <StyledCarouselBox>
      <CarouselProvider
        renderArrowPrev={arrowPrev}
        renderArrowNext={arrowNext}
      >
        {children}
      </CarouselProvider>
    </StyledCarouselBox>
  )
}

export default Carousel
