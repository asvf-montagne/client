import React from 'react'
import styled from '@emotion/styled'
import Container from '../atoms/container'

const StyledFooter = styled.div`
  width: 100%;
  background-color: #001768;
  padding: 58px 0;
`

const StyledList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledGroup = styled.div`
  background-color: #001768;
  padding: 58px 0;
  display: flex;
  flex-direction: column;
  
  h1 {
    font-size: 1.25rem;
    color: #FFFFFF;
    font-weight: 500;
    margin: 0 0 30px 0;
  }
  
  a {
    font-size: 1.125rem;
    color: #C4C4C4;
    font-weight: 400;
    margin: 0 0 16px 0;
    text-decoration: none;
  }
`

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <StyledList>
          <StyledGroup>
            <h1>ASVF Montagne</h1>
            <a href="/">Le club</a>
            <a href="/">Récits</a>
            <a href="/">Programmes</a>
            <a href="/">Galerie</a>
            <a href="/">Connexion</a>
            <a href="/">Inscription</a>
          </StyledGroup>

          <StyledGroup>
            <h1>Les liens</h1>
            <a href="/">Villefontaine</a>
            <a href="/">Météo grimpe</a>
            <a href="/">Kinéscalade</a>
            <a href="/">Camptocamp</a>
            <a href="/">Skitour</a>
            <a href="/">FFH</a>
          </StyledGroup>

          <StyledGroup>
            <h1>Partenaires</h1>
            <a href="/">Petzel</a>
            <a href="/">Haribo</a>
            <a href="/">Expe</a>
            <a href="/">Au vieux campeur</a>
            <a href="/">Simond</a>
            <a href="/">Sport 2000</a>
          </StyledGroup>

          <StyledGroup>
            <h1>Le site</h1>
            <a href="/">Sitemap</a>
            <a href="/">Mentions légales</a>
            <a href="/">Flux RSS</a>
          </StyledGroup>
        </StyledList>
      </Container>
    </StyledFooter>
  )
}

export default Footer