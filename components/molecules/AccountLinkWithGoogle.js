import PropTypes from 'prop-types'
import Button from '@components/atoms/Button'
import GoogleLogoAsset from '@assets/images/logo_google.png'
import styles from './AccountLinkWithGoogle.module.css'

AccountLinkWithGoogle.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default function AccountLinkWithGoogle({ label, description, onClick }) {
  return (
    <div className={styles.container}>
      <div className={styles.container_col}>
        <label className={styles.container_col_label}>{label}</label>
        <p className={styles.container_col_description}>{description}</p>
      </div>
      <Button
        variant="light"
        size="large"
        focus="primary"
        fluid
        onClick={(event) => onClick(event)}
      >
        <img
          alt="auth-google"
          src={GoogleLogoAsset}
          className={styles.container_col_btn_logo}
        />
        Google
      </Button>
    </div>
  )
}
