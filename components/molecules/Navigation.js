import Button from '@components/atoms/Button'
import TokenHelper from '@helpers/token'
import useUser from '@hooks/useUser'
import useWindowSize from '@hooks/useWindowSize'
import Icon from '@material-ui/core/Icon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { Children, forwardRef, useEffect, useMemo, useState } from 'react'
import styles from './Navigation.module.css'

Navigation.propTypes = {
  flash: PropTypes.bool.isRequired,
}

export default function Navigation({ flash }) {
  const router = useRouter()
  const { user, setUser } = useUser()
  const { width: size } = useWindowSize()
  const isAuthenticated = useMemo(() => user !== undefined, [user])
  const onSmallDevice = useMemo(() => size < 768, [size])
  const [isMenuActive, setIsMenuActive] = useState(false)

  function onLogout() {
    setUser(undefined)
    TokenHelper.removeToken()
    router.push('/auth/sign-in')
  }

  useEffect(() => {
    if (!onSmallDevice && isMenuActive) {
      setIsMenuActive(false)
    }
  }, [onSmallDevice, isMenuActive])

  return (
    <header className={styles.header}>
      <div
        className={`${styles.header_inner} ${
          onSmallDevice ? styles.header_inner_reduced : ''
        }`}
      >
        <div
          className={`${styles.header_inner_header} ${
            onSmallDevice ? styles.header_inner_header_reduced : ''
          }`}
        >
          <Link href="/" scroll={false}>
            <a className={styles.header_inner_header_logo}>
              {onSmallDevice ? 'ASVF' : 'ASVF Montagne'}
            </a>
          </Link>

          {onSmallDevice && (
            <Button
              onClick={() => setIsMenuActive(!isMenuActive)}
              size="medium"
              variant="light"
              focus="light"
            >
              <Icon style={{ fontSize: 22 }}>
                {isMenuActive ? 'close' : 'menu'}
              </Icon>
            </Button>
          )}
        </div>

        {!(!isMenuActive && onSmallDevice) && (
          <nav
            className={`${styles.header_inner_nav} ${
              onSmallDevice ? styles.header_inner_nav_reduced : ''
            }`}
          >
            <ul className={styles.header_inner_left}>
              <li className={styles.header_inner_left_item}>
                <NavLinkWithDropDown
                  flash={flash}
                  title="Le Club"
                  onSmallDevice={onSmallDevice}
                >
                  <DropDownCol title="nouveau ?">
                    <DropDownItem href="/">Presentation du club</DropDownItem>
                    <DropDownItem href="/climbing-school">
                      Ecole d&apos;escalade
                    </DropDownItem>
                    <DropDownItem href="/climbing-slots">
                      Créneaux escalade
                    </DropDownItem>
                    <DropDownItem href="/">Inscription au club</DropDownItem>
                  </DropDownCol>

                  <DropDownCol title="adhérent">
                    <DropDownItem href="/">Prochaines sorties</DropDownItem>
                    <DropDownItem href="/">reglement interieur</DropDownItem>
                    <DropDownItem href="/">Location materiel</DropDownItem>
                    <DropDownItem href="/">COVID-19</DropDownItem>
                  </DropDownCol>
                </NavLinkWithDropDown>
              </li>
              <li className={styles.header_inner_left_item}>
                <NavLink href="/stories" title="Récits" />
              </li>
              <li className={styles.header_inner_left_item}>
                <NavLink href="/contact" title="Contact" />
              </li>
            </ul>

            <ul className={styles.header_inner_right}>
              {isAuthenticated && (
                <li className={styles.header_inner_right_item}>
                  <NavLinkWithDropDown
                    flash={flash}
                    title={user.username}
                    onSmallDevice={onSmallDevice}
                  >
                    <DropDownCol>
                      <DropDownItem href="/dashboard/settings">
                        Mes details
                      </DropDownItem>

                      <DropDownItem href="/dashboard/stories">
                        Recits
                      </DropDownItem>

                      <DropDownItem onClick={onLogout}>
                        {!onSmallDevice && (
                          <span
                            className={
                              styles.header_dropdown_inner_col_item_logout
                            }
                          >
                            Déconnexion
                          </span>
                        )}
                        {onSmallDevice && 'Déconnexion'}
                      </DropDownItem>
                    </DropDownCol>
                  </NavLinkWithDropDown>
                </li>
              )}
              {!isAuthenticated && (
                <>
                  <li className={styles.header_inner_right_item}>
                    <NavLink href="/auth/sign-in" title="Connexion" />
                  </li>
                  <li className={styles.header_inner_right_item}>
                    <Button
                      size="medium"
                      link={{ href: '/auth/sign-up', scroll: false }}
                      variant="light"
                      focus="light"
                    >
                      Inscription
                    </Button>
                  </li>
                </>
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

function NavLink({ href, title }) {
  return (
    <Link href={href} scroll={false}>
      <a className={styles.header_item}>{title}</a>
    </Link>
  )
}

NavLinkWithDropDown.propTypes = {
  title: PropTypes.string.isRequired,
  flash: PropTypes.bool.isRequired,
  onSmallDevice: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

function NavLinkWithDropDown({ title, flash, onSmallDevice, children }) {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const count = Children.count(children)
  const showDropDown = useMemo(
    () => !onSmallDevice || (onSmallDevice && isMenuActive),
    [onSmallDevice, isMenuActive],
  )

  useEffect(() => {
    if (!onSmallDevice && isMenuActive) {
      setIsMenuActive(false)
    }
  }, [onSmallDevice, isMenuActive])

  return (
    <>
      <a
        className={styles.header_item}
        onClick={() => {
          if (onSmallDevice) {
            setIsMenuActive(!isMenuActive)
          }
        }}
      >
        {title}
        <Icon>
          {isMenuActive ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
        </Icon>
      </a>
      {showDropDown && (
        <div
          className={`${
            onSmallDevice
              ? styles.header_dropdown_reduced
              : styles.header_dropdown
          }
            ${flash ? styles.header_dropdown_lower : ''}
          `}
        >
          <div
            className={`${styles.header_dropdown_inner} ${
              styles[`header_dropdown_inner_${count}`]
            }`}
          >
            {children}
          </div>
        </div>
      )}
    </>
  )
}

DropDownCol.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

function DropDownCol({ title, children, ...props }) {
  return (
    <div className={styles.header_dropdown_inner_col} {...props}>
      {title && (
        <h6 className={styles.header_dropdown_inner_col_title}>{title}</h6>
      )}
      {children}
    </div>
  )
}

DropDownItem.propTypes = {
  onClick: PropTypes.func,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
}

function DropDownItem({ href, onClick, children, ...props }) {
  const Item = forwardRef(({ href }, ref) => (
    <a
      ref={ref}
      href={href}
      className={styles.header_dropdown_inner_col_item}
      onClick={onClick}
      {...props}
    >
      {children}
    </a>
  ))

  Item.displayName = 'Item'

  return (
    <>
      {href ? (
        <Link href={href} scroll={false} passHref>
          <Item />
        </Link>
      ) : (
        <Item />
      )}
    </>
  )
}
