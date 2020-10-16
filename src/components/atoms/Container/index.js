import React from 'react'
import StyledContainer from './index.style'

function Container({ children, ...props }) {
  return (
    <StyledContainer {...props}>
      {children}
    </StyledContainer>
  )
}

export default Container
