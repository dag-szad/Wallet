import styles from './BasicButtons.module.scss'

const BasicButtons = ({ type, name, size, colorScheme, onClick }) => {
  const classes = `${styles.button} ${styles[size]} ${styles[colorScheme]}`

  return (
    <button type={type} className={classes} onClick={onClick}>
      {name}
    </button>
  )
}

export { BasicButtons }
