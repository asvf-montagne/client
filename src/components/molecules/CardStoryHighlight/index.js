import React from 'react'
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
