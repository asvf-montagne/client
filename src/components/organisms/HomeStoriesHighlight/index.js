import React from 'react'
import PropTypes from 'prop-types'
import Container from '../../atoms/Container'
import CardStory from '../../molecules/CardStory'
import CardStoryHighlight from '../../molecules/CardStoryHighlight'
import {
  StyledGradient,
  StyledGrid,
  StyledContainer,
  StyledPad,
  StyledCardContainer,
  StyledList,
  StyledSpan
} from './index.style'

HomeStoriesHighlight.propTypes = {
  stories: PropTypes.array.isRequired,
}

function HomeStoriesHighlight({ stories }) {
  return (
    <StyledGradient>
      <Container>
        <StyledGrid>
          <StyledContainer>
            <StyledPad />
            <div className="overlay">
              <StyledCardContainer>
                <CardStoryHighlight
                  id={stories[0].id}
                  title={stories[0].title}
                  image={stories[0].image}
                  name={stories[0].name}
                  tags={stories[0].tags}
                  date={stories[0].date}
                />
              </StyledCardContainer>
            </div>
          </StyledContainer>

          <div style={{width: 232}} />

          <StyledList>
            {stories.map((story) => (
              <CardStory
                key={story.id}
                id={story.id}
                title={story.title}
                name={story.name}
                tags={story.tags}
                date={story.date}
              />
            ))}
          </StyledList>
        </StyledGrid>

        <StyledSpan>
          <a href="/recits">Voir tous nos récits ></a>
        </StyledSpan>
      </Container>
    </StyledGradient>
  )
}

export default HomeStoriesHighlight
