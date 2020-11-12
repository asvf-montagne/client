import PropTypes from 'prop-types'
import styles from './AccountLayout.module.css'

AccountLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default function AccountLayout({ children }) {
  return <div className={styles.container}>{children}</div>
}