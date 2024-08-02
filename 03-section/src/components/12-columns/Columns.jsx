import LaptopImage from '../../assets/img1.jpg'

const Columns = () => {
  return (
    <div>
        <div className="columns-4 gap-1">
            <img 
                className="w-full" 
                src={LaptopImage}
                alt="Laptop Image" 
            />
            <img 
                className="w-full" 
                src={LaptopImage}
                alt="Laptop Image" 
            />
            <img 
                className="w-full" 
                src={LaptopImage}
                alt="Laptop Image" 
            />
            <img 
                className="w-full" 
                src={LaptopImage}
                alt="Laptop Image" 
            />
        </div>

        <div className="mt-2 columns-xs gap-1">
            <img 
                className="w-full" 
                src={LaptopImage}
                alt="Laptop Image" 
            />
            <img 
                className="w-full" 
                src={LaptopImage}
                alt="Laptop Image" 
            />
            <img 
                className="w-full" 
                src={LaptopImage}
                alt="Laptop Image" 
            />
            <img 
                className="w-full" 
                src={LaptopImage}
                alt="Laptop Image" 
            />
        </div>

        <div className="mt-2 columns-4">
            <img 
                className="w-full aspect-video" 
                src={LaptopImage}
                alt="Laptop Image" 
            />
            <img 
                className="w-full aspect-square" 
                src={LaptopImage}
                alt="Laptop Image" 
            />
            <img 
                className="w-full aspect-auto" 
                src={LaptopImage}
                alt="Laptop Image" 
            />
            <img 
                className="w-full" 
                src={LaptopImage}
                alt="Laptop Image" 
            />
        </div>
    </div>
  )
}

export default Columns