import { FaFacebook, FaTwitter } from 'react-icons/fa' 
import LogoBookmarkFooter from '../assets/logo-bookmark-footer.svg'

const Footer = () => {
  return (
    <footer className="py-16 bg-veryDarkBlue">

        {/* Footer Flex Container */}
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0">

            {/* Logo/Menu Container */}
            <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue">
                <img 
                    src={LogoBookmarkFooter} 
                    alt="Logo Bookmark Footer" 
                    className="mb-1" 
                />

                <a href="#features" className="uppercase hover:text-softRed">
                    Features
                </a>
                <a href="#download" className="uppercase hover:text-softRed">
                    Download
                </a>
                <a href="#faq" className="uppercase hover:text-softRed">
                    FAQ
                </a>
            </div>

            {/* Social Container */}
            <div className="flex space-x-10">
                <a href="#">
                   <FaFacebook color='white' />
                </a>
                <a href="#">
                   <FaTwitter color='white' />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer