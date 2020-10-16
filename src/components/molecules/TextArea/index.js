import React, { useState } from 'react'
import IconUser from '@material-ui/icons/Person'
import IconMail from '@material-ui/icons/MailOutline'
import Label from '../../atoms/Label'
import { StyledInputBox, StyledIconBox, StyledInput } from './index.style'

function TextArea({
  label,
  placeholder,
  value,
  onChange,
  autoCapitalize,
  maxlength,
  style,
  ...props
}) {
  const [focused, setFocused] = useState(false)

  return (
    <>
      <Label style={{ marginBottom: 24 }}>{label}</Label>
      <StyledInputBox style={{ borderColor: focused ? '#0C75FF' : '#C4C4C4' }} {...props}>
        <StyledInput
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={onChange}
          value={value}
          maxlength={maxlength}
          placeholder={placeholder}
          autocapitalize={autoCapitalize}
          {...props}
        />
      </StyledInputBox>
    </>
  )
}

export default TextArea
