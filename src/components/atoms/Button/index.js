import React from 'react'
import PropTypes from 'prop-types'
import StyledButton from './index.style'

Button.propTypes = {
  type: PropTypes.oneOf(['plain-blue', 'plain-white', 'minimalist']).isRequired,
  size: PropTypes.oneOf(['medium', 'large']),
  border: PropTypes.bool,
  fluid: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

function Button({ onClick, border, size = 'medium', type, fluid = false, children, ...props }) {
  return (
    <StyledButton
      size={size}
      type={type}
      fluid={fluid}
      border={border}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default Button
