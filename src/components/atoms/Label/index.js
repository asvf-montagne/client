import React from 'react'
import PropTypes from 'prop-types'
import StyledLabel from './index.style'

Label.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired
}

function Label({ children, style, ...props }) {
  return (
    <StyledLabel style={style} {...props}>
      {children}
    </StyledLabel>
  )
}

export default Label
