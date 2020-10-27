import PropTypes from 'prop-types'
import styles from './Button.module.css'

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'light', 'link']).isRequired,
  size: PropTypes.oneOf(['medium', 'large']),
  shadow: PropTypes.bool,
  fluid: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default function Button({ type = 'primary', size = 'medium', shadow = false, fluid = false, onClick, children, ...props }) {
  return (
    <button type="button" onClick={onClick} {...props} className={`
      ${styles.btn}
      ${styles['btn-' + type]}
      ${styles['btn-' + size]}
      ${shadow ? styles['btn-shadow'] : ''}
    `}>
      {children}
    </button>
  )
}