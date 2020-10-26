import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import IconMail from '@material-ui/icons/Mail'
import IconRoom from '@material-ui/icons/Room'
import IconPhone from '@material-ui/icons/Phone'
import Container from '../../atoms/Container'
import Button from '../../atoms/Button'
import Carousel from '../../atoms/Carousel'
import Input from '../../molecules/Input'
import TextArea from '../../molecules/TextArea'
import {
  StyledOverlayBox,
  StyledBackground,
  StyledOverlay,
  StyledHeading,
  StyledSponsor,
  StyledContact,
  StyledContactCol,
  StyledContactIcon,
  StyledContactForm
} from './index.style'

HomeSponsorsAndContacts.propTypes = {
  sponsors: PropTypes.array.isRequired,
  fullName: PropTypes.string.isRequired,
  setFullName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  setMessage: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

function HomeSponsorsAndContacts({
  sponsors,
  fullName,
  setFullName,
  email,
  setEmail,
  message,
  setMessage,
  onSubmit
}) {
  const refFullName = useRef(null)
  const refEmail = useRef(null)
  const refMessage = useRef(null)

  const handleFormKeyDown = (type) => (event) => {
    if (event.keyCode === 13) {
      switch(type) {
        case 'full-name':
          refEmail.current.focus()
          break
        case 'email':
          event.preventDefault()
          refMessage.current.focus()
          break
        case 'message':
          onSubmit(event)
          break
        default:
          break
      }
    }
  }

  const handleFormChange = (type) => (event) => {
    switch(type) {
      case 'full-name':
        setFullName(event.target.value)
        break
      case 'email':
        setEmail(event.target.value)
        break
      case 'message':
        setMessage(event.target.value)
        break
      default:
        break
    }
  }

  return (
    <StyledOverlayBox>
      <Container>
        <StyledOverlay>
          <h1>Nos partenaires</h1>

          <Carousel itemsPerPage={4}>
            {sponsors.map((sponsor, index) => (
              <StyledSponsor key={index}>
                <img alt={sponsor.alt} src={sponsor.asset} />
              </StyledSponsor>
            ))}
          </Carousel>

          <StyledContact>
            <StyledContactCol>
              <h1>Nous contacter</h1>
              <p>Remplissez le formulaire et nous vous répondrons le plus rapidement possible.</p>
              <div className="icon-group">
                <div className="center">
                  <StyledContactIcon>
                    <IconMail style={{ color: '#0C75FF' }} />
                    <p>contact@asvf-montagne.fr</p>
                  </StyledContactIcon>
                  <StyledContactIcon>
                    <IconRoom style={{ color: '#0C75FF' }} />
                    <p>22 rue du Passou 38090 Vaulx-Milieu </p>
                  </StyledContactIcon>
                  <StyledContactIcon>
                    <IconPhone style={{ color: '#0C75FF' }} />
                    <p>06 81 26 88 14 (jeudi de 18h30 à 20h)</p>
                  </StyledContactIcon>
                </div>
              </div>
            </StyledContactCol>

            <StyledContactCol>
              <StyledContactForm>
                <Input
                  label="Nom et prénom"
                  placeholder="Jonh Doe"
                  ref={refFullName}
                  value={fullName}
                  onKeyDown={handleFormKeyDown('full-name')}
                  onChange={handleFormChange('full-name')}
                  icon="user"
                />
                <Input
                  label="Email"
                  placeholder="jonhdoe@example.com"
                  ref={refEmail}
                  value={email}
                  onKeyDown={handleFormKeyDown('email')}
                  onChange={handleFormChange('email')}
                  icon="mail"
                />
                <TextArea
                  label="Message"
                  placeholder="Un super message pour l’asvf montagne !"
                  ref={refMessage}
                  value={message}
                  onKeyDown={handleFormKeyDown('message')}
                  onChange={handleFormChange('message')}
                />
                <Button onClick={onSubmit} type="plain-blue" size="medium" style={{ marginLeft: 'auto' }}>
                  Envoyer le message
                </Button>
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