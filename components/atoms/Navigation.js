import { useState } from 'react';
import { useRouter } from 'next/router';
import Icon from '@material-ui/core/Icon';
import Button from '@components/atoms/Button';
import styles from './Navigation.module.css';

export default function Navigation() {
  const router = useRouter();
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleRedirection = () => {
    router.push('/sign-in')
  }

  return (
    <nav className={styles.header}>
      <div className={styles.header__container}>
        <ul className={styles.header__list}>
          <a className={styles.header__logo} href="/">ASVF Montagne</a>
          <a className={styles.header__logo__min} href="/">ASVF</a>
          <li className={router.pathname.includes('/club') ? styles.header__list__itemActive : styles.header__list__item}>
            <a className={styles.header__list__item__link} href="/club">Le Club</a>
          </li>
          <li className={router.pathname.includes('/stories') ? styles.header__list__itemActive : styles.header__list__item}>
            <a className={styles.header__list__item__link} href="/stories">Récits</a>
          </li>
        </ul>

        <ul className={styles.header__list}>
          <li className={router.pathname.includes('/sign-up') ? styles.header__list__itemActive : styles.header__list__item}>
            <a className={styles.header__list__item__link} href="/sign-up">Register</a>
          </li>
          <li className={styles.header__list__item}>
            <Button onClick={handleRedirection} type="light" focus="light">
              Connexion
            </Button>
          </li>
          <li className={styles.header__list__item} id="burger">
            <Button onClick={() => setIsMenuActive(!isMenuActive)} type="link" focus="primary">
              <Icon>{isMenuActive ? 'close' : 'menu'}</Icon>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}