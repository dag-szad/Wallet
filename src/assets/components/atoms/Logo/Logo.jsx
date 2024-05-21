import logo from './logo.svg'
import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} role="presentation" className={styles.logo__icon} />
      <span className={styles.logo__title}>Wallet</span>
    </div>
  )
}

export { Logo }
