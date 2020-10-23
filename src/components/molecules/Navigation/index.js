import React from 'react'
import { useRouter } from 'next/router'
import Container from '../../atoms/Container'
import Button from '../../atoms/Button'
import {
  StyledNavigationContainer,
  StyledNavigation,
  StyledList,
  StyledLink,
  StyledLogo
} from './index.style'

function Navigation() {
  const router = useRouter()

  const handleRedirection = () => {
    router.push('/login')
  }

  return (
    <StyledNavigationContainer>
      <Container>
        <StyledNavigation>
          <StyledList>
            <StyledLogo href="/">ASVF Montagne</StyledLogo>
            <StyledLink active={router.pathname.includes('/club')}>
              <a href="/club">Le Club</a>
            </StyledLink>
            <StyledLink active={router.pathname.includes('/stories')}>
              <a href="/stories">Récits</a>
            </StyledLink>
          </StyledList>

          <StyledList>
            <StyledLink active={router.pathname.includes('/register')}>
              <a href="/register">Inscription</a>
            </StyledLink>

            <Button onClick={handleRedirection} type="plain-white" size="medium" style={{ marginLeft: 32 }}>
              Connexion
            </Button>
          </StyledList>
        </StyledNavigation>
      </Container>
    </StyledNavigationContainer>
  )
}

export default Navigation
