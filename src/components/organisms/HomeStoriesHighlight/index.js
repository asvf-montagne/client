import React from 'react'
import Container from '../../atoms/Container'
import CardStory from '../../molecules/CardStory'
import CardHighlightStory from '../../molecules/CardStoryHighlight'
import {
  StyledGradient,
  StyledGrid,
  StyledList,
  StyledSpan
} from './index.style'

function HomeStoriesHighlight({ stories, handleRedirection }) {
  return (
    <StyledGradient>
      <Container>
        <StyledGrid>
          <CardHighlightStory
            id={stories[0].id}
            title={stories[0].title}
            image={stories[0].image}
            name={stories[0].name}
            tags={stories[0].tags}
            date={stories[0].date}
            onClick={handleRedirection}
          />

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
                onCLick={handleRedirection}
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
