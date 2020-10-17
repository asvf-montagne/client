import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import {
  StyledCard,
  StyledMeta,
  StyledSpan
} from './index.style'

CardStory.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

function CardStory({ id, title, name, tags, date }) {
  const router = useRouter()

  const handleRedirection = () => {
    router.push(`/stories/${id}`)
  }

  return (
    <StyledCard onClick={handleRedirection}>
      <h1>{title}</h1>
      <StyledMeta>
        <p>{name}</p>
        <StyledSpan>
          <p className="tags">{tags}</p>
          <p className="time">{date}</p>
        </StyledSpan>
      </StyledMeta>
    </StyledCard>
  )
}

export default CardStory
