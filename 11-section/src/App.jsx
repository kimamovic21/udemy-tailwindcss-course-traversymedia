import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturesHeading from './components/FeaturesHeading'
import FeaturesTabs from './components/FeaturesTabs'
import DownloadHeading from './components/DownloadHeading'
import DownloadBoxes from './components/DownloadBoxes'
import FAQHeading from './components/FAQHeading'
import FAQAccordion from './components/FAQAccordion'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

const App = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <FeaturesHeading />
      <FeaturesTabs />
      <DownloadHeading />
      <DownloadBoxes />
      <FAQHeading />
      <FAQAccordion />
      <Newsletter />
      <Footer />
    </section>
  )
}

export default App