import { Logo } from '../../../../../components/atoms/Logo/Logo.jsx'
import { ExitButton } from '../../../../../components/atoms/ExitButton/ExitButton.jsx'

import styles from './AppHeader.module.scss'

const AppHeader = ({ UserName, logOut }) => {
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.header__buttons}>
        <p>{UserName}</p>
        |
        <ExitButton logOut={logOut} />
      </div>
    </div>
  )
}

export { AppHeader }
