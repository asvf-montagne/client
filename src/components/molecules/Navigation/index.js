import React from 'react'
import { useRouter } from 'next/router'
import Container from '../../atoms/Container'
import Button from '../../atoms/Button'
import {
  StyledNavigation,
  StyledList,
  StyledGroup,
  StyledLogo
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
            <a href="/club">Le Club</a>
            <a href="/stories">Récits</a>
            <a href="/programmes">Programmes</a>
            <a href="/galery">Galerie</a>
            <Button onClick={handleRedirection} style={{ marginLeft: 32 }}>
              Connexion
            </Button>
          </StyledGroup>
        </StyledList>
      </Container>
    </StyledNavigation>
  )
}

export default Navigation
