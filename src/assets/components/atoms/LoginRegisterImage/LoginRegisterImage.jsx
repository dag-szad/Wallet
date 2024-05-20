import React from 'react'
import PropTypes from 'prop-types'
import loginImage from './login.svg'
import registerImage from './register.svg'
import styles from './LoginRegisterImage.module.scss'

const LoginRegisterImage = ({ destination }) => {
  if (destination === 'login') {
    return <img src={loginImage} className={styles.image} role="presentation" />
  } else if (destination === 'register') {
    return (
      <img src={registerImage} className={styles.image} role="presentation" />
    )
  } else {
    console.error(
      'Error: LoginRegisterImage component received an invalid destination prop'
    )
    return null
  }
}

LoginRegisterImage.propTypes = {
  destination: PropTypes.oneOf(['login', 'register']).isRequired,
}

export { LoginRegisterImage }
