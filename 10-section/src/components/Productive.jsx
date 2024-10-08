import { FaArrowCircleRight } from 'react-icons/fa'
import IllustrationStayProductive from '../assets/illustration-stay-productive.png'

const Productive = () => {
  return (
    <section id="productive" className="bg-white dark:bg-darkBlue">

      {/* Productive Container */}
      <div className="container flex flex-col items-center mx-auto px-6 pt-24 pb-32 md:flex-row md:space-x-16">
        
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={IllustrationStayProductive}
            alt="Illustration Stay Productive"
            className="mb-10"
          />
        </div>
        
        {/* Content */}
        <div className="flex flex-col items-start md:w-1/2">
          <div className="flex flex-col space-y-5">
            <h4 className="max-w-md text-xl font-bold md:text-4xl">
              Stay productive, wherever you are
            </h4>
            
            <p className="text-md md:text-lg">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>

            <p className="text-md md:text-lg">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>

          {/* Link */}
          <div className="block mt-4">
            <a href="#" className="flex items-center border-b border-accentCyan text-accentCyan">
              See how Flyo works
              <span className='ml-2'><FaArrowCircleRight /></span> 
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Productive