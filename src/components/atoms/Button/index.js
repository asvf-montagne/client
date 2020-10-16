import React from 'react'
import StyledButton from './index.style'

function Button({ onClick, large = false, color, children, style, ...props }) {
  return (
    <StyledButton
      color={color}
      large={large}
      onClick={onClick}
      style={style}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default Button
