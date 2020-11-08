import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Icon from '@material-ui/core/Icon';
import Button from '@components/atoms/Button';
import SubMenu from '@components/atoms/SubMenu';
import styles from './Navigation.module.css';
import useWindowSize from "@hooks/useWindowSize";

export default function Navigation() {
  const router = useRouter();
  const { width: size } = useWindowSize();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const isAuthenticated = false;

  const handleRedirection = () => {
    router.push('/sign-up')
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
            <div className={styles.submenu_container}>
              <SubMenu />
            </div>
          </li>
          <li className={styles.header__list__item}>
            <a className={styles.header__list__item__link} href="/stories">Récits</a>
          </li>
          <li className={styles.header__list__item}>
            <a className={styles.header__list__item__link} href="/contact">Contact</a>
          </li>
        </ul>

        <ul className={styles.header__list}>
          {!isAuthenticated && (
            <>
              <li className={styles.header__list__item}>
                <a className={styles.header__list__item__link} href="/sign-in">Connexion</a>
              </li>
              <li className={styles.header__list__item}>
                <Button size="medium" onClick={handleRedirection} variant="light" focus="light">
                  Inscription
                </Button>
              </li>
            </>
          ) || (
            <li className={styles.header__list__item}>
              <Button onClick={handleRedirection} size="medium" variant="light" focus="light">
                Logout
              </Button>
            </li>
          )}
          <li className={styles.header__list__item} id="burger">
            <Button onClick={() => setIsMenuActive(!isMenuActive)} size="medium" variant="light" focus="light">
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
                  <a className={styles.header__menu__item__link} href="/sign-in">Connexion</a>
                </li>
                <li className={styles.header__menu__item}>
                  <a className={styles.header__menu__item__link} href="/sign-up">Inscription</a>
                </li>
              </>
            ) || (
              <li className={styles.header__menu__item}>
                <Button onClick={handleRedirection} variant="light" size="medium" focus="light">
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