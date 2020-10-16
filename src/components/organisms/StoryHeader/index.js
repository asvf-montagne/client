import React from 'react'
import PropTypes from 'prop-types'
import Container from '../../atoms/Container'
import {
  StyledOverlayBox,
  StyledBackground,
  StyledOverlay,
  StyledHead,
  StyledImage,
  StyledCaption,
} from './index.style'

StoryHeader.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
}

function StoryHeader({
  title,
  image,
  name,
  tags,
  date,
  caption,
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
            <StyledImage src={image} />
            <StyledCaption>{caption}</StyledCaption>
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
