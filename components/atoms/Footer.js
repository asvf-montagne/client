import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <ul className={styles.footer__list}>
            <h3 className={styles.footer__title}>ASVF Montagne</h3>
            <li className={styles.footer__item}>
              <a href="/" className={styles.footer__link}>
                Le club
              </a>
            </li>
            <li className={styles.footer__item}>
              <a href="/" className={styles.footer__link}>
                Récits
              </a>
            </li>
            <li className={styles.footer__item}>
              <a href="/" className={styles.footer__link}>
                Programmes
              </a>
            </li>
            <li className={styles.footer__item}>
              <a href="/" className={styles.footer__link}>
                Galerie
              </a>
            </li>
            <li className={styles.footer__item}>
              <a href="/" className={styles.footer__link}>
                Connexion
              </a>
            </li>
            <li className={styles.footer__item}>
              <a href="/" className={styles.footer__link}>
                Inscription
              </a>
            </li>
          </ul>

          <ul className={styles.footer__list}>
            <h3 className={styles.footer__title}>Les liens</h3>
            <li className={styles.footer__item}>
              <a href="/" className={styles.footer__link}>
                Villefontaine
              </a>
            </li>
            <li className={styles.footer__item}>
              <a href="/" className={styles.footer__link}>
                Météo grimpe
              </a>
            </li>
            <li className={styles.footer__item}>
              <a href="/" className={styles.footer__link}>
                Kinéscalade
              </a>
            </li>
            <li className={styles.footer__item}>
              <a href="/" className={styles.footer__link}>
                Camptocamp
              </a>
            </li>
            <li className={styles.footer__item}>
              <a href="/" className={styles.footer__link}>
                Skitour
              </a>
            </li>
            <li className={styles.footer__item}>
              <a href="/" className={styles.footer__link}>
                FFH
              </a>
            </li>
          </ul>

          <ul className={styles.footer__list}>
            <h3 className={styles.footer__title}>Partenaires</h3>
            <li className={styles.footer__item}>
              <a
                href="https://www.petzl.com/FR/fr"
                className={styles.footer__link}
              >
                Petzel
              </a>
            </li>
            <li className={styles.footer__item}>
              <a
                href="https://www.haribo.com/fr-fr"
                className={styles.footer__link}
              >
                Haribo
              </a>
            </li>
            <li className={styles.footer__item}>
              <a href="https://www.expe.fr/" className={styles.footer__link}>
                Expe
              </a>
            </li>
            <li className={styles.footer__item}>
              <a
                href="https://www.auvieuxcampeur.fr/"
                className={styles.footer__link}
              >
                Au vieux campeur
              </a>
            </li>
            <li className={styles.footer__item}>
              <a href="https://www.simond.fr/" className={styles.footer__link}>
                Simond
              </a>
            </li>
            <li className={styles.footer__item}>
              <a
                href="https://www.sport2000.fr/"
                className={styles.footer__link}
              >
                Sport 2000
              </a>
            </li>
          </ul>

          <ul className={styles.footer__list}>
            <h3 className={styles.footer__title}>Le site</h3>
            <li className={styles.footer__item}>
              <a href="/" className={styles.footer__link}>
                Sitemap
              </a>
            </li>
            <li className={styles.footer__item}>
              <a href="/" className={styles.footer__link}>
                Mentions légales
              </a>
            </li>
            <li className={styles.footer__item}>
              <a href="/" className={styles.footer__link}>
                Flux RSS
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}
