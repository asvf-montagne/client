import PropTypes from 'prop-types'
import styles from './DashboardLayout.module.css'

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default function DashboardLayout({ children }) {
  return <div className={styles.container}>{children}</div>
}
