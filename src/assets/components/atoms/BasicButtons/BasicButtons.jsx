import styles from './BasicButtons.module.scss'

const BasicButtons = ({ name, size, colorScheme, onClick }) => {
  const classes = `${styles.button} ${styles[size]} ${styles[colorScheme]}`

  return (
    <button type="button" className={classes} onClick={onClick}>
      {name}
    </button>
  )
}

export { BasicButtons }
