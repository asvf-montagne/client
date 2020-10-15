import React from 'react'
import styled from '@emotion/styled'
import Container from '../atoms/container'

const StyledSponsors = styled.div`
  width: 100%;
  background-color: #FFF4F0;
  padding: 64px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const StyledHeading = styled.h1`
  font-size: 2.25rem;
  font-weight: 600;
  color: #001768;
  text-align: center;
  margin: 0;
`

const StyledPLACEHOLDER = styled.h1`
  width: 100%;
  height: 118px;
  background-color: grey;
  margin-top: 92px;
`

function HomeSponsors() {
  return (
    <StyledSponsors>
      <Container>
        <StyledHeading>Nos partenaires</StyledHeading>
        <StyledPLACEHOLDER />
      </Container>
    </StyledSponsors>
  )
}

export default HomeSponsors