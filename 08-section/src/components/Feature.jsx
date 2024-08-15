import BrandRecognitionImage from '../assets/icon-brand-recognition.svg'
import DetailedRecordsImage from '../assets/icon-detailed-records.svg'
import FullyCustomizableImage from '../assets/icon-fully-customizable.svg'
import FeatureBox from './FeatureBox'

const Feature = () => {
  return (
    //  Feature Box Section 
    <section id="features" className="pb-32 bg-gray-100">
      <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">

        {/* Horizontal line */}
        <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block"></div>

        {/* Vertical line */}
        <div className="absolute w-2 left-1/2 h-2/3 -ml-1 bg-cyan md:hidden"></div>

        <FeatureBox 
            imageSrc={BrandRecognitionImage}
            imageAlt='BrandRecognitionImage'
            title='Brand Recognition Image'
            text='Boost your brand recognition with each click. Generic links don&apos;t
            mean a thing. Branded links help instil confidence in your content.'
        />
         <FeatureBox 
            imageSrc={DetailedRecordsImage}
            imageAlt='Detailed Records Image'
            title='Detailed records'
            text='Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.'
        />
         <FeatureBox 
            imageSrc={FullyCustomizableImage}
            imageAlt='Fully Customizable Image'
            title='Fully Customizable'
            text='Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.'
        />
      </div>
    </section>
  )
}

export default Feature