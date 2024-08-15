import Feature from "./components/Feature"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Shorten from "./components/Shorten"
import Stats from "./components/Stats"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Shorten />
      <Stats />
      <Feature />
      <CTA />
      <Footer />
    </div>
  )
}

export default App