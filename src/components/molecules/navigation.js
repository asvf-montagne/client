import React from 'react'
import styled from '@emotion/styled'
import Container from '../atoms/container'

const StyledNavigation = styled.nav`
  height: 94px;
  background-color: #02044A;
  display: flex;
  flex-direction: row;
  align-items: center;
`

function Navigation() {
  return (
    <StyledNavigation>
      <Container>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/le-club">Le Club</a>
          </li>
          <li>
            <a href="/recits">Récits</a>
          </li>
          <li>
            <a href="/programmes">Programmes</a>
          </li>
          <li>
            <a href="/galerie">Galerie</a>
          </li>
        </ul>
      </Container>
    </StyledNavigation>
  )
}

export default Navigation