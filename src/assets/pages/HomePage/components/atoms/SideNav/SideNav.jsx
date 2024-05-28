import { Link } from 'react-router-dom'

import { Icon } from '../../../../../components/atoms/Icon/Icon.jsx'
import { Logo } from '../../../../../components/atoms/Logo/Logo.jsx'
import { BasicButtons } from '../../../../../components/atoms/BasicButtons/BasicButtons.jsx'

import styles from './SideNav.module.scss'

const SideNav = ({ visible, setNavVisible }) => {
  const classes =
    visible !== true ? `${styles.side} ${styles.isHidden}` : `${styles.side}`

  return (
    <div className={classes}>
      <div onClick={setNavVisible}>
        <Icon name="cancel" style={styles.side__icon} />
      </div>

      <nav className={styles.side__nav}>
        <ul className={styles.nav}>
          <li onClick={setNavVisible}>
            <Logo />
          </li>
          <li onClick={setNavVisible}>
            <a href="#about" className={styles.nav__link}>
              about
            </a>
          </li>
          <li onClick={setNavVisible}>
            <a href="#features" className={styles.nav__link}>
              features
            </a>
          </li>
          <li onClick={setNavVisible}>
            <a href="#description" className={styles.nav__link}>
              how it works
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.side__buttons}>
        <Link to="/login">
          <BasicButtons
            type="button"
            name="Log in"
            size="medium"
            colorScheme="white"
          />
        </Link>
        <Link to="/register">
          <BasicButtons
            type="button"
            name="Sign up"
            size="medium"
            colorScheme="green"
          />
        </Link>
      </div>
    </div>
  )
}

export { SideNav }
