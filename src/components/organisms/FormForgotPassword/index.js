import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Input from '../../molecules/Input'
import Button from '../../atoms/Button'
import StyledForm from './index.style'

FormForgotPassword.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

function FormForgotPassword({
  email,
  setEmail,
  onSubmit
}) {
  const refEmail = useRef(null)

  const handleFormKeyDown = (type) => (event) => {
    if (event.keyCode === 13) {
      switch(type) {
        case 'email':
          onSubmit(event)
          break
        default:
          break
      }
    }
  }

  const handleFormChange = (type) => (event) => {
    switch(type) {
      case 'email':
        setEmail(event.target.value)
        break
      default:
        break
    }
  }

  useEffect(() => {
    refEmail.current.focus()
  }, [])

  return (
    <StyledForm>
      <Input
        label="Email de votre compte"
        placeholder="jonhdoe@example.com"
        value={email}
        ref={refEmail}
        onKeyDown={handleFormKeyDown('email')}
        onChange={handleFormChange('email')}
        icon="mail"
      />
      <Button type="plain-blue" fluid onClick={onSubmit}>
        Changer mon mot de passe
      </Button>
    </StyledForm>
  )
}

export default FormForgotPassword
