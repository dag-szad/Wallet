import nameIcon from './name.svg'
import emailIcon from './email.svg'
import passwordIcon from './password.svg'
import styles from './FormInput.module.scss'

const FormInput = ({ name, placeholder, onSubmit }) => {
  let src
  switch (name) {
    case 'name':
      src = nameIcon
      break
    case 'email':
      src = emailIcon
      break
    case 'password':
      src = passwordIcon
      break
    default:
      src = ''
      break
  }

  return (
    <div className={styles.formInput}>
      <label htmlFor={name}>
        <img src={src} alt={name} className={styles.formInput__icon} />
      </label>
      <input
        type={name}
        id={name}
        name={name}
        placeholder={placeholder}
        onSubmit={onSubmit}
        className={styles.formInput__input}
      />
    </div>
  )
}

export { FormInput }
