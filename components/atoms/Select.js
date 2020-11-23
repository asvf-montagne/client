import InputLabel from '@components/atoms/InputLabel'
import Icon from '@material-ui/core/Icon'
import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import styles from './Select.module.css'

Select.propTypes = {
  label: PropTypes.string,
  borderless: PropTypes.bool,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
    }),
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  meta: PropTypes.object,
}

export default function Select({
  label,
  disabled = false,
  borderless = false,
  options,
  value,
  onChange,
  placeholder,
  onFocus,
  onBlur,
  meta,
  ...props
}) {
  const wrapperRef = useRef(null)
  const [focus, setFocus] = useState(false)
  const [menu, setMenu] = useState(false)

  function handleSelectOption(option) {
    onChange(option.value)
    setMenu(false)
  }

  function currentLabel() {
    const selectedOption = options.filter((option) => option.value === value)[0]
    return !!selectedOption && selectedOption.label
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setMenu(false)
        setFocus(false)
        if (!!onBlur) {
          onBlur()
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [wrapperRef, onBlur])

  return (
    <div
      className={`${styles.select_container} ${
        borderless ? styles.select_container_borderless : ''
      }`}
      {...props}
    >
      {label && <InputLabel label={label} />}

      <div
        className={`${styles.select} ${
          borderless ? styles.select_borderless : ''
        }`}
        ref={wrapperRef}
      >
        <div
          className={`${styles.select_control} ${
            borderless ? styles.select_control_borderless : ''
          }`}
          aria-selected={focus ? 'focused' : 'unfocused'}
          onClick={() => {
            if (!disabled) {
              setMenu(!menu)
              setFocus(true)
              if (!!onFocus) {
                onFocus()
              }
            }
          }}
        >
          <div className={styles.select_placeholder} aria-selected={!!value}>
            {!borderless && (
              <div className={styles.select_placeholder_icon_container}>
                <Icon
                  className={styles.select_placeholder_icon}
                  aria-selected={focus ? 'focused' : 'unfocused'}
                >
                  inbox
                </Icon>
              </div>
            )}
            <div className={styles.select_placeholder_inner}>
              {currentLabel() || placeholder}
            </div>
          </div>
          {!menu ? (
            <Icon className={styles.select_arrow}>keyboard_arrow_down</Icon>
          ) : (
            <Icon className={styles.select_arrow}>keyboard_arrow_up</Icon>
          )}
        </div>
        {menu && (
          <div className={styles.select_menu}>
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleSelectOption(option)}
                className={styles.select_menu_option}
                aria-selected={option.value === value}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
