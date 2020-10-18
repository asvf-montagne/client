import React, { useState, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'
import IconUser from '@material-ui/icons/Person'
import IconMail from '@material-ui/icons/MailOutline'
import IconLock from '@material-ui/icons/LockOutlined'
import Label from '../../atoms/Label'
import { StyledInputContainer, StyledLabelSpan, StyledInput } from './index.style'

const Input = forwardRef((
  {
    type = 'text',
    label,
    placeholder,
    value,
    onChange,
    icon,
    link,
    error,
    ...props
  },
  ref
) => {
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

  const iconSelector = () => {
    switch(icon) {
      case 'user':
        return <IconUser style={{ color: getStateColor('error') }} />
      case 'mail':
        return <IconMail style={{ color: getStateColor('error') }} />
      case 'password':
        return <IconLock style={{ color: getStateColor('error') }} />
      default:
        break
    }
  }

  return (
    <StyledInputContainer error={error} {...props}>
      <StyledLabelSpan>
        <Label>{label}</Label>
        {link && (
          <a className="link" href={link.ref}>{link.title}</a>
        )}
      </StyledLabelSpan>

      <StyledInput style={{ borderColor: getStateColor() }}>
        {icon && (
          <div className="icon">
            {iconSelector()}
          </div>
        )}
        <input
          type={type}
          ref={ref}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          {...props}
        />
      </StyledInput>

      {error && (
        <a className="error">{error.message}</a>
      )}
    </StyledInputContainer>
  )
})

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password']),
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  autoCapitalize: PropTypes.string,
  icon: PropTypes.oneOf(['user', 'mail', 'password']),
  link: PropTypes.object,
  error: PropTypes.object
}

export default Input
