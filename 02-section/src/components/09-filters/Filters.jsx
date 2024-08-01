import LaptopImage from '../../assets/img1.jpg'
import LaptopImage2 from '../../assets/img2.jpg'
import RobotImage from '../../assets/img3.jpg'
import LaptopImage3 from '../../assets/img4.jpg'
import LaptopInside from '../../assets/img5.jpg'

const Filters = () => {
  return (
    <div>
        <div className="blur">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod nobis atque nesciunt 
            ipsa autem, minima, perspiciatis est similique voluptatem nulla repudiandae? A nisi veniam 
            iusto fugit illo temporibus placeat.
        </div>

        <div className="blur-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore asperiores suscipit dignissimos, 
            saepe molestias, repellat iste sequi quae impedit modi earum pariatur. Nostrum placeat autem velit 
            nihil laboriosam blanditiis fuga!
        </div>

        <img 
            className='blur-xl' 
            src={LaptopImage} 
            alt="Laptop Image" 
        />

        <img 
            className='brightness-50' 
            src={LaptopImage2} 
            alt="Laptop Image" 
        />
        <img 
            className='brightness-75' 
            src={LaptopImage2} 
            alt="Laptop Image" 
        />
        <img 
            className='brightness-100' 
            src={LaptopImage2} 
            alt="Laptop Image" 
        />
        <img 
            className='brightness-150' 
            src={LaptopImage2} 
            alt="Laptop Image" 
        />
        <img 
            className='brightness-200' 
            src={LaptopImage2} 
            alt="Laptop Image" 
        />

        <img 
            className='contrast-0' 
            src={RobotImage} 
            alt="Laptop Image" 
        />
        <img 
            className='contrast-50' 
            src={RobotImage} 
            alt="Laptop Image" 
        />
        <img 
            className='contrast-100' 
            src={RobotImage} 
            alt="Laptop Image" 
        />
        <img 
            className='contrast-150' 
            src={RobotImage} 
            alt="Laptop Image" 
        />
        <img 
            className='contrast-200' 
            src={RobotImage} 
            alt="Laptop Image" 
        />

        <img 
            className='grayscale' 
            src={LaptopImage3} 
            alt="Laptop Image" 
        />

        <img 
            className='invert' 
            src={LaptopImage3} 
            alt="Laptop Image" 
        />

        <img 
            className='sepia' 
            src={LaptopImage3} 
            alt="Laptop Image" 
        />

        <img 
            className='hue-rotate-15' 
            src={LaptopInside} 
            alt="Laptop Image" 
        />
         <img 
            className='hue-rotate-60' 
            src={LaptopInside}  
            alt="Laptop Image" 
        />
         <img 
            className='hue-rotate-90' 
            src={LaptopInside}  
            alt="Laptop Image" 
        />
         <img 
            className='hue-rotate-180' 
            src={LaptopInside}  
            alt="Laptop Image" 
        />
    </div>
  )
}

export default Filters