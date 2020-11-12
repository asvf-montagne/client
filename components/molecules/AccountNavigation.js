import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Icon from '@material-ui/core/Icon'
import styles from './AccountNavigation.module.css'

NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  url: PropTypes.string.isRequired,
}

function NavLink({ name, icon, url }) {
  const router = useRouter()
  const active = router.pathname === url

  return (
    <li className={`${styles.link} ${active ? styles.link_active : ''}`}>
      {icon && <Icon>{icon}</Icon>}
      <a href={url}>{name}</a>
    </li>
  )
}

export default function AccountNavigation() {
  const links = [
    {
      name: 'Mes détails',
      icon: 'settings',
      url: '/account/settings',
    },
    {
      name: 'Récits',
      icon: 'menu_book',
      url: '/account/stories',
    },
    {
      name: 'Sorties',
      icon: 'event',
      url: '/account/stories',
    },
  ]

  return (
    <div className={styles.container}>
      <ul className={styles.links}>
        {links.map((link, index) => (
          <NavLink
            key={index}
            name={link.name}
            icon={link.icon}
            url={link.url}
          />
        ))}
      </ul>
    </div>
  )
}
