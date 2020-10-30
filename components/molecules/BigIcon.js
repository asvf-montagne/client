import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import styles from './BigIcon.module.css';

BigIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'success', 'error']).isRequired,
  description: PropTypes.string,
};

export default function BigIcon({ icon, variant, description }) {
  return (
    <div className={styles.bigIcon}>
      <Icon className={`
        ${styles.bigIcon__icon}
        ${variant === 'primary' ? styles.bigIcon__iconPrimary : ''}
        ${variant === 'success' ? styles.bigIcon__iconSuccess : ''}
        ${variant === 'error' ? styles.bigIcon__iconError : ''}
      `}
      >
        {icon}
      </Icon>
      {description && (
        <h4 className={styles.bigIcon__title}>
          {description}
        </h4>
      )}
    </div>
  )
}