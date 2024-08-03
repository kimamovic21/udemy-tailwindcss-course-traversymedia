import { FaArrowRight, FaFacebook } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import GoogleButton from 'react-google-button';
import WaterImage from '../../assets/water.jpg'

const LoginModal = () => {
  return (
    // Global Container
    <div className="font-sans flex items-center justify-center min-h-screen bg-rose-50">

        {/* Card Container  */}
        <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">

            {/* Left Side */}
            <div className="p-6 md:p-20">
                {/* Top Content */}
                <h2 className='font-mono mb-5 text-4xl font-bold'>Log In</h2>
                <p className='max-w-sm mb-12 font-sans font-light text-gray-600'>
                    Log in to your account to upload or download pictures, videos or music.
                </p>
                <input 
                    type="text" 
                    placeholder='Enter your email address'
                    className='w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light' 
                />

                {/* Middle Content */}
                <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
                    <div className="font-thin text-cyan-700">
                        Forgot Password
                    </div>
                    <button className='w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-sm px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 sm:shadow-lg hover:shadow-lg border transition hover:-translate-y-0.5 duration-150'>
                        <span>Next</span>
                        <FaArrowRight />
                    </button>
                </div>

                {/* Border */}
                <div className="mt-12 border-b border-b-gray-300"></div>

                {/* Bottom Content */}
                <p className='py-6 text-sm font-thin text-center text-gray-400'>
                    or log in with
                </p>

                {/* Bottom Buttons Container */}
                <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
                    <button className='flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2'>
                        <FaFacebook className='text-3xl text-blue-800'/>
                        <span className='font-this'>Facebook</span>
                    </button>
                    
                    <button className='flex items-center justify-center space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2'>
                        <GoogleButton 
                            type='dark'
                            label='Google'
                            style={{ width: '100%' }}
                        />
                    </button>
                </div>
            </div>

            {/* Right Side */}
            <img 
                src={WaterImage}
                alt="Water Image" 
                className="w-[430px] hidden md:block"
            />

            {/* Close Button */}
            <div className="group absolute -top-5 right-4 md:bg-white rounded-full md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150">
                <IoIosCloseCircle className="w-6 h-6 text-red-500 group-hover:text-red-600" />
            </div>
        </div>
    </div>
  )
}

export default LoginModal