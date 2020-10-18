import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Input from '../../molecules/Input'
import AuthConnection from '../AuthConnection'
import StyledForm from './index.style'

FormRegister.propTypes = {
  fullName: PropTypes.string.isRequired,
  setFullName: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onGoogleSubmit: PropTypes.func.isRequired
}

function FormRegister({
  fullName,
  setFullName,
  password,
  setPassword,
  email,
  setEmail,
  onSubmit,
  onGoogleSubmit,
}) {
  const refFullName = useRef(null)
  const refEmail = useRef(null)
  const refPassword = useRef(null)

  const handleFormKeyDown = (type) => (event) => {
    if (event.keyCode === 13) {
      switch(type) {
        case 'full-name':
          refEmail.current.focus()
          break
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
      case 'full-name':
        setFullName(event.target.value)
        break
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
    refFullName.current.focus()
  }, [])

  return (
    <StyledForm>
      <Input
        label="Nom et prénom"
        placeholder="Jonh Doe"
        ref={refFullName}
        value={fullName}
        onKeyDown={handleFormKeyDown('full-name')}
        onChange={handleFormChange('full-name')}
        icon="mail"
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
      <Input
        type="password"
        label="Mot de passe"
        placeholder="password"
        ref={refPassword}
        value={password}
        onKeyDown={handleFormKeyDown('password')}
        onChange={handleFormChange('password')}
        icon="password"
      />
      <AuthConnection
        title="Inscription"
        authType="register"
        onDefaultSubmit={onSubmit}
        onGoogleSubmit={onGoogleSubmit}
      />
    </StyledForm>
  )
}

export default FormRegister
