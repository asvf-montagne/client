import styles from './SubMenu.module.css';

const items = [
  {
    title: 'nouveau',
    links: [
      {
        label: 'Presentation du club',
        url: '/'
      },
      {
        label: "Ecole d'escalade",
        url: '/'
      },
      {
        label: "Le mur d'escalade",
        url: '/'
      },
      {
        label: 'Inscription au club',
        url: '/'
      }
    ]
  },
  {
    title: 'adhérent',
    links: [
      {
        label: 'Prochaines sorties',
        url: '/'
      },
      {
        label: "reglement interieur",
        url: '/'
      },
      {
        label: "Location materiel",
        url: '/'
      }
    ]
  },
  {
    title: 'infos',
    links: [
      {
        label: 'COVID-19',
        url: '/'
      },
      {
        label: "notices assurance",
        url: '/'
      },
      {
        label: "questionnaire santé",
        url: '/'
      }
    ]
  },
]

export default function SubMenu() {
  return (
    <div className={styles.submenu}>
      {items.map((item) => (
        <div className={styles.submenu_group}>
          <h6 className={styles.submenu_group_title}>
            {item.title}
          </h6>
          {item.links.map((link) => (
            <a className={styles.submenu_group_link} href={link.url}>
              {link.label}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}