import { Link } from 'react-router-dom'

import { BasicButtons } from '../../components/atoms/BasicButtons/BasicButtons.jsx'
import ErrorImage from './ErrorImage.svg'
import Ellipse1 from './ellipse1.svg'
import Ellipse2 from './ellipse2.svg'
import Ellipse3 from './ellipse3.svg'

import styles from './ErrorPage.module.scss'

const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <div className={styles.errorPage__background}>
        <img
          src={Ellipse1}
          role="presentation"
          className={styles.errorPage__ellipse1}
        />
        <img
          src={Ellipse2}
          role="presentation"
          className={styles.errorPage__ellipse2}
        />
        <img
          src={Ellipse3}
          role="presentation"
          className={styles.errorPage__ellipse3}
        />
      </div>
      <div className={styles.errorPage__content}>
        <img
          src={ErrorImage}
          alt="Error robot"
          className={styles.errorPage__image}
        />
        <div className={styles.errorPage__info}>
          <h1 className={styles.errorPage__title}>
            It looks like the page doesn't exist!
          </h1>
          <p className={styles.errorPage__text}>
            Who knows what happened here...
          </p>
          <Link to="./home">
            <BasicButtons
              type="buton"
              name="Take me back"
              size="big"
              colorScheme="blue"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export { ErrorPage }
