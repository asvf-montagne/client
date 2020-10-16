import React, { useState } from 'react'
import PropTypes from 'prop-types'
import IconUser from '@material-ui/icons/Person'
import IconMail from '@material-ui/icons/MailOutline'
import Label from '../../atoms/Label'
import { StyledInputBox, StyledIconBox, StyledInput } from './index.style'

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  autoCapitalize: PropTypes.bool,
  icon: PropTypes.oneOf(['user', 'mail']),
  style: PropTypes.object
}

function Input({
  label,
  placeholder,
  value,
  onChange,
  autoCapitalize,
  icon,
  style,
  ...props
}) {
  const [focused, setFocused] = useState(false)

  return (
    <>
      <Label style={{ marginBottom: 24 }}>{label}</Label>
      <StyledInputBox style={{ borderColor: focused ? '#0C75FF' : '#C4C4C4' }} {...props}>
        <StyledIconBox>
          {(
            icon === 'user' && <IconUser style={{ color: focused ? '#0C75FF' : '#C4C4C4' }} />
          ) || (
            icon === 'mail' && <IconMail style={{ color: focused ? '#0C75FF' : '#C4C4C4' }} />
          )}
        </StyledIconBox>
        <StyledInput
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          autocapitalize={autoCapitalize}
          {...props}
        />
      </StyledInputBox>
    </>
  )
}

export default Input
