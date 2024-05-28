const Icon = ({ name, style }) => {
  let icon = null

  switch (name) {
    case 'username':
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
    case 'password-confirm':
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
    case 'bulb':
      icon = (
        <svg
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={style}
        >
          <path
            d="M19.6021 37.7058H32.1021"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.6854 43.9558H30.0188"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.6038 31.4558C19.6041 27.2891 18.5624 26.2475 16.4788 24.1641C14.3951 22.0808 13.4025 19.9702 13.3538 16.8725C13.2538 10.5189 17.5201 6.45581 25.8537 6.45581C34.1875 6.45581 38.4537 10.5189 38.3537 16.8725C38.305 19.9702 37.3118 22.0808 35.2287 24.1641C33.1458 26.2475 32.1041 27.2891 32.1037 31.4558"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
      break
    case 'reports':
      icon = (
        <svg
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={style}
        >
          <path
            d="M19.2687 43.9558H31.7687M19.2687 43.9558V33.5391M19.2687 43.9558H8.01868C7.32832 43.9558 6.76868 43.3962 6.76868 42.7058V34.7891C6.76868 34.0987 7.32832 33.5391 8.01868 33.5391H19.2687M31.7687 43.9558V18.9558M31.7687 43.9558H43.0187C43.7091 43.9558 44.2687 43.3962 44.2687 42.7058V7.70581C44.2687 7.01546 43.7091 6.45581 43.0187 6.45581H33.0187C32.3283 6.45581 31.7687 7.01546 31.7687 7.70581V18.9558M19.2687 33.5391V20.2058C19.2687 19.5155 19.8283 18.9558 20.5187 18.9558H31.7687"
            stroke="black"
            strokeWidth="3"
          />
        </svg>
      )
      break
    case 'graph':
      icon = (
        <svg
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={style}
        >
          <path
            d="M41.852 41.8724H8.51868V8.53906"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.51868 34.5808L25.1853 18.9558L31.4353 25.2058L40.8103 15.8308"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
      break
    case 'clock':
      icon = (
        <svg
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={style}
        >
          <path
            d="M25.8521 12.7058V25.2058H38.3521"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.8521 46.0392C37.3579 46.0392 46.6854 36.7117 46.6854 25.2059C46.6854 13.7 37.3579 4.37256 25.8521 4.37256C14.3461 4.37256 5.01874 13.7 5.01874 25.2059C5.01874 36.7117 14.3461 46.0392 25.8521 46.0392Z"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
      break
    case 'hamburger':
      icon = (
        <svg
          width="25"
          height="26"
          viewBox="0 0 25 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={style}
        >
          <path
            d="M3.125 5.70825H21.875M3.125 12.9999H21.875M3.125 20.2916H21.875"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
      break
    case 'cancel':
      icon = (
        <svg
          width="19"
          height="19"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={style}
        >
          <path
            d="M2.41736 17.4297L9.91736 9.92969M9.91736 9.92969L17.4174 2.42969M9.91736 9.92969L2.41736 2.42969M9.91736 9.92969L17.4174 17.4297"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
