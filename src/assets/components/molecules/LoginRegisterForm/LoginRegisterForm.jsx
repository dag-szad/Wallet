import { FormInput } from '../../atoms/FormInput/FormInput.jsx'
import style from './LoginRegisterForm.module.scss'

const LoginRegisterForm = ({ destination }) => {
  if (destination === 'login') {
    return (
      <div className={style.inputs}>
        <FormInput name="email" placeholder="E-mail" />
        <FormInput name="password" placeholder="Password" />
      </div>
    )
  } else {
    return (
      <div className={style.inputs}>
        <FormInput name="email" placeholder="E-mail" />
        <FormInput name="password" placeholder="Password" />
        <FormInput name="password" placeholder="Confirm password" />
        <FormInput name="name" placeholder="First name" />
      </div>
    )
  }
}

export { LoginRegisterForm }