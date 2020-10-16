import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import {
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
        <StyledTags>{tags}</StyledTags>
        <StyledTitle>{title}</StyledTitle>
        <StyledMeta>
          <h2>{name}</h2>
          <StyledDate>{date}</StyledDate>
        </StyledMeta>
      </StyledContent>
    </StyledCard>
  )
}

export default CardStoryHighlight
