import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Icon from '@material-ui/core/Icon'
import styles from './DashboardNavigation.module.css'

NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  url: PropTypes.string.isRequired,
}

function NavLink({ name, icon, url }) {
  const router = useRouter()

  const active = router.pathname.startsWith(url)

  return (
    <li className={`${styles.link} ${active ? styles.link_active : ''}`}>
      {icon && <Icon>{icon}</Icon>}
      <Link href={url}>{name}</Link>
    </li>
  )
}

export default function DashboardNavigation() {
  const links = [
    {
      name: 'Mes détails',
      icon: 'settings',
      url: '/dashboard/settings',
    },
    {
      name: 'Récits',
      icon: 'menu_book',
      url: '/dashboard/stories',
    },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.container_inner}>
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
    </div>
  )
}
