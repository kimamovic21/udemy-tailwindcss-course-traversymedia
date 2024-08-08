import DeepEarthDesktopImage from '../assets/desktop/image-deep-earth.jpg'
import DeepEarthMobileImage from '../assets/mobile/image-deep-earth.jpg'
import NightArcadeDesktopImage from '../assets/desktop/image-night-arcade.jpg'
import NightArcadeMobileImage from '../assets/mobile/image-night-arcade.jpg'
import FootballTeamDesktopImage from '../assets/desktop/image-football-team.jpg'
import FootballTeamMobileImage from '../assets/mobile/image-football-team.jpg'
import TheGridDesktopImage from '../assets/desktop/image-grid.jpg'
import TheGridMobileImage from '../assets/mobile/image-grid.jpg'
import FromAboveDesktopImage from '../assets/desktop/image-from-above.jpg'
import FromAboveMobileImage from '../assets/mobile/image-from-above.jpg'
import PocketBorealisDesktopImage from '../assets/desktop/image-pocket-borealis.jpg'
import PocketBorealisMobileImage from '../assets/mobile/image-pocket-borealis.jpg'
import CuriosityDesktopImage from '../assets/desktop/image-curiosity.jpg'
import CuriosityMobileImage from '../assets/mobile/image-curiosity.jpg'
import FisheyeDesktopImage from '../assets/desktop/image-fisheye.jpg'
import FisheyeMobileImage from '../assets/mobile/image-fisheye.jpg'

import CreationsItem from './CreationsItem'

const Creations = () => {
    // Creations Section
  return (
    <section id='creations'>

        {/* Creations Container */}
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
            
            {/* Creations Header */}
            <div className="flex justify-center mb-20 md:justify-between">
                <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
                    Our Creations
                </h2>

                <button className="hidden btn md:block">
                    See All
                </button>
            </div>

            {/* Item Container 1 */}
            <div className='item-container'>
                <CreationsItem 
                    desktopImage={DeepEarthDesktopImage}
                    mobileImage={DeepEarthMobileImage}
                    altText='Deep Earth Image'
                    title='Deep Earth'
                />
                <CreationsItem 
                    desktopImage={NightArcadeDesktopImage}
                    mobileImage={NightArcadeMobileImage}
                    altText='Night Arcade'
                    title='Night Arcade'
                />
                <CreationsItem 
                    desktopImage={FootballTeamDesktopImage}
                    mobileImage={FootballTeamMobileImage}
                    altText='Football Team VR'
                    title='Football Team VR'
                />
                <CreationsItem 
                    desktopImage={TheGridDesktopImage}
                    mobileImage={TheGridMobileImage}
                    altText='The Grid'
                    title='The Grid'
                />
            </div>

            {/* Item Container 2 */}
            <div className='item-container mt-10'>
                <CreationsItem 
                    desktopImage={FromAboveDesktopImage}
                    mobileImage={FromAboveMobileImage}
                    altText='From Up Above VR Image'
                    title='From Up Above VR'
                />
                <CreationsItem 
                    desktopImage={PocketBorealisDesktopImage }
                    mobileImage={PocketBorealisMobileImage }
                    altText='Pocket Borealis Image'
                    title='Pocket Borealis'
                />
                <CreationsItem 
                    desktopImage={CuriosityDesktopImage}
                    mobileImage={CuriosityMobileImage}
                    altText='The Curiosity Image'
                    title='The Curiosity'
                />
                <CreationsItem 
                    desktopImage={FisheyeDesktopImage}
                    mobileImage={FisheyeMobileImage}
                    altText='Make It Fisheye Image'
                    title='Make It Fisheye'
                />
            </div>
        </div>

        {/* Bottom Button Container */}
        <div className="flex justify-center mt-10 md:hidden">
            <button className='btn w-full md:hidden'>
                See All
            </button>
        </div>
    </section>
  )
}

export default Creations