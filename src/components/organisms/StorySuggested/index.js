import React from 'react'
import PropTypes from 'prop-types'
import Container from '../../atoms/Container'
import CardStory from '../../molecules/CardStory'
import {StyledCardContainer, StyledRow, StyledSuggested, StyledTitle} from './index.style'

StorySuggestion.propTypes = {
  stories: PropTypes.array.isRequired
}

function StorySuggestion({stories}) {
  return (
    <StyledSuggested>
      <Container>
        <StyledTitle>Continuer de lire ...</StyledTitle>
        <StyledRow>
          {stories.slice(0, 2).map((story) => (
            <StyledCardContainer>
              <CardStory
                shadow
                key={story.id}
                id={story.id}
                title={story.title}
                image={story.images[0].src}
                name={story.name}
                tags={story.tags}
                date={story.date}
              />
            </StyledCardContainer>
          ))}
        </StyledRow>
      </Container>
    </StyledSuggested>
  )
}

export default StorySuggestion
