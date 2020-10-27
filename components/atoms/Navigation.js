import { useRouter } from 'next/router';
import styles from './Navigation.module.css';

export default function Navigation() {
  const router = useRouter()

  return (
    <nav className={styles.header}>
      <div className={styles.header__container}>
        <ul className={styles.header__list}>
          <h1 className={styles.header__logo}>ASVF Montagne</h1>
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
          <li className={router.pathname.includes('/sign-in') ? styles.header__list__itemActive : styles.header__list__item}>
            <a className={styles.header__list__item__link} href="/sign-in">Sign In</a>
          </li>
          {/*<Button onClick={handleRedirection} type="plain-white" size="medium" style={{ marginLeft: 32 }}>*/}
          {/*  Connexion*/}
          {/*</Button>*/}
        </ul>
      </div>
    </nav>
  );
}