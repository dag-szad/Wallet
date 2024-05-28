import { Link } from 'react-router-dom'

import { Logo } from '../../../../../components/atoms/Logo/Logo.jsx'
import { Icon } from '../../../../../components/atoms/Icon/Icon.jsx'
import { BasicButtons } from '../../../../../components/atoms/BasicButtons/BasicButtons.jsx'

import styles from './HomePageHeader.module.scss'

const HomePageHeader = ({ setNavVisible }) => {
  return (
    <div className={styles.header}>
      <Logo />
      <nav>
        <ul className={styles.header__nav}>
          <li>
            <a href="#about" className={styles.header__link}>
              about
            </a>
          </li>
          <li>
            <a href="#features" className={styles.header__link}>
              features
            </a>
          </li>
          <li>
            <a href="#description" className={styles.header__link}>
              how it works
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.header__buttons}>
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
      <div className={styles.hamburger}>
        <button className={styles.hamburger__button} onClick={setNavVisible}>
          <Icon name="hamburger" style={styles.hamburger__icon} />
        </button>
      </div>
    </div>
  )
}

export { HomePageHeader }
