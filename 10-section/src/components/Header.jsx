import { AiOutlineSun } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="container mx-auto mt-10 px-6 text-center h-40 md:h-20">

      {/* Dynamic Logo Logic */}
      <div className="bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat h-20 w-48 mx-auto md:mx-0 md:absolute top-10 left-10"></div>
      
      <div className="flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10">
        <a href="#features" className="hover:text-accentCyan">Features</a>
        <a href="#testimonials" className="hover:text-accentCyan">Testimonials</a>
        
        <button
          onClick={toggleDarkMode}
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2"
        >
          {darkMode ? <AiOutlineSun size={24} /> : <FaMoon size={24} />}
        </button>
      </div>
    </header>
  )
}

export default Header
