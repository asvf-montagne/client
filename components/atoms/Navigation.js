import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Icon from '@material-ui/core/Icon'
import Button from '@components/atoms/Button'
import useWindowSize from '@hooks/useWindowSize'
import { navItems } from '../../helpers/config'
import styles from './Navigation.module.css'
import useUser from '@hooks/useUser'

NavLink.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subItems: PropTypes.array,
}

function NavLink({ url, title, subItems }) {
  const router = useRouter()
  const { width: size } = useWindowSize()

  return (
    <li className={styles.header__list__item}>
      <a
        className={styles.header__list__item__link}
        onClick={() => router.push(url)}
      >
        {title}
      </a>
      {!!subItems.length && size > 768 && (
        <div className={styles.submenu_container}>
          <div className={styles.submenu}>
            {subItems.map((item, index) => (
              <div key={index} className={styles.submenu_group}>
                <h6 className={styles.submenu_group_title}>{item.title}</h6>
                {item.links.map((link, index) => (
                  <a
                    key={index}
                    className={styles.submenu_group_link}
                    onClick={() => router.push(link.url)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </li>
  )
}

NavLinkMin.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subItems: PropTypes.array,
}

function NavLinkMin({ url, title, subItems }) {
  const router = useRouter()

  return (
    <>
      <li className={styles.header__menu__item}>
        <a
          className={styles.header__menu__item__link}
          onClick={() => router.push(url)}
        >
          {title}
        </a>
      </li>
      {!!subItems.length &&
        subItems.map((item, index) => (
          <div key={index}>
            <li className={styles.header__menu__item}>
              <p className={styles.header__menu__item__link_sub_title}>
                {item.title}
              </p>
            </li>
            {item.links.map((link, index) => (
              <li key={index} className={styles.header__menu__item}>
                <a
                  className={styles.header__menu__item__link_sub_link}
                  onClick={() => router.push(link.url)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </div>
        ))}
    </>
  )
}

NavButton.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

function NavButton({ url, title }) {
  const router = useRouter()

  return (
    <li className={styles.header__list__item}>
      <Button
        size="medium"
        onClick={() => router.push(url)}
        variant="light"
        focus="light"
      >
        {title}
      </Button>
    </li>
  )
}

export default function Navigation() {
  const { user } = useUser()
  const { width: size } = useWindowSize()
  const router = useRouter()
  const [isMenuActive, setIsMenuActive] = useState(false)

  const onSmallDevice = size < 768 && isMenuActive
  const isAuthenticated = user !== undefined

  useEffect(() => {
    if (size > 768) {
      setIsMenuActive(false)
    }
  }, [size])

  console.log('user', user)

  if (onSmallDevice) {
    return (
      <nav className={styles.header}>
        <div className={styles.header__container}>
          <ul className={styles.header__menu}>
            <>
              <a
                className={styles.header__logo}
                onClick={() => router.push('/')}
              >
                ASVF Montagne
              </a>
              <a
                className={styles.header__logo__min}
                onClick={() => router.push('/')}
              >
                ASVF
              </a>
            </>

            {isAuthenticated && (
              <NavButton title="Logout" url="/auth/sign-up" />
            )}
            {!isAuthenticated && (
              <NavLinkMin
                title="Inscription"
                url="/auth/sign-up"
                subItems={[]}
              />
            )}
            {!isAuthenticated && (
              <NavLinkMin title="Connexion" url="/auth/sign-in" subItems={[]} />
            )}

            {navItems
              .find(({ type }) => type === 'links')
              .items.map(({ title, url, items = [] }, index) => (
                <NavLinkMin
                  title={title}
                  url={url}
                  subItems={items}
                  key={index}
                />
              ))}
          </ul>
        </div>
      </nav>
    )
  }

  return (
    <nav className={styles.header}>
      <div className={styles.header__container}>
        <ul className={styles.header__list}>
          <>
            <a className={styles.header__logo} onClick={() => router.push('/')}>
              ASVF Montagne
            </a>
            <a
              className={styles.header__logo__min}
              onClick={() => router.push('/')}
            >
              ASVF
            </a>
          </>

          {navItems
            .find(({ type }) => type === 'links')
            .items.map(({ title, url, items = [] }, index) => (
              <NavLink title={title} url={url} subItems={items} key={index} />
            ))}
        </ul>

        <ul className={styles.header__list}>
          {isAuthenticated && <NavButton title="Logout" url="/auth/sign-up" />}
          {!isAuthenticated && (
            <NavLink title="Connexion" url="/auth/sign-in" subItems={[]} />
          )}
          {!isAuthenticated && (
            <NavButton title="Inscription" url="/auth/sign-up" />
          )}

          <li className={styles.header__list__item} id="burger">
            <Button
              onClick={() => setIsMenuActive(!isMenuActive)}
              size="medium"
              variant="light"
              focus="light"
            >
              <Icon>{isMenuActive ? 'close' : 'menu'}</Icon>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
