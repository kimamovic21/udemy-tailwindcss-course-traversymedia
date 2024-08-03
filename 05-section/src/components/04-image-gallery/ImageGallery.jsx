import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

import ImageOne from '../../assets/image1.jpg'
import ImageTwo from '../../assets/image2.jpg'
import ImageThree from '../../assets/image3.jpg'
import ImageFour from '../../assets/image4.jpg'
import ImageFive from '../../assets/image5.jpg'
import ImageSix from '../../assets/image6.jpg'
import ImageComponent from './ImageComponent';

const ImageGallery = () => {
  return (
    // Global Container
    <div className="flex items-center justify-center min-h-screen bg-cyan-50">

        {/* Card Container */}
        <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">

            {/* Menu Container */}
            <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
                
                {/* Menu Items */}
                <div className="group">
                    <Link to='/vector'>Vector</Link>
                    <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100">
                    </div>
                </div>
                <div className="group">
                    <Link to='/illustrations'>Illustrations</Link>
                    <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100">
                    </div>
                </div>
                <div className="group">
                    <Link to='/images'>Images</Link>
                    <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100">
                    </div>
                </div>
                <div className="group">
                    <Link to='/icons'>Icons</Link>
                    <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100">
                    </div>
                </div>
            </div>

            {/* Search Container */}
            <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">

                {/* Input and React Icon Container */}
                <div className="flex justify-between border-b">
                    <input 
                        type="text" 
                        placeholder='Search'
                        className="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none" 
                    />
                    <button>
                        <FaSearch className='text-gray-400'/>
                    </button>
                </div>

                {/* Upload Button */}
                <button className='py-3 px-14 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black'>
                    Upload
                </button>
            </div>

            {/* Gallery Container */}
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                {/* Images */}
                <ImageComponent 
                    image={ImageOne}
                    title='Abstract painting'
                    desc='245 likes - 35 Shares'
                />
                <ImageComponent 
                    image={ImageTwo}
                    title='Abstract painting'
                    desc='245 likes - 35 Shares'
                />
                <ImageComponent 
                    image={ImageThree}
                    title='Abstract painting'
                    desc='245 likes - 35 Shares'
                />
                <ImageComponent 
                    image={ImageFour}
                    title='Abstract painting'
                    desc='245 likes - 35 Shares'
                />
                <ImageComponent 
                    image={ImageFive}
                    title='Abstract painting'
                    desc='245 likes - 35 Shares'
                />
                <ImageComponent 
                    image={ImageSix}
                    title='Abstract painting'
                    desc='245 likes - 35 Shares'
                />
            </div>
        </div>
    </div>
  )
}

export default ImageGallery