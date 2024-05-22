import { Logo } from '../../atoms/Logo/Logo.jsx'
import { LoginRegisterForm } from '../../molecules/LoginRegisterForm/LoginRegisterForm.jsx'
import styles from './LoginRegisterWidget.module.scss'

const LoginRegisterWidget = ({
  destination,
  handleRegister,
  handleLogin,
  setEmail,
  setPassword,
  setUsername,
}) => {
  return (
    <div className={styles.widget}>
      <Logo />

      <LoginRegisterForm
        destination={destination}
        handleRegister={handleRegister}
        handleLogin={handleLogin}
        setEmail={setEmail}
        setPassword={setPassword}
        setUsername={setUsername}
      />
    </div>
  )
}

export { LoginRegisterWidget }
