import React from 'react'
import { useRouter } from 'next/router'
import Container from '../../atoms/Container'
import {
  StyledNavigation,
  StyledList,
  StyledGroup,
  StyledLogo,
  StyledButton
} from './index.style'

function Navigation() {
  const router = useRouter()

  const handleRedirection = () => {
    router.push('/login')
  }

  return (
    <StyledNavigation>
      <Container>
        <StyledList>
          <StyledLogo href="/">ASVF Montagne</StyledLogo>
          <StyledGroup>
            <a href="/le-club">Le Club</a>
            <a href="/recits">Récits</a>
            <a href="/programmes">Programmes</a>
            <a href="/galerie">Galerie</a>
            <StyledButton onClick={handleRedirection}>Connexion</StyledButton>
          </StyledGroup>
        </StyledList>
      </Container>
    </StyledNavigation>
  )
}

export default Navigation
