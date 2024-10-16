import LogoChrome from '../assets/logo-chrome.svg'
import LogoFirefox from '../assets/logo-firefox.svg'
import LogoOpera from '../assets/logo-opera.svg'

const DownloadBoxes = () => {
  return (
    <section id="download-boxes" className="py-32">

      {/* Boxes Container */}
      <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">

        {/* Box 1 */}
        <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
          {/* Image */}
          <div className="flex justify-center">
            <img 
              src={LogoChrome} 
              alt='Logo Chrome' 
            />
          </div>
          {/* Text */}
          <h5 className="pt-6 text-xl font-bold">Add to Chrome</h5>
          <p className="text-gray-400">Minimum Version 62</p>

          {/* Dots */}
          <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
            <a
              href="#"
              className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue">
              Add & Install Extension
            </a>
          </div>
        </div>

        {/* Box 2 */}
        <div className="w-full md:w-1/3">
          <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-8">
            {/* Image */}
            <div className="flex justify-center">
              <img 
                src={LogoFirefox} 
                alt='Logo Firefox'
              />
            </div>
            {/* Text */}
            <h5 className="pt-6 text-xl font-bold">Add to Firefox</h5>
            <p className="text-gray-400">Minimum Version 55</p>

            {/* Dots */}
            <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
              <a
                href="#"
                className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue">
                  Add & Install Extension
                </a>
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="w-full md:w-1/3">
          <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-16">
            {/* Image */}
            <div className="flex justify-center">
              <img 
                src={LogoOpera} 
                alt="Logo Opera" 
               />
            </div>
            {/* Text */}
            <h5 className="pt-6 text-xl font-bold">Add to Opera</h5>
            <p className="text-gray-400">Minimum Version 46</p>

            {/* Dots */}
            <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
              <a
                href="#"
                className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue">
                  Add & Install Extension
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadBoxes