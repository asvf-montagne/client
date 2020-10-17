import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import {
  StyledCard,
  StyledImage,
  StyledContent,
  StyledMeta,
} from './index.style'

CardStoryHighlight.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  shadow: PropTypes.bool,
  style: PropTypes.object,
}

function CardStoryHighlight({
  id,
  title,
  image,
  name,
  tags,
  date,
  shadow,
  style,
  ...props
}) {
  const router = useRouter()

  const handleRedirection = () => {
    router.push(`/stories/${id}`)
  }

  return (
    <StyledCard shadow={shadow} onClick={handleRedirection} style={style} {...props}>
      <StyledImage src={image} />
      <StyledContent>
        <p className="tags">{tags}</p>
        <h1>{title}</h1>
        <StyledMeta>
          <p className="name">{name}</p>
          <p className="time">{date}</p>
        </StyledMeta>
      </StyledContent>
    </StyledCard>
  )
}

export default CardStoryHighlight
