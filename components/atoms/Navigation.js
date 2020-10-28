import { useRouter } from 'next/router';
import Button from '@components/atoms/Button';
import styles from './Navigation.module.css';

export default function Navigation() {
  const router = useRouter();

  const handleRedirection = () => {
    router.push('/sign-in')
  }

  return (
    <nav className={styles.header}>
      <div className={styles.header__container}>
        <ul className={styles.header__list}>
          <a className={styles.header__logo} href="/">ASVF Montagne</a>
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
          <Button onClick={handleRedirection} type="light" style={{ marginLeft: 32 }}>
            Connexion
          </Button>
        </ul>
      </div>
    </nav>
  );
}