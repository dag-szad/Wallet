import { ImageWithSubtitle } from '../../molecules/ImageWithSubtitle/ImageWithSubtitle.jsx'
import { LoginRegisterWidget } from '../../organisms/LoginRegisterWidget.jsx/LoginRegisterWidget.jsx'
import styles from './LoginRegisterTemplate.module.scss'

const LoginRegisterTemplate = ({ destination }) => {
  return (
    <div className={styles.template}>
      <ImageWithSubtitle destination={destination} />
      <div className={styles.template__background}>
        <LoginRegisterWidget destination={destination} />
      </div>
    </div>
  )
}

export { LoginRegisterTemplate }
