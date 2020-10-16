import React from 'react'
import PropTypes from 'prop-types'
import Container from '../../atoms/Container'
import { StyledContent, StyledText } from './index.style'

StoryContent.propTypes = {
  content: PropTypes.string.isRequired
}

function StoryContent({ content }) {
  return (
    <StyledContent>
      <Container>
        <StyledText>
          {content}
        </StyledText>
      </Container>
    </StyledContent>
  )
}

export default StoryContent
