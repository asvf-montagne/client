import React from 'react'
import PropTypes from 'prop-types'
import Container from '../../atoms/Container'
import CardStoryHighlight from '../../molecules/CardStory'
import { StyledSuggested, StyledRow } from './index.style'

StorySuggestion.propTypes = {
  stories: PropTypes.array.isRequired
}

function StorySuggestion({ stories }) {
  return (
    <StyledSuggested>
      <Container>
        <h1>Continuer de lire ...</h1>
        <StyledRow>
          {stories.slice(0, 2).map((story) => (
            <CardStoryHighlight
              shadow
              key={story.id}
              id={story.id}
              title={story.title}
              image={story.images[0].src}
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

export default StorySuggestion
