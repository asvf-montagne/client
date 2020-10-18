import React from 'react'
import PropTypes from 'prop-types'
import StyledContainer from './index.style'

Container.propTypes = {
  small: PropTypes.bool,
  children: PropTypes.node.isRequired
}

function Container({ small = false, children, ...props }) {
  return (
    <StyledContainer small={small} {...props}>
      {children}
    </StyledContainer>
  )
}

export default Container
