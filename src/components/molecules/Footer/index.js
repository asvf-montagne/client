import React from 'react'
import Container from '../../atoms/Container'
import { StyledFooter, StyledList, StyledLink } from './index.style'

const groups = [
  {
    title: 'ASVF Montagne',
    links: [
      {
        ref: '/',
        name: 'Le club'
      },
      {
        ref: '/',
        name: 'Récits'
      },
      {
        ref: '/',
        name: 'Programmes'
      },
      {
        ref: '/',
        name: 'Galerie'
      },
      {
        ref: '/',
        name: 'Connexion'
      },
      {
        ref: '/',
        name: 'Inscription'
      }
    ]
  },
  {
    title: 'Les liens',
    links: [
      {
        ref: '/',
        name: 'Villefontaine'
      },
      {
        ref: '/',
        name: 'Météo grimpe'
      },
      {
        ref: '/',
        name: 'Kinéscalade'
      },
      {
        ref: '/',
        name: 'Camptocamp'
      },
      {
        ref: '/',
        name: 'Skitour'
      },
      {
        ref: '/',
        name: 'FFH'
      }
    ]
  },
  {
    title: 'Partenaires',
    links: [
      {
        ref: 'https://www.petzl.com/FR/fr',
        name: 'Petzel'
      },
      {
        ref: 'https://www.haribo.com/fr-fr',
        name: 'Haribo'
      },
      {
        ref: 'https://www.expe.fr/',
        name: 'Expe'
      },
      {
        ref: 'https://www.auvieuxcampeur.fr/',
        name: 'Au vieux campeur'
      },
      {
        ref: 'https://www.simond.fr/',
        name: 'Simond'
      },
      {
        ref: 'https://www.sport2000.fr/',
        name: 'Sport 2000'
      }
    ]
  },
  {
    title: 'Le site',
    links: [
      {
        ref: '/',
        name: 'Sitemap'
      },
      {
        ref: '/',
        name: 'Mentions légales'
      },
      {
        ref: '/',
        name: 'Flux RSS'
      }
    ]
  }
]

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <StyledList>
          {groups.map((group, index) => (
            <ul key={index}>
              <h3>{group.title}</h3>
              {group.links.map((link, index) => (
                <StyledLink key={index}>
                  <a href={link.ref}>{link.name}</a>
                </StyledLink>
              ))}
            </ul>
          ))}
        </StyledList>
      </Container>
    </StyledFooter>
  )
}

export default Footer
