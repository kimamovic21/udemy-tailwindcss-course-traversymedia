import { Link } from 'react-router-dom'
import LogoImage from '../assets/logo.svg'

const Hero = () => {
  return (
    // Hero Section
    <section id="hero" className='bg-contain bg-hero-pattern-mobile sm:bg-hero-pattern-desktop bg-no-repeat'>
      <div className="section-container mb-40 pt-16">
        <img src={LogoImage} alt="Logo Image" className='mx-auto my-16'/>
        <h3>
          A history of everything you copy
        </h3>
        <p className='section-content text-xl mb-10'>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>

        {/* Button Container */}
        <div className="button-container">
          <Link 
            to='#' 
            className='p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80'
          >
            Download for iOS
          </Link>
          <Link 
            to='#' 
            className='p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80'
          >
            Download for Mac
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero