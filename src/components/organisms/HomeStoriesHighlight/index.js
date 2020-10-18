import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'
import IconChevronRight from '@material-ui/icons/ChevronRight'
import Container from '../../atoms/Container'
import CardStoryMinimal from '../../molecules/CardStoryMinimal'
import CardStory from '../../molecules/CardStory'
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
  const theme = useTheme()

  return (
    <StyledGradient>
      <Container>
        <StyledGrid>
          <StyledContainer>
            <StyledPad />
            <div className="overlay">
              <StyledCardContainer>
                <CardStory
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

          <div style={{ width: 160 }} />

          <StyledList>
            {stories.map((story) => (
              <CardStoryMinimal
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
          <a href="/stories">
            Voir tous nos récits
            <IconChevronRight style={{ marginLeft: 8, color: theme.typography.colors.link }} />
          </a>
        </StyledSpan>
      </Container>
    </StyledGradient>
  )
}

export default HomeStoriesHighlight
