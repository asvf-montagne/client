import InputLabel from '@components/atoms/InputLabel'
import Icon from '@material-ui/core/Icon'
import PropTypes from 'prop-types'
import React, { forwardRef, useState } from 'react'
import styles from './Input.module.css'

// eslint-disable-next-line react/display-name
const Input = forwardRef(
  (
    {
      disabled = false,
      textArea = false,
      autocomplete = 'off',
      type = 'text',
      label,
      date = false,
      placeholder,
      value,
      onChange,
      onKeyDown,
      onFocus,
      onBlur,
      icon,
      link,
      meta,
      ...props
    },
    ref,
  ) => {
    const [focused, setFocused] = useState(false)

    const hasError =
      meta &&
      meta.touched &&
      (meta.error || (meta.submitError && !meta.modifiedSinceLastSubmit))

    return (
      <div className={styles.input} {...props}>
        {label && <InputLabel label={label} link={link}/>}

        <div
          className={`
            ${styles.input__container}
            ${disabled ? styles.input__container_disabled : ''}
            
            ${
            hasError
              ? styles.input__containerError
              : focused && styles.input__containerFocused
          }
          `}
        >
          {icon && (
            <div className={styles.input__container__iconBox}>
              <Icon
                className={`
                  ${styles.input__container__iconBox__icon}
                  
                  ${
                  hasError
                    ? styles.input__container__iconBox__iconError
                    : focused && styles.input__container__iconBox__iconFocused
                }
                `}
              >
                {icon}
              </Icon>
            </div>
          )}
          {(textArea && (
            <textarea
              ref={ref}
              disabled={disabled}
              className={styles.input__container__textarea}
              onFocus={() => {
                if (!disabled) {
                  setFocused(true)
                  if (!!onFocus) {
                    onFocus()
                  }
                }
              }}
              onBlur={() => {
                if (!!onBlur) {
                  onBlur()
                }
                setFocused(false)
              }}
              onChange={(event) => onChange(event.target.value)}
              onKeyDown={onKeyDown}
              value={value}
              placeholder={placeholder}
            />
          )) || (
            <input
              ref={ref}
              type={type}
              disabled={disabled}
              autoComplete={autocomplete}
              className={`${styles.input__container__input} ${
                icon ? styles.input__container__input__iconless : ''
              }`}
              onFocus={() => {
                if (!disabled) {
                  setFocused(true)
                  if (!!onFocus) {
                    onFocus()
                  }
                }
              }}
              onBlur={() => {
                if (!!onBlur) {
                  onBlur()
                }
                setFocused(false)
              }}
              onChange={(event) => {
                if (date) onChange(event)
                else onChange(event.target.value)
              }}
              onKeyDown={onKeyDown}
              value={value}
              placeholder={placeholder}
            />
          )}
        </div>

        {hasError && (
          <a className={styles.input__errorMsg}>
            {meta.error || meta.submitError}
          </a>
        )}
      </div>
    )
  },
)

Input.propTypes = {
  disabled: PropTypes.bool,
  textArea: PropTypes.bool,
  autocomplete: PropTypes.string,
  date: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'password']),
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  icon: PropTypes.string,
  link: PropTypes.shape({
    title: PropTypes.string.isRequired,
    ref: PropTypes.string.isRequired
  }),
  meta: PropTypes.object,
}

export default Input
