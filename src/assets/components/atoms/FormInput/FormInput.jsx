import { Icon } from '../Icon/Icon.jsx'
import styles from './FormInput.module.scss'

const FormInput = ({ name, type, placeholder, value, onChange }) => {
  return (
    <div className={styles.formInput}>
      <label htmlFor={name} className={styles.formInput__img}>
        <Icon name={name} style={styles.formInput__icon} />
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={styles.formInput__input}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export { FormInput }
