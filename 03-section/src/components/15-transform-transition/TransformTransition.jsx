import LaptopImage from '../../assets/img1.jpg'

const TransformTransition = () => {
  return (
    <div>
        <button className="px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700">
            Click me
        </button>

        <button className="px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700 transition duration-200">
            Click me
        </button>

        <button className="px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700 hover:rotate-12 transition-transform duration-500">
            Click me
        </button>

        <img 
            className="w-48 hover:rotate-180 hover:scale-75 hover:skew-x-12 transition duration-1000"
            src={LaptopImage} 
            alt="Laptop Image" 
        />
    </div>
  )
}

export default TransformTransition