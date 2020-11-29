import GoogleLogoAsset from '@assets/images/logo_google.png'
import Button from '@components/atoms/Button'
import baseURL from '@helpers/baseURL'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import styles from './DashboardLinkWithGoogle.module.css'

DashboardLinkWithGoogle.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default function DashboardLinkWithGoogle({
                                                  label,
                                                  description,
                                                }) {
  const router = useRouter()

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
        onClick={() => router.push(`${baseURL}/connect/google/`)}
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
