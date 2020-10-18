import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Input from '../../molecules/Input'
import Button from '../../atoms/Button'
import StyledForm from './index.style'

FormChangePassword.propTypes = {
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  setConfirmPassword: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

function FormChangePassword({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  onSubmit
}) {
  const refPassword = useRef(null)
  const refConfirmPassword = useRef(null)

  const handleFormKeyDown = (type) => (event) => {
    if (event.keyCode === 13) {
      switch(type) {
        case 'password':
          refConfirmPassword.current.focus()
          break
        case 'confirm-password':
          onSubmit(event)
          break
        default:
          break
      }
    }
  }

  const handleFormChange = (type) => (event) => {
    switch(type) {
      case 'password':
        setPassword(event.target.value)
        break
      case 'confirm-password':
        setConfirmPassword(event.target.value)
        break
      default:
        break
    }
  }

  useEffect(() => {
    refPassword.current.focus()
  }, [])

  return (
    <StyledForm>
      <Input
        type="password"
        label="Nouveau mot de passe"
        placeholder="password"
        ref={refPassword}
        value={password}
        onKeyDown={handleFormKeyDown('password')}
        onChange={handleFormChange('password')}
        icon="password"
      />
      <Input
        type="password"
        label="Confirmation du mot de passe"
        placeholder="password"
        ref={refConfirmPassword}
        value={confirmPassword}
        onKeyDown={handleFormKeyDown('confirm-password')}
        onChange={handleFormChange('confirm-password')}
        icon="password"
      />
      <Button type="plain-blue" fluid onClick={onSubmit}>
        Changer mon mot de passe
      </Button>
    </StyledForm>
  )
}

export default FormChangePassword
