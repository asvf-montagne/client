import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Label from '../../atoms/Label'
import { StyledInputBox, StyledIconBox, StyledInput } from './index.style'

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  autoCapitalize: PropTypes.bool,
  maxlength: PropTypes.number,
  style: PropTypes.object
}

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
