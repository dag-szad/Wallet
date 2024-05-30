import { Link } from 'react-router-dom'

import { BasicButtons } from '../../../../../components/atoms/BasicButtons/BasicButtons.jsx'
import BannerImage from './BannerImage.svg'

import styles from './HomePageBanner.module.scss'

const HomePageBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__info}>
        <h1 className={styles.banner__title}>
          Manage Your Finances with Wallet
        </h1>
        <h2 className={styles.banner__subtitle}>
          Your personal finance assistant - always at your fingertips.
        </h2>
        <Link to="./register">
          <BasicButtons
            type="button"
            name="Join now"
            size="big"
            colorScheme="blue"
          />
        </Link>
      </div>
      <img
        src={BannerImage}
        alt="Laptop with finance app."
        className={styles.banner__image}
      />
    </div>
  )
}

export { HomePageBanner }
