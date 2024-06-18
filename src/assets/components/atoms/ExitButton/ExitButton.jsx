import { Link } from 'react-router-dom'

import exitIcon from './exit.svg'
import styles from './ExitButton.module.scss'

const ExitButton = ({ logOut }) => {
  return (
    <button onClick={logOut}>
      <Link to="/" className={styles.exit}>
        <img src={exitIcon} role="presentation" className={styles.exit__icon} />
        <p>Exit</p>
      </Link>
    </button>
  )
}

export { ExitButton }
