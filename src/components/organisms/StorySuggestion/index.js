import React from 'react'
import PropTypes from 'prop-types'
import Container from '../../atoms/Container'
import CardStoryHighlight from '../../molecules/CardStoryHighlight'
import { StyledSuggested, StyledRow, StyledHeading } from './index.style'

StorySuggested.propTypes = {
  stories: PropTypes.string.isRequired
}

function StorySuggested({ stories }) {
  return (
    <StyledSuggested>
      <Container>
        <StyledHeading>Continuer de lire ...</StyledHeading>
        <StyledRow>
          {stories.slice(0, 2).map((story) => (
            <CardStoryHighlight
              shadow
              id={story.id}
              title={story.title}
              image={story.image}
              name={story.name}
              tags={story.tags}
              date={story.date}
            />
          ))}
        </StyledRow>
      </Container>
    </StyledSuggested>
  )
}

export default StorySuggested
