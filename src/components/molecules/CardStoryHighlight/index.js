import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledContainer,
  StyledPad,
  StyledCard,
  StyledImage,
  StyledContent,
  StyledTags,
  StyledTitle,
  StyledMeta,
  StyledDate
} from './index.style'

CardStoryHighlight.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

function CardStoryHighlight({ id, title, image, name, tags, date, onClick }) {
  return (
    <StyledContainer>
      <StyledPad />
      <div className="overlay">
        <StyledCard onClick={() => onClick(id)}>
          <StyledImage src={image} />
          <StyledContent>
            <StyledTags>{tags}</StyledTags>
            <StyledTitle>{title}</StyledTitle>
            <StyledMeta>
              <h2>{name}</h2>
              <StyledDate>{date}</StyledDate>
            </StyledMeta>
          </StyledContent>
        </StyledCard>
      </div>
    </StyledContainer>
  )
}

export default CardStoryHighlight
