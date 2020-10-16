import React from 'react'
import IconMail from '@material-ui/icons/Mail'
import IconRoom from '@material-ui/icons/Room'
import IconPhone from '@material-ui/icons/Phone'
import Container from '../../atoms/Container'
import {
  StyledOverlayBox,
  StyledBackground,
  StyledOverlay,
  StyledHeading,
  StyledPLACEHOLDER,
  StyledContact,
  StyledContactCol,
  StyledContactIcon,
  StyledContactForm
} from './index.style'

function HomeSponsorsAndContacts() {
  return (
    <StyledOverlayBox>
      <Container>
        <StyledOverlay>
          <StyledHeading>Nos partenaires</StyledHeading>
          <StyledPLACEHOLDER />
          <StyledContact>
            <StyledContactCol>
              <h1>Nous contacter</h1>
              <p>Remplissez le formulaire et nous vous répondrons le plus rapidement possible.</p>
              <div className="icon-group">
                <div className="center">
                  <StyledContactIcon>
                    <IconMail style={{ color: '#0C75FF' }} />
                    <h3>contact@asvf-montagne.fr</h3>
                  </StyledContactIcon>
                  <StyledContactIcon>
                    <IconRoom style={{ color: '#0C75FF' }} />
                    <h3>22 rue du Passou 38090 Vaulx-Milieu </h3>
                  </StyledContactIcon>
                  <StyledContactIcon>
                    <IconPhone style={{ color: '#0C75FF' }} />
                    <h3>06 81 26 88 14 (jeudi de 18h30 à 20h)</h3>
                  </StyledContactIcon>
                </div>
              </div>
            </StyledContactCol>
            <StyledContactCol>
              <StyledContactForm>

              </StyledContactForm>
            </StyledContactCol>
          </StyledContact>
        </StyledOverlay>
      </Container>
      <div className="underlay">
        <StyledBackground>
          <div className="light" />
          <div className="dark" />
        </StyledBackground>
      </div>
    </StyledOverlayBox>
  )
}

export default HomeSponsorsAndContacts