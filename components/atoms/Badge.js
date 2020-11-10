import React from 'react'
import PropTypes from 'prop-types'
import styles from './Badge.module.css'

Badge.propTypes = {
  color: PropTypes.oneOf(['blue', 'red', 'green', 'yellow']).isRequired,
  children: PropTypes.node.isRequired,
}

export default function Badge({ color, children }) {
  return (
    <span
      className={`
    ${styles.badge} 
    ${styles['badge__' + color]}
    `}
    >
      <div className={styles.badge__inner}>{children}</div>
    </span>
  )
}
