import { Icon } from '../../../../../components/atoms/Icon/Icon'
import { Logo } from '../../../../../components/atoms/Logo/Logo'
import styles from './SideNav.module.scss'

const SideNav = () => {
  const classes = `${styles.side} ${styles.isHidden}`

  return (
    <div className={classes}>
      <Icon name="cancel" style={styles.side__icon} />
      <nav className={styles.side__nav}>
        <ul className={styles.nav}>
          <li>
            <Logo />
          </li>
          <li>
            <a href="#about" className={styles.nav__link}>
              about
            </a>
          </li>
          <li>
            <a href="#features" className={styles.nav__link}>
              features
            </a>
          </li>
          <li>
            <a href="#description" className={styles.nav__link}>
              how it works
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export { SideNav }
