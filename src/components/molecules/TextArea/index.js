import React, { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'
import Label from '../../atoms/Label'
import {
  StyledTextAreaContainer,
  StyledLabelSpan,
  StyledTextarea
} from './index.style'

const TextArea = forwardRef(function (
  {
    label,
    placeholder,
    value,
    onChange,
    maxlength,
    error,
    link,
    ...props
  },
  ref
) {
  const theme = useTheme()
  const [focused, setFocused] = useState(false)

  const getStateColor = (exceptions = []) => {
    if (error) {
      if (!exceptions.includes('error')) {
        return theme.typography.colors.error
      }
    } else if (focused) {
      if (!exceptions.includes('focused')) {
        return theme.typography.colors.link
      }
    }
    return theme.typography.colors.gray2
  }

  return (
    <StyledTextAreaContainer error={error}>
      <StyledLabelSpan>
        <Label>{label}</Label>
        {link && (
          <a className="link" href={link.ref}>{link.title}</a>
        )}
      </StyledLabelSpan>

      <StyledTextarea style={{ borderColor: getStateColor() }}>
        <textarea
          ref={ref}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          {...props}
        />
      </StyledTextarea>

      {/*<StyledInputBox style={{ borderColor: focused ? '#0C75FF' : '#C4C4C4' }} {...props}>*/}
      {/*  <StyledInput*/}
      {/*    ref={ref}*/}
      {/*    onFocus={() => setFocused(true)}*/}
      {/*    onBlur={() => setFocused(false)}*/}
      {/*    onChange={onChange}*/}
      {/*    value={value}*/}
      {/*    maxlength={maxlength}*/}
      {/*    placeholder={placeholder}*/}
      {/*    {...props}*/}
      {/*  />*/}
      {/*</StyledInputBox>*/}

      {error && (
        <a className="error">{error.message}</a>
      )}
    </StyledTextAreaContainer>
  )
})

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  autoCapitalize: PropTypes.string,
  maxlength: PropTypes.number,
  error: PropTypes.object,
  link: PropTypes.object
}

export default TextArea
