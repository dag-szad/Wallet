import { Logo } from '../../atoms/Logo/Logo.jsx'
import { LoginRegisterForm } from '../../molecules/LoginRegisterForm/LoginRegisterForm.jsx'
import { BasicButtons } from '../../atoms/BasicButtons/BasicButtons.jsx'
import styles from './LoginRegisterWidget.module.scss'

const LoginRegisterWidget = ({ destination }) => {
  return (
    <div className={styles.widget}>
      <Logo />
      <form action="" className={styles.widget__form}>
        <LoginRegisterForm destination={destination} />
        {destination === 'login' ? (
          <div className={styles.widget__buttons}>
            <BasicButtons name="Login" size="big" colorScheme="green" />
            <BasicButtons name="Register" size="big" colorScheme="white" />
          </div>
        ) : (
          <div className={styles.widget__buttons}>
            <BasicButtons name="Register" size="big" colorScheme="green" />
            <BasicButtons name="Log In" size="big" colorScheme="white" />
          </div>
        )}
      </form>
    </div>
  )
}

export { LoginRegisterWidget }
