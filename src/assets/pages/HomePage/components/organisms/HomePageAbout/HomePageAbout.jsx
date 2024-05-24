import { Icon } from '../../../../../components/atoms/Icon/Icon.jsx'
import styles from './HomePageAbout.module.scss'

const HomePageAbout = () => {
  return (
    <div id="about" className={styles.about}>
      <h2 className={styles.about__title}>About</h2>
      <p className={styles.about__description}>
        Wallet was created to make managing and tracking your budget easier than
        ever.
        <br />
        With an intuitive interface, it helps you calculate how much you need to
        save and offers simple solutions to keep your finances in check.
      </p>
      <div className={styles.about__info}>
        <ul className={styles.about__cards}>
          <li className={styles.card}>
            <Icon name="bulb" className="" />
            <h3 className={styles.card__title}>Easy Budgeting</h3>
            <p className={styles.card__text}>
              Simplify your financial planning with our user-friendly tools.
            </p>
          </li>
          <li className={styles.card}>
            <Icon name="reports" className="" />
            <h3 className={styles.card__title}>Expense Tracking</h3>
            <p className={styles.card__text}>
              Keep an eye on your spending with reports and analytics.
            </p>
          </li>
          <li className={styles.card}>
            <Icon name="graph" className="" />
            <h3 className={styles.card__title}>Savings Goals</h3>
            <p className={styles.card__text}>
              Set and track savings goals to achieve your financial dreams.
            </p>
          </li>
          <li className={styles.card}>
            <Icon name="clock" className="" />
            <h3 className={styles.card__title}>Real-Time Updates</h3>
            <p className={styles.card__text}>
              Get instant updates on your financial status and transactions.
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export { HomePageAbout }
