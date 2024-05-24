import { HomePageHeader } from '../molecules/HomePageHeader/HomePageHeader.jsx'
import { HomePageBanner } from '../organisms/HomePageBanner/HomePageBanner.jsx'
import { HomePageAbout } from '../organisms/HomePageAbout/HomePageAbout.jsx'

const HomePageTemplate = () => {
  return (
    <div >
      <HomePageHeader />
      <HomePageBanner />
      <HomePageAbout />
    </div>
  )
}

export { HomePageTemplate }
