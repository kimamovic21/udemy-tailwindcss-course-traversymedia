import { FaCheck } from "react-icons/fa"
import { Link } from "react-router-dom"

const PricingBasicCard = () => {
  return (
    // Col 1
    <div className="bg-slate-700 rounded-xl text-white">

        {/* Upper Container */}
        <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
            <div className="text-center uppercase">
                Basic
            </div>
            <h2 className="mt-10 font-serif text-5xl text-center">
                100GB
            </h2>
            <h3 className="mt-2 text-center">
                $1.99/Month
            </h3>
            <div className="flex justify-center">
                <Link to='/purchase' className='inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg duration-200 hover:bg-violet-800 hover:border-violet-800'>
                    Purchase
                </Link>
            </div>
        </div>

        {/* Border */}
        <div className="border-t border-slate-700"></div>

        {/* Lower Container */}
        <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">

            {/* List Container */}
            <div className="flex flex-col space-y-2">

                {/* List Item 1 */}
                <div className="flex justify-center">
                    <FaCheck />
                    <span className='text-sm ml-1'>100 GB of storage</span>
                </div>
                {/* List Item 2 */}
                <div className="flex justify-center">
                    <FaCheck />
                    <span className='text-sm ml-1'>Option to add members</span>
                </div>
                {/* List Item 3 */}
                <div className="flex justify-center">
                    <FaCheck />
                    <span className='text-sm ml-1'>Extra member benefits</span>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default PricingBasicCard