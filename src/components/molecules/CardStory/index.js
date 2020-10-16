import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledCard,
  StyledTitle,
  StyledMeta,
  StyledTags,
  StyledDate
} from './index.style'

CardStory.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onCLick: PropTypes.func.isRequired
}

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
