import styles from '@components/atoms/Button.module.css'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'

Button.propTypes = {
  size: PropTypes.oneOf(['medium', 'large']).isRequired,
  variant: PropTypes.oneOf(['primary', 'light', 'link', 'success', 'error'])
    .isRequired,
  focus: PropTypes.oneOf(['primary', 'light', 'link', 'success', 'error']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  shadow: PropTypes.bool,
  fluid: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  link: PropTypes.shape({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    replace: PropTypes.bool,
    scroll: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    prefetch: PropTypes.bool,
    locale: PropTypes.any,
  }),
}

export default function Button({
  size,
  variant = 'primary',
  focus = 'light',
  shadow = false,
  fluid = false,
  disabled = false,
  loading = false,
  onClick,
  children,
  link,
  ...props
}) {
  const classNames = `
  ${styles.btn}
  ${styles['btn_' + size]}
  ${styles['btn_' + variant] || ''}
  ${styles['btn_focus_' + focus]}
  ${shadow ? styles['btn_shadow'] : ''}
  ${
    disabled && ['primary', 'success'].includes(variant)
      ? styles.btn_primary_disabled
      : ''
  }
  ${disabled && ['light'].includes(variant) ? styles.btn_light_disabled : ''}
  ${disabled && ['link'].includes(variant) ? styles.btn_link_disabled : ''}
  ${
    loading && ['primary', 'success'].includes(variant)
      ? styles.btn_primary_loading
      : ''
  }
  `

  return (
    <>
      {link ? (
        <Link {...link}>
          <a type="button" onClick={onClick} {...props} className={classNames}>
            <div className={styles.btn_inner}>{children}</div>
          </a>
        </Link>
      ) : (
        <button
          type="button"
          onClick={onClick}
          {...props}
          disabled={disabled || loading}
          className={classNames}
        >
          <div className={styles.btn_inner}>{children}</div>
        </button>
      )}
    </>
  )
}
