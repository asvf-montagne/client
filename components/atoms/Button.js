import PropTypes from 'prop-types'
import React from 'react'
import styles from './Button.module.css'

Button.propTypes = {
  size: PropTypes.oneOf(['medium', 'large']).isRequired,
  variant: PropTypes.oneOf(['primary', 'light', 'link', 'success', 'error'])
    .isRequired,
  focus: PropTypes.oneOf(['primary', 'light', 'link', 'success', 'error']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  shadow: PropTypes.bool,
  fluid: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default function Button({
  size,
  variant,
  focus = 'light',
  shadow = false,
  fluid = false,
  disabled = false,
  loading = false,
  onClick,
  children,
  ...props
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      {...props}
      disabled={disabled || loading}
      className={`
      ${styles.btn}
      ${styles['btn_' + size]}
      ${styles['btn_' + variant]}
      ${styles['btn_focus_' + focus]}
      ${shadow ? styles['btn_shadow'] : ''}
      ${
        disabled && ['primary', 'success'].includes(variant)
          ? styles.btn_primary_disabled
          : ''
      }
      ${
        disabled && ['light'].includes(variant) ? styles.btn_light_disabled : ''
      }
      ${disabled && ['link'].includes(variant) ? styles.btn_link_disabled : ''}
      ${
        loading && ['primary', 'success'].includes(variant)
          ? styles.btn_primary_loading
          : ''
      }
      ${loading && ['light'].includes(variant) ? styles.btn_light_loading : ''}
    `}
    >
      <div className={styles.btn_inner}>{children}</div>
    </button>
  )
}
