import React from 'react'
import styled from '@emotion/styled'
import IconMail from '@material-ui/icons/Mail'
import IconRoom from '@material-ui/icons/Room'
import IconPhone from '@material-ui/icons/Phone'
import Container from '../atoms/container'

const StyledOverlayBox = styled.div`
  width: 100%;
  position: relative;

  .underlay {
    z-index: -10;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0px;
    right: 0px;
    left: 0px;
    overflow: hidden;
  }
`

const StyledBackground = styled.div(
  (props) => `
    height: 100%;
    
    .light {
      display: flex;
      height: 50%;
      background-color: ${props.theme.colors.secondary};
    }
    
    .dark {
      height: 50%;
      display: flex;
      background-color: ${props.theme.colors.tertiary};
    }
  `
)

const StyledOverlay = styled.div`
  padding: 64px 0 0 0;
`

const StyledHeading = styled.h1(
  (props) => `
    font-size: 2.25rem;
    font-weight: ${props.theme.typography.weight.semiBold};
    color: ${props.theme.typography.colors.secondary};
    text-align: center;
    margin: 0;
  `
)

const StyledPLACEHOLDER = styled.div`
  width: 100%;
  height: 118px;
  background-color: grey;
  margin: 92px 0;
`

const StyledContact = styled.div(
  (props) => `
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: grey;
    border-radius: ${props.theme.borderRadius};
    background-color: ${props.theme.colors.tertiary};
    padding: 58px 72px;
  `
)

const StyledContactCol = styled.div(
  (props) => `
    display: flex;
    flex-direction: column;
    flex: 1;
    
    h1 {
      font-size: 2.25rem;
      font-weight: ${props.theme.typography.weight.semiBold};
      color: ${props.theme.typography.colors.white};
      margin: 0 0 24px 0;
    }
    
    p {
      font-size: 1.125rem;
      font-weight: ${props.theme.typography.weight.regular};
      color: ${props.theme.typography.colors.gray2};
      margin: 0 0 24px 0;
    }
    
    .icon-group {
      display: flex;
      flex: 1;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      
      .center {
        display: flex;
        flex-direction: column;
      }
    }
  `
)

const StyledContactIcon = styled.div(
  (props) => `
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 38px;
    
    h3 {
      font-size: 0.875rem;
      font-weight: ${props.theme.typography.weight.regular};
      color: ${props.theme.typography.colors.white};
      margin: 0 0 0 18px;
    }
  `
)

const StyledContactForm = styled.form(
  (props) => `
    display: flex;
    height: 580px;
    margin-left: 40px;
    border-radius: 7px;
    background-color: ${props.theme.colors.white};
  `
)

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