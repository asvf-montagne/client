import React from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import Container from '../atoms/container'

const StyledNavigation = styled.nav`
  height: 94px;
  background-color: #02044A;
  display: flex;
  align-items: center;
`

const StyledList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const StyledGroup = styled.div(
  (props) => `
    display: flex;
    flex-direction: row;
    align-items: center;
    
    a {
      font-size: 1.125rem;
      color: ${props.theme.typography.colors.white};
      font-weight: ${props.theme.typography.weight.regular};
      text-decoration: none;
      margin-left: 26px;
    }
  `
)

const StyledLogo = styled.a(
  (props) => `
    font-size: 1.5rem;
    color: ${props.theme.typography.colors.white};
    font-weight: ${props.theme.typography.weight.semiBold};
    text-decoration: none;
  `
)

const StyledButton = styled.button(
  (props) => `
    padding: 5px 10px;
    border-radius: 3px;
    background-color: ${props.theme.colors.white};
    border: none;
    color: ${props.theme.typography.colors.secondary};
    font-size: 1.125rem;
    font-weight: ${props.theme.typography.weight.medium};
    cursor: pointer;
    margin-left: 32px;
  
    :focus {
      outline: none;
      border-color: ${props.theme.colors.white};
      box-shadow: 0 0 0 0.2rem rgba(255,255,255,.5);
    }
  `
)

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