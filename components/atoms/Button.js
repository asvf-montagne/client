import PropTypes from 'prop-types'
import React from 'react'
import styles from './Button.module.css'

Button.propTypes = {
  size: PropTypes.oneOf(['medium', 'large']).isRequired,
  variant: PropTypes.oneOf(['primary', 'light', 'link', 'success']).isRequired,
  focus: PropTypes.oneOf(['primary', 'light', 'link', 'success']),
  disabled: PropTypes.bool,
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
  onClick,
  children,
  ...props
}) {
  const action = (event) => {
    if (!disabled) {
      onClick(event)
    }
    event.preventDefault()
  }

  return (
    <button
      type="button"
      onClick={action}
      {...props}
      className={`
      ${styles.btn}
      ${styles['btn_' + size]}
      ${styles['btn_' + variant]}
      ${styles['btn_focus_' + focus]}
      ${shadow ? styles['btn_shadow'] : ''}
      ${disabled ? styles.btn_disabled : ''}
    `}
    >
      <div className={styles.btn_inner}>{children}</div>
    </button>
  )
}
