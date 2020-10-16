import React from 'react'
import PropTypes from 'prop-types'
import StyledContainer from './index.style'

Container.propTypes = {
  children: PropTypes.node.isRequired
}

function Container({ children, ...props }) {
  return (
    <StyledContainer {...props}>
      {children}
    </StyledContainer>
  )
}

export default Container
