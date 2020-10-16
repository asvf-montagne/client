import React from 'react'
import StyledLabel from './index.style'

function Label({ children, ...props }) {
  return (
    <StyledLabel {...props}>
      {children}
    </StyledLabel>
  )
}

export default Label
