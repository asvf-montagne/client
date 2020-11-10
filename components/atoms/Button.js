import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

Button.propTypes = {
  size: PropTypes.oneOf(['medium', 'large']).isRequired,
  variant: PropTypes.oneOf(['primary', 'light', 'link']).isRequired,
  focus: PropTypes.oneOf(['primary', 'light', 'link']),
  shadow: PropTypes.bool,
  fluid: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default function Button({
  size,
  variant,
  focus = 'light',
  shadow = false,
  fluid = false,
  onClick,
  children,
  ...props
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      {...props}
      className={`
      ${styles.btn}
      ${styles['btn_' + size]}
      ${styles['btn_' + variant]}
      ${styles['btn_focus_' + focus]}
      ${shadow ? styles['btn_shadow'] : ''}
    `}
    >
      <div className={styles.btn_inner}>{children}</div>
    </button>
  );
}
