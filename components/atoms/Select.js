import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Icon from '@material-ui/core/Icon'
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
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleFocus: PropTypes.func,
  handleBlur: PropTypes.func,
  meta: PropTypes.object,
}

export default function Select({
  label,
  disabled = false,
  borderless = false,
  options,
  value,
  setValue,
  placeholder,
  handleFocus,
  handleBlur,
  meta,
  ...props
}) {
  const wrapperRef = useRef(null)
  const [focus, setFocus] = useState(false)
  const [menu, setMenu] = useState(false)

  function handleSelectOption(option) {
    setValue(option)
    setMenu(false)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setMenu(false)
        setFocus(false)
        if (!!handleBlur) {
          handleBlur()
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [wrapperRef, handleBlur])

  return (
    <div
      className={`${styles.select_container} ${
        borderless ? styles.select_container_borderless : ''
      }`}
      {...props}
    >
      {label && (
        <span className={styles.select_header}>
          <label className={styles.select_header_label}>{label}</label>
        </span>
      )}

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
          aria-selected={
            meta && meta.touched && focus ? 'focused' : 'unfocused'
          }
          onClick={() => {
            if (!disabled) {
              setMenu(!menu)
              setFocus(true)
              if (!!handleFocus) {
                handleFocus()
              }
            }
          }}
        >
          <div
            className={styles.select_placeholder}
            aria-selected={!!value.label}
          >
            {!borderless && (
              <div className={styles.select_placeholder_icon_container}>
                <Icon
                  className={styles.select_placeholder_icon}
                  aria-selected={
                    meta && meta.touched && focus ? 'focused' : 'unfocused'
                  }
                >
                  inbox
                </Icon>
              </div>
            )}
            <div className={styles.select_placeholder_inner}>
              {value.label || placeholder}
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
