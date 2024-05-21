const Icon = ({ name, style }) => {
  let icon = null

  switch (name) {
    case 'name':
      icon = (
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={style}
        >
          <path d="M0.5 2V16C0.5 17.1 1.39 18 2.5 18H16.5C17.6 18 18.5 17.1 18.5 16V2C18.5 0.9 17.6 0 16.5 0H2.5C1.39 0 0.5 0.9 0.5 2ZM12.5 6C12.5 7.66 11.16 9 9.5 9C7.84 9 6.5 7.66 6.5 6C6.5 4.34 7.84 3 9.5 3C11.16 3 12.5 4.34 12.5 6ZM3.5 14C3.5 12 7.5 10.9 9.5 10.9C11.5 10.9 15.5 12 15.5 14V15H3.5V14Z" />
        </svg>
      )
      break
    case 'email':
      icon = (
        <svg
          width="21"
          height="16"
          viewBox="0 0 21 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={style}
        >
          <path d="M18.5 0H2.5C1.4 0 0.51 0.9 0.51 2L0.5 14C0.5 15.1 1.4 16 2.5 16H18.5C19.6 16 20.5 15.1 20.5 14V2C20.5 0.9 19.6 0 18.5 0ZM18.5 4L10.5 9L2.5 4V2L10.5 7L18.5 2V4Z" />
        </svg>
      )
      break
    case 'password':
      icon = (
        <svg
          width="17"
          height="21"
          viewBox="0 0 17 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={style}
        >
          <path d="M14.5 7H13.5V5C13.5 2.24 11.26 0 8.5 0C5.74 0 3.5 2.24 3.5 5V7H2.5C1.4 7 0.5 7.9 0.5 9V19C0.5 20.1 1.4 21 2.5 21H14.5C15.6 21 16.5 20.1 16.5 19V9C16.5 7.9 15.6 7 14.5 7ZM8.5 16C7.4 16 6.5 15.1 6.5 14C6.5 12.9 7.4 12 8.5 12C9.6 12 10.5 12.9 10.5 14C10.5 15.1 9.6 16 8.5 16ZM11.6 7H5.4V5C5.4 3.29 6.79 1.9 8.5 1.9C10.21 1.9 11.6 3.29 11.6 5V7Z" />
        </svg>
      )
      break
    default:
      console.log('Icon component error')
      icon = null
  }

  return icon
}

export { Icon }
