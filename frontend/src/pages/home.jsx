import Bestseller from '../components/bestseller'
import Hero from '../components/hero'
import LatestCollection from '../components/latestcollection'
import Ourpolicy from '../components/ourpolicy'
import Newsletterbox from '../components/newsletterbox'

const home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <Bestseller/>
      <Ourpolicy/>
      <Newsletterbox/>
    </div>
  )
}

export default home
