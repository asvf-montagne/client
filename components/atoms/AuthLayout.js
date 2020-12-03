import backgroundImage from '@assets/images/mont_blanc.webp'
import Button from '@components/atoms/Button'
import Icon from '@material-ui/core/Icon'
import Head from 'next/head'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import styles from './AuthLayout.module.css'

AuthLayout.propTypes = {
  title: PropTypes.string.isRequired,
  helper: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default function AuthLayout({ title, helper, children }) {
  const router = useRouter()

  return (
    <>
      <main>
        <div className={styles.authLayout}>
          <div className={styles.authLayout__left}>
            <img
              alt="mont blanc"
              src={backgroundImage}
              className={styles.authLayout__left__img}
            />
          </div>
          <div className={styles.authLayout__right}>
            <div className={styles.authLayout__right__header}>
              <div className={styles.authLayout__right__header__inner}>
                <Button
                  variant="link"
                  size="medium"
                  onClick={() => router.push('/')}
                >
                  <Icon style={{ marginRight: 8 }}>chevron_left</Icon>
                  Retourner sur le site
                </Button>
                <h1 className={styles.authLayout__right__header__inner__title}>
                  {title}
                </h1>
              </div>
            </div>

            <div className={styles.authLayout__right__inner}>
              <div className={styles.authLayout__right__inner_inner}>
                {children}
              </div>
              <div className={styles.authLayout__right__helper}>
                <Button
                  variant="link"
                  size="medium"
                  onClick={() => router.push(helper.href)}
                >
                  {helper.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
