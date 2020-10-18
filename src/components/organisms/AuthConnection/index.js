import React from 'react'
import PropTypes from 'prop-types'
import StyledGroup from './index.style'
import Button from '../../atoms/Button'

import GoogleLogoAsset from '../../../assets/images/logo-google.png'

AuthConnection.propTypes = {
  title: PropTypes.string,
  authType: PropTypes.oneOf(['login', 'register']),
  onDefaultSubmit: PropTypes.func.isRequired,
  onGoogleSubmit: PropTypes.func.isRequired,
}

function AuthConnection({ title, authType, onDefaultSubmit, onGoogleSubmit }) {
  const separator = () => {
    if (authType === 'login') {
      return <p>Ou bien se connecter avec</p>
    }
    return <p>Ou bien se s’inscrire avec</p>
  }

  return (
    <StyledGroup>
      <Button type="plain-blue" fluid onClick={onDefaultSubmit}>
        {title}
      </Button>
      {separator()}
      <Button type="minimalist" fluid onClick={onGoogleSubmit}>
        <img alt="auth-google" src={GoogleLogoAsset} />
        Google
      </Button>
    </StyledGroup>
  )
}

export default AuthConnection
