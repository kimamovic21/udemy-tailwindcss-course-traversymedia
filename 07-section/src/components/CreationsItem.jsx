const CreationsItem = ({ desktopImage, mobileImage, altText, title }) => {
  return (
    // Item 
    <div className="group item">
        {/* Desktop Image */}
        <img 
            src={desktopImage}
            alt={altText} 
            className="hidden w-full duration-200 md:block group-hover:scale-110"
        />
        {/* Mobile Image */}
        <img 
            src={mobileImage}
            alt={altText} 
            className="w-full md:hidden"
        />
        {/* Item Gradient */}
        <div className='item-gradient'></div>

        {/* Item Text */}
        <h5>
            {title}
        </h5>
    </div>
  )
}

export default CreationsItem