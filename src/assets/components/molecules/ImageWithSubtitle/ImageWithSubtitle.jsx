import { LoginRegisterImage } from '../../atoms/LoginRegisterImage/LoginRegisterImage.jsx'
import styles from './ImageWithSubtitle.module.scss'

const ImageWithSubtitle = ({ destination }) => {
  return (
    <div className={styles.container}>
      <LoginRegisterImage destination={destination} />
      <h2 className={styles.subtitle}>Finance App</h2>
    </div>
  )
}

export { ImageWithSubtitle }
