import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FormInput } from '../../atoms/FormInput/FormInput.jsx'
import { BasicButtons } from '../../atoms/BasicButtons/BasicButtons.jsx'
import styles from './LoginRegisterForm.module.scss'

const LoginRegisterForm = ({
  destination,
  handleRegister,
  handleLogin,
  setEmail,
  setPassword,
  setUsername,
}) => {
  const [usernameInput, setUsernameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitting form with the following details:')
    console.log(
      `Email: ${emailInput}, Password: ${passwordInput}, Username: ${usernameInput}`
    )

    if (destination === 'login') {
      handleLogin({ email: emailInput, password: passwordInput })
    } else {
      if (passwordInput !== passwordConfirm) {
        setPasswordError('Passwords do not match')
      } else {
        setUsername(usernameInput)
        setEmail(emailInput)
        setPassword(passwordInput)
        handleRegister()
        console.log('Registration button clicked')
      }
    }
  }

  const handleUsernameChange = (e) => {
    setUsernameInput(e.target.value)
    setUsername(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value)
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value)
    setPassword(e.target.value)
  }

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value)
  }

  const handleLinkButton = () => {}

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormInput
        name="email"
        type="email"
        placeholder="E-mail"
        value={emailInput}
        onChange={handleEmailChange}
      />
      <FormInput
        name="password"
        type="password"
        placeholder="Password"
        value={passwordInput}
        onChange={handlePasswordChange}
      />
      {destination !== 'login' && (
        <>
          <FormInput
            name="password-confirm"
            type="password"
            placeholder="Confirm password"
            value={passwordConfirm}
            onChange={handlePasswordConfirmChange}
          />
          <FormInput
            name="username"
            type="text"
            placeholder="First name"
            value={usernameInput}
            onChange={handleUsernameChange}
          />
        </>
      )}

      <div className={styles.form__buttons}>
        <BasicButtons
          type="submit"
          name={destination === 'login' ? 'Login' : 'Register'}
          size="big"
          colorScheme="green"
        />
        {destination === 'login' ? (
          <Link to="/register">
            <BasicButtons
              type="button"
              name="Register"
              size="big"
              colorScheme="white"
            />
          </Link>
        ) : (
          <Link to="/login">
            <BasicButtons
              type="button"
              name="Log In"
              size="big"
              colorScheme="white"
            />
          </Link>
        )}
      </div>
    </form>
  )
}

export { LoginRegisterForm }
