import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="bg-darkBlue2 text-white">
      <div className="container mx-auto pt-12 px-5 pb-10">

        {/* Flex Container For All Items */}
        <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">

          {/* Email & Phone */}
          <div className="mt-10 space-y-6">
            <div className="flex items-center space-x-3 md:-mt-10">
              <div className="w-6">
                <FaPhone size={20}/>
              </div>
              <div>+1-543-123-4567</div>
            </div>

            <div className="flex items-center space-x-3">
              <MdEmail size={20} />
              <div>example@fylo.com</div>
            </div>
          </div>

          {/* Menus */}
          <div className="flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row">
            <div className="flex flex-col space-y-3">
              <a href="#">About</a>
              <a href="#">Jobs</a>
              <a href="#">Press</a>
              <a href="#">Blog</a>
            </div>

            <div className="flex flex-col space-y-3">
              <a href="#">Contact Us</a>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>

          {/* Social */}
          <div className="flex justify-center pb-10 space-x-3">
            <div>
              <a href="#">
                <FaFacebook className='ficon' size={20} />
              </a>
            </div>

            <div>
              <a href="#">
                <FaXTwitter className='ficon' size={20} />
              </a>
            </div>

            <div>
              <a href="#">
                <FaInstagram size={20} className='ficon' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer