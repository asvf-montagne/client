import React, { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import Label from '../../atoms/Label'
import { StyledInputBox, StyledInput } from './index.style'

const TextArea = forwardRef(function (
  {
    label,
    placeholder,
    value,
    onChange,
    autoCapitalize,
    maxlength,
    style,
    ...props
  },
  ref
) {
  const [focused, setFocused] = useState(false)

  return (
    <>
      <Label style={{ marginBottom: 24 }}>{label}</Label>
      <StyledInputBox style={{ borderColor: focused ? '#0C75FF' : '#C4C4C4' }} {...props}>
        <StyledInput
          ref={ref}
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
})

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  autoCapitalize: PropTypes.string,
  maxlength: PropTypes.number,
  style: PropTypes.object
}

export default TextArea
