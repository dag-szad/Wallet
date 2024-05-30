import { useState } from 'react'

import { HomePageHeader } from '../molecules/HomePageHeader/HomePageHeader.jsx'
import { HomePageBanner } from '../organisms/HomePageBanner/HomePageBanner.jsx'
import { HomePageAbout } from '../organisms/HomePageAbout/HomePageAbout.jsx'
import { SideNav } from '../atoms/SideNav/SideNav.jsx'

import styles from './HomePageTemplate.module.scss'

const HomePageTemplate = () => {
  const [navVisible, setNavVisible] = useState(false)

  const handleNav = (e) => {
    return navVisible === true ? setNavVisible(false) : setNavVisible(true)
  }

  return (
    <div className={styles.template}>
      <HomePageHeader setNavVisible={handleNav} />
      <HomePageBanner />
      <HomePageAbout />
      <SideNav visible={navVisible} setNavVisible={handleNav} />
    </div>
  )
}

export { HomePageTemplate }
