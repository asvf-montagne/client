import React from 'react'
import PropTypes from 'prop-types'
import { StyledGrid } from './index.style'
import Container from '../../atoms/Container'
import CardStory from '../../molecules/CardStory'

SearchGrid.propTypes = {
  stories: PropTypes.array.isRequired
}

function SearchGrid({ stories }) {
  return (
    <Container>
      <StyledGrid>
        {stories.map((story) => (
          <CardStory
            shadow
            border
            key={story.id}
            id={story.id}
            title={story.title}
            image={story.images[0].src}
            preview={story.preview}
            name={story.name}
            tags={story.tags}
            date={story.date}
          />
        ))}
      </StyledGrid>
    </Container>
  )
}

export default SearchGrid
