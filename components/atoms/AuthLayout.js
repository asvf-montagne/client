import Head from 'next/head';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import Button from '@components/atoms/Button';
import styles from './AuthLayout.module.css';

import backgroundMountainAsset from '@assets/images/mont-blanc.jpg';

AuthLayout.propTypes = {
  title: PropTypes.array.isRequired,
  helper: PropTypes.object.isRequired,
};

export default function AuthLayout({ title, helper, children }) {
  return (
    <>
      <Head>
        <title>ASVF Montagne</title>
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <main>
        <div className={styles.authLayout}>
          <div className={styles.authLayout__left}>
            <img alt="mountain background" src={backgroundMountainAsset} className={styles.authLayout__left__img} />
          </div>
          <div className={styles.authLayout__right}>
            <div className={styles.authLayout__right__header}>
              <div className={styles.authLayout__right__header__inner}>
                <Button type="link" onClick={() => console.log('wewe')}>
                  <Icon style={{ marginRight: 8 }}>chevron_left</Icon>
                  Retourner sur le site
                </Button>
                <h1 className={styles.authLayout__right__header__inner__title}>{title}</h1>
              </div>
            </div>

            <div className={styles.authLayout__right__inner}>
              {children}
            </div>

            <div className={styles.authLayout__right__helper}>
              <Button type="link" onClick={() => console.log('wewe')}>
                {helper.label}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}