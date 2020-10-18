import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'
import IconCheck from '@material-ui/icons/CheckCircle'
import IconMail from '@material-ui/icons/Email'
import StyledState from './index.style'

AuthState.propTypes = {
  icon: PropTypes.oneOf(['mail', 'check']).isRequired,
  description: PropTypes.string.isRequired,
}

function AuthState({ icon, description }) {
  const theme = useTheme()

  const iconSelector = () => {
    switch(icon) {
      case 'check':
        return <IconCheck style={{ fontSize: 148, color: theme.typography.colors.success }} />
      case 'mail':
        return <IconMail style={{ fontSize: 148, color: theme.typography.colors.link }} />
      default:
        break
    }
  }

  return (
    <StyledState>
      {iconSelector()}

      <h4>
        {description}
      </h4>
    </StyledState>
  )
}

export default AuthState
