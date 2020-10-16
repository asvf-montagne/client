import React from 'react'
import Index from '../../atoms/Container'
import { StyledFooter, StyledList, StyledGroup } from './index.style'

function Footer() {
  return (
    <StyledFooter>
      <Index>
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
            <a href="https://www.petzl.com/FR/fr" target="_blank">Petzel</a>
            <a href="https://www.haribo.com/fr-fr" target="_blank">Haribo</a>
            <a href="https://www.expe.fr/" target="_blank">Expe</a>
            <a href="https://www.auvieuxcampeur.fr/" target="_blank">Au vieux campeur</a>
            <a href="https://www.simond.fr/" target="_blank">Simond</a>
            <a href="https://www.sport2000.fr/" target="_blank">Sport 2000</a>
          </StyledGroup>

          <StyledGroup>
            <h1>Le site</h1>
            <a href="/">Sitemap</a>
            <a href="/">Mentions légales</a>
            <a href="/">Flux RSS</a>
          </StyledGroup>
        </StyledList>
      </Index>
    </StyledFooter>
  )
}

export default Footer
