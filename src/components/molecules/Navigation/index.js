import React from 'react'
import { useRouter } from 'next/router'
import Container from '../../atoms/Container'
import Button from '../../atoms/Button'
import {
  StyledNavigation,
  StyledList,
  StyledGroup,
  StyledLink,
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
            <StyledLink active={router.pathname.includes('/club')} href="/club">Le Club</StyledLink>
            <StyledLink active={router.pathname.includes('/stories')} href="/stories">Récits</StyledLink>
            <StyledLink active={router.pathname.includes('/program')} href="/program">Programmes</StyledLink>
            <StyledLink active={router.pathname.includes('/gallery')} href="/gallery">Galerie</StyledLink>
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
