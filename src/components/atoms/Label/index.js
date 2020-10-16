import React from 'react'
import StyledLabel from './index.style'

function Label({ children, style, ...props }) {
  return (
    <StyledLabel style={style} {...props}>
      {children}
    </StyledLabel>
  )
}

export default Label
