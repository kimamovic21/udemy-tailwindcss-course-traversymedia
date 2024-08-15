import { useState, useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import LogoImage from '../assets/logo.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Nav Container */}
      <nav className="relative container mx-auto p-6">
        {/* Flex Container For All Items */}
        <div className="flex items-center justify-between">
          {/* Flex Container For Logo/Menu */}
          <div className="flex items-center space-x-20">
            {/* Logo */}
            <img src={LogoImage} alt="Logo Image" />

            {/* Left Menu */}
            <div className="hidden space-x-8 font-bold lg:flex">
              <a href="#" className="text-grayishViolet hover:text-veryDarkViolet">
                Features
              </a>
              <a href="#" className="text-grayishViolet hover:text-veryDarkViolet">
                Pricing
              </a>
              <a href="#" className="text-grayishViolet hover:text-veryDarkViolet">
                Resources
              </a>
            </div>
          </div>

          {/* Right Buttons Menu */}
          <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
            <div className="hover:text-veryDarkViolet">Login</div>
            <a href="#" className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70">
              Sign Up
            </a>
          </div>

          {/* Hamburger Button or Close Icon */}
          <button
            onClick={navToggle}
            className="lg:hidden z-50"
          >
            {menuOpen ? <IoClose size={30} /> : <RxHamburgerMenu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="menu"
          className={`absolute p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-40 ${
            menuOpen ? 'flex' : 'hidden'
          } flex-col items-center justify-center space-y-6 font-bold text-white`}
        >
          <a href="#" className="w-full text-center">Features</a>
          <a href="#" className="w-full text-center">Pricing</a>
          <a href="#" className="w-full text-center">Resources</a>
          <a href="#" className="w-full pt-6 border-t border-gray-400 text-center">Login</a>
          <a href="#" className="w-full py-3 text-center rounded-full bg-cyan">Sign Up</a>
        </div>
      </nav>

      {/* Background Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={navToggle}
        ></div>
      )}
    </>
  );
};

export default Navbar;
