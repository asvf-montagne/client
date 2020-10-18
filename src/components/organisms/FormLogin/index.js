import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Input from '../../molecules/Input'
import Button from '../../atoms/Button'
import StyledForm from './index.style'

FormLogin.propTypes = {
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

function FormLogin({
  password,
  setPassword,
  email,
  setEmail,
  onSubmit
}) {
  const refEmail = useRef(null)
  const refPassword = useRef(null)

  const handleFormKeyDown = (type) => (event) => {
    if (event.keyCode === 13) {
      switch(type) {
        case 'email':
          refPassword.current.focus()
          break
        case 'password':
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
      case 'password':
        setPassword(event.target.value)
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
        label="Email"
        placeholder="jonhdoe@example.com"
        ref={refEmail}
        value={email}
        onKeyDown={handleFormKeyDown('email')}
        onChange={handleFormChange('email')}
        icon="mail"
      />
      <Input
        type="password"
        label="Mot de passe"
        placeholder="password"
        ref={refPassword}
        value={password}
        onKeyDown={handleFormKeyDown('password')}
        onChange={handleFormChange('password')}
        icon="password"
        link={{
          title: 'Mot de passe oublié ?',
          ref: '/forgot-password'
        }}
      />
      <Button type="plain-blue" fluid onClick={onSubmit}>
        Connexion
      </Button>
    </StyledForm>
  )
}

export default FormLogin
