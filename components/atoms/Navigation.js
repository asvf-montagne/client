import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Icon from '@material-ui/core/Icon';
import Button from '@components/atoms/Button';
import styles from './Navigation.module.css';
import useWindowSize from "@hooks/useWindowSize";

export default function Navigation() {
  const router = useRouter();
  const { width: size } = useWindowSize();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const isAuthenticated = false;

  const handleRedirection = () => {
    router.push('/sign-in')
  }

  useEffect(() => {
    if (size > 768) {
      setIsMenuActive(false);
    }
  }, [size])

  return (
    <nav className={styles.header}>
      <div className={styles.header__container}>
        <ul className={styles.header__list}>
          <a className={styles.header__logo} href="/">ASVF Montagne</a>
          <a className={styles.header__logo__min} href="/">ASVF</a>
          <li className={styles.header__list__item}>
            <a className={styles.header__list__item__link} href="/club">Le Club</a>
          </li>
          <li className={styles.header__list__item}>
            <a className={styles.header__list__item__link} href="/stories">Récits</a>
          </li>
        </ul>

        <ul className={styles.header__list}>
          {!isAuthenticated && (
            <>
              <li className={styles.header__list__item}>
                <a className={styles.header__list__item__link} href="/sign-up">Register</a>
              </li>
              <li className={styles.header__list__item}>
                <Button onClick={handleRedirection} type="light" focus="light">
                  Connexion
                </Button>
              </li>
            </>
          ) || (
            <li className={styles.header__list__item}>
              <Button onClick={handleRedirection} type="light" focus="light">
                Logout
              </Button>
            </li>
          )}
          <li className={styles.header__list__item} id="burger">
            <Button onClick={() => setIsMenuActive(!isMenuActive)} type="link" focus="primary">
              <Icon>{isMenuActive ? 'close' : 'menu'}</Icon>
            </Button>
          </li>
        </ul>
      </div>
      {size < 768 && isMenuActive && (
        <div className={styles.header__container}>
          <ul className={styles.header__menu}>
            {!isAuthenticated && (
              <>
                <li className={styles.header__menu__item}>
                  <a className={styles.header__menu__item__link} href="/sign-up">Register</a>
                </li>
                <li className={styles.header__menu__item}>
                  <a className={styles.header__menu__item__link} href="/sign-in">Connexion</a>
                </li>
              </>
            ) || (
              <li className={styles.header__menu__item}>
                <Button onClick={handleRedirection} type="light" focus="light">
                  Logout
                </Button>
              </li>
            )}
            <li className={styles.header__menu__item}>
              <a className={styles.header__menu__item__link} href="/club">Le Club</a>
            </li>
            <li className={styles.header__menu__item}>
              <a className={styles.header__menu__item__link} href="/stories">Récits</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}