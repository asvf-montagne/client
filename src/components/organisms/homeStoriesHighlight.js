import React from 'react'
import styled from '@emotion/styled'
import Container from '../atoms/container'
import CardStory from '../molecules/cardStory'
import CardHighlightStory from '../molecules/cardStoryHighlight'

const StyledGradient = styled.div`
  flex: 1;
  margin-top: -4px;
  padding: 74px 0 126px 0;
  background: rgb(255,244,240);
  background: linear-gradient(180deg, rgba(255,244,240,1) 0%, rgba(255,255,255,0) 100%);
`

const StyledGrid = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 34px;
`

const StyledList = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const StyledSpan = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  
  a {
    text-decoration: none;
    color: #0C75FF;
    font-size: 1.0625rem;
    font-weight: 500;
  }
`

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
