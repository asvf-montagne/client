import React from 'react'
import {
  StyledCard,
  StyledTitle,
  StyledMeta,
  StyledTags,
  StyledDate
} from './index.style'

function CardStory({ id, title, name, tags, date, onCLick }) {
  return (
    <StyledCard onClick={() => onCLick(id)}>
      <StyledTitle>{title}</StyledTitle>
      <StyledMeta>
        <h2>{name}</h2>
        <div>
          <StyledTags>{tags}</StyledTags>
          <StyledDate>{date}</StyledDate>
        </div>
      </StyledMeta>
    </StyledCard>
  )
}

export default CardStory
