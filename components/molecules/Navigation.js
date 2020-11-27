import { Children, useMemo, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Icon from '@material-ui/core/Icon'
import Button from '@components/atoms/Button'
import useUser from '@hooks/useUser'
import useWindowSize from '@hooks/useWindowSize'
import TokenHelper from '@helpers/token'
import styles from './Navigation.module.css'

export default function Navigation() {
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
          <a
            className={styles.header_inner_header_logo}
            onClick={() => router.push('/')}
          >
            {onSmallDevice ? 'ASVF' : 'ASVF Montagne'}
          </a>
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
                  title="Le Club"
                  onSmallDevice={onSmallDevice}
                >
                  <DropDownCol title="nouveau ?">
                    <DropDownItem onClick={() => router.push('/club')}>
                      Presentation du club
                    </DropDownItem>
                    <DropDownItem onClick={() => router.push('/climbing-school')}>
                      Ecole d&apos;escalade
                    </DropDownItem>
                    <DropDownItem onClick={() => router.push('/club')}>
                      Le mur d&apos;escalade
                    </DropDownItem>
                    <DropDownItem onClick={() => router.push('/club')}>
                      Inscription au club
                    </DropDownItem>
                  </DropDownCol>

                  <DropDownCol title="adhérent">
                    <DropDownItem onClick={() => router.push('/club')}>
                      Prochaines sorties
                    </DropDownItem>
                    <DropDownItem onClick={() => router.push('/club')}>
                      reglement interieur
                    </DropDownItem>
                    <DropDownItem onClick={() => router.push('/club')}>
                      Location materiel
                    </DropDownItem>
                    <DropDownItem onClick={() => router.push('/club')}>
                      COVID-19
                    </DropDownItem>
                  </DropDownCol>
                </NavLinkWithDropDown>
              </li>
              <li className={styles.header_inner_left_item}>
                <NavLink
                  title="Récits"
                  onClick={() => router.push('/stories')}
                />
              </li>
              <li className={styles.header_inner_left_item}>
                <NavLink
                  title="Contact"
                  onClick={() => router.push('/contact')}
                />
              </li>
            </ul>

            <ul className={styles.header_inner_right}>
              {isAuthenticated && (
                <li className={styles.header_inner_right_item}>
                  <NavLinkWithDropDown
                    title={user.username}
                    onSmallDevice={onSmallDevice}
                  >
                    <DropDownCol>
                      <DropDownItem
                        onClick={() => router.push('/dashboard/settings')}
                      >
                        Mes details
                      </DropDownItem>
                      <DropDownItem
                        onClick={() => router.push('/dashboard/stories')}
                      >
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
                    <NavLink
                      title="Connexion"
                      onClick={() => router.push('/auth/sign-in')}
                    />
                  </li>
                  <li className={styles.header_inner_right_item}>
                    <Button
                      size="medium"
                      onClick={() => router.push('/auth/sign-up')}
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
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

function NavLink({ title, onClick }) {
  return (
    <a className={styles.header_item} onClick={onClick}>
      {title}
    </a>
  )
}

NavLinkWithDropDown.propTypes = {
  title: PropTypes.string.isRequired,
  onSmallDevice: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

function NavLinkWithDropDown({ title, onSmallDevice, children }) {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [flash, setFlash] = useState(true)
  const count = Children.count(children)
  const showDropDown = useMemo(
    () => !onSmallDevice || (onSmallDevice && isMenuActive),
    [onSmallDevice, isMenuActive],
  )

  useEffect(() => {
    const item = window.localStorage.getItem('flash')

    if (item) {
      const { value } = JSON.parse(item)
      if (!value) {
        setFlash(false)
      } else {
        setFlash(true)
      }
    }
  }, [])

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
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

function DropDownItem({ onClick, children, ...props }) {
  return (
    <div
      className={styles.header_dropdown_inner_col_item}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  )
}
