import { Layout } from "../../components/layout"
import { ENGLISH_JOURNEY_DATA } from "../../data/english-journey-data"
import { EnglishJourneyCard } from "../../components/english-jouney-card"

const Home = (): React.JSX.Element => {
  return (
    <Layout>    
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-3'>
      {ENGLISH_JOURNEY_DATA.map((journeyInfo) => (
        <EnglishJourneyCard key={journeyInfo.id} journeyInfo={journeyInfo} />
      ))}
    </div>
    </Layout>
  )
}

export {Home}