import styles from './SubMenu.module.css';

export default function SubMenu() {
  return (
    <div className={styles.submenu}>
      <div className={styles.submenu_group}>
        <h6 className={styles.submenu_group_title}>
          nouveau ?
        </h6>
        <a className={styles.submenu_group_link} href="">
          Présentation du club
        </a>
        <a className={styles.submenu_group_link} href="">
          École d'éscalade
        </a>
        <a className={styles.submenu_group_link} href="">
          Le mur d'éscalade
        </a>
        <a className={styles.submenu_group_link} href="">
          Adhésion au club
        </a>
      </div>
      <div className={styles.submenu_group}>
        <h6 className={styles.submenu_group_title}>
          adhérent
        </h6>
        <a className={styles.submenu_group_link} href="">
          Prochaines sorties
        </a>
        <a className={styles.submenu_group_link} href="">
          Réglement intérieur
        </a>
        <a className={styles.submenu_group_link} href="">
          Location matériel
        </a>
        <a className={styles.submenu_group_link} href="">
          COVID-19
        </a>
      </div>
    </div>
  );
}