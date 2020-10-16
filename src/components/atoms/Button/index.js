import React from 'react'
import PropTypes from 'prop-types'
import StyledButton from './index.style'

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(['blue', 'white']),
  large: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
}

function Button({ onClick, color, large = false, children, style, ...props }) {
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
