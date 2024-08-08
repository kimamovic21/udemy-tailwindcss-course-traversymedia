import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaCopyright } from 'react-icons/fa'

import LogoImage from '../assets/logo.svg'
import FooterItem from './FooterItem'
import FooterIcon from './FooterIcon'

const Footer = () => {
  return (
    <footer className="bg-[#141313]">
      {/* Container */}

        <div className="container max-w-6xl py-10 mx-auto">
        {/* Footer Flex Container  */}

            <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">

                  {/* Menu & Logo Container  */}
                <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
                    
                    {/* Logo  */}
                    <div className="h-8">
                        <img 
                          src={LogoImage} 
                          alt="Logo Image" 
                          className="w-44 md:ml-3" 
                        />
                    </div>

                    {/* Menu Container  */}
                    <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                      <FooterItem info='About' />
                      <FooterItem info='Careers' />
                      <FooterItem info='Events' />
                      <FooterItem info='Products' />
                      <FooterItem info='Support' />
                    </div>
                </div>

                {/* Social & Copy Container  */}
                <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">

                    {/* Icons Container */}
                    <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
                        <FooterIcon icon={<FaFacebook size={20} />} />
                        <FooterIcon icon={<FaTwitter size={20} />} />
                        <FooterIcon icon={<FaPinterest size={20} />} />
                        <FooterIcon icon={<FaInstagram size={20} />} />
                    </div>

                    {/* Copy Container */}
                    <div className="font-bold flex gap-1 items-center">
                        <span>Kerim</span> 
                        <span><FaCopyright /></span>
                        <span>2024 Loopstudios. All Rights Reserved.</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer