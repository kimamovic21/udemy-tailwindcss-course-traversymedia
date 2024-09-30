import BgQuotes from '../assets/bg-quotes.png'
import ProfileOne from '../assets/profile-1.jpg'
import ProfileTwo from '../assets/profile-2.jpg'
import ProfileThree from '../assets/profile-3.jpg'

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-50 dark:bg-darkBlue">
      {/* Testimonials Container */}
      <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
        
        {/* Boxes Container */}
        <div className="relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12">

          {/* Quotes Image */}
          <img
            src={BgQuotes}
            alt="Background Quotes"
            className="absolute left-1 -top-2 w-10 md:-top-16 md:w-20"
          />

          {/* Box 1 */}
          <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3">
            <p className="text-sm leading-5 md:text-lg">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            {/* Customer Info */}
            <div className="flex space-x-4">
              <img
                src={ProfileOne}
                alt="Cliene One Image"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h5 className="text-sm font-semibold">Satish Patel</h5>
                <p className="text-xs font-extralight">Founder & CEO. Huddle</p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3">
            <p className="text-sm leading-5 md:text-lg">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            {/* Customer Info */}
            <div className="flex space-x-4">
              <img
                src={ProfileTwo}
                alt="Client Two Image"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h5 className="text-sm font-semibold">Bruce McKenzie</h5>
                <p className="text-xs font-extralight">Founder & CEO. Huddle 2</p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3">
            <p className="text-sm leading-5 md:text-lg">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            {/* Customer Info */}
            <div className="flex space-x-4">
              <img
                src={ProfileThree}
                alt="Client Three Image"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h5 className="text-sm font-semibold">John Doe</h5>
                <p className="text-xs font-extralight">Founder & CEO. Huddle 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials