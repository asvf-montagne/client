import React from 'react'
import PropTypes from 'prop-types'
import Container from '../../atoms/Container'
import Carousel from '../../atoms/Carousel'
import {
  StyledOverlayBox,
  StyledBackground,
  StyledOverlay,
  StyledHead,
  StyledImage,
} from './index.style'

StoryHeader.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

function StoryHeader({
  title,
  images,
  name,
  tags,
  date,
}) {
  return (
    <StyledOverlayBox>
      <Container>
        <StyledOverlay>
          <StyledHead>
            <p className="tags">{tags}</p>
            <h1>{title}</h1>
            <p className="name">{name}</p>
            <p className="time">{date}</p>

            <Carousel>
              {images.map(({ src, caption }, index) => {
                return (
                  <StyledImage key={index}>
                    <img src={src} />
                    <p>{caption}</p>
                  </StyledImage>
                )
              })}
            </Carousel>

          </StyledHead>
        </StyledOverlay>
      </Container>

      <div className="underlay">
        <StyledBackground>
          <div className="light" />
          <div className="dark" />
        </StyledBackground>
      </div>
    </StyledOverlayBox>
  )
}

export default StoryHeader
