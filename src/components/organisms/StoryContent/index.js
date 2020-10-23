import React from 'react'
import PropTypes from 'prop-types'
import EditorRendererProvider from 'react-editorjs-renderer'
import Container from '../../atoms/Container'
import { StyledContent } from './index.style'

StoryContent.propTypes = {
  data: PropTypes.object.isRequired
}

function StoryContent({ data }) {
  return (
    <StyledContent>
      <Container>
        <EditorRendererProvider data={data} style={{ disable: true }} />
      </Container>
    </StyledContent>
  )
}

export default StoryContent
