import { Layout } from "../../components/layout"
import { ENGLISH_JOURNEY_DATA } from "../../data/english-journey-data"
import { EnglishJourneyCard } from "../../components/english-journey-card"

const Home = (): React.JSX.Element => {
  return (
    <Layout>    
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center justify-items-center place-items-center gap-4 xl:gap-8 py-4 w-full max-w-screen-xl m-auto'>
      {ENGLISH_JOURNEY_DATA.map((journeyInfo) => (
        <EnglishJourneyCard key={journeyInfo.id} journeyInfo={journeyInfo} />
      ))}
    </div>
    </Layout>
  )
}

export {Home}