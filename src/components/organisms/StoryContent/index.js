import React from 'react'
import PropTypes from 'prop-types'
import EditorRendererProvider from 'react-editorjs-renderer'
import Container from '../../atoms/Container'
import { StyledContent, StyledContentInner } from './index.style'

StoryContent.propTypes = {
  data: PropTypes.object.isRequired
}

function StoryContent({ data }) {
  return (
    <StyledContent>
      <Container>
        <StyledContentInner>
          <EditorRendererProvider data={data} style={{ disable: true }} />
        </StyledContentInner>
      </Container>
    </StyledContent>
  )
}

export default StoryContent
