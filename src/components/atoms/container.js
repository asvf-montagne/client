import React from 'react'
import styled from '@emotion/styled'

const StyledContainer = styled.div`
  width: 100%;
  padding: 0;
  margin: 0 auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1040px;
  }
`

function Container({ children, ...props }) {
  return (
    <StyledContainer {...props}>
      {children}
    </StyledContainer>
  )
}

export default Container