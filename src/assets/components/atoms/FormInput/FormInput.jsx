import { Icon } from '../Icon/Icon.jsx'
import styles from './FormInput.module.scss'

const FormInput = ({ name, placeholder }) => {
  return (
    <div className={styles.formInput}>
      <label htmlFor={name} className={styles.formInput__img}>
        <Icon name={name} style={styles.formInput__icon} />
      </label>
      <input
        type={name}
        id={name}
        name={name}
        placeholder={placeholder}
        className={styles.formInput__input}
      />
    </div>
  )
}

export { FormInput }
