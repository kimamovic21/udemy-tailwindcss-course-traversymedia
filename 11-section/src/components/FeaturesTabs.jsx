import { useState } from 'react'
import IllustrationFeaturesTab1 from '../assets/illustration-features-tab-1.svg'
import IllustrationFeaturesTab2 from '../assets/illustration-features-tab-2.svg'
import IllustrationFeaturesTab3 from '../assets/illustration-features-tab-3.svg'

const FeaturesTabs = () => {
  const [activeTab, setActiveTab] = useState(1)

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex)
  }

  return (
    <section id="tabs">

      {/* Tabs/Panels Container */}
      <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
        <div className="bg-tabs"></div>

        {/* Tabs Flex Container */}
        <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
          {/* Tab 1 */}
          <div
            onClick={() => handleTabClick(1)}
            className={`flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab ${
              activeTab === 1 ? 'border-softRed' : ''
            }`}
          >
            <div className={`py-5 ${activeTab === 1 ? 'border-b-4 border-softRed' : ''}`}>
              Simple Bookmarking
            </div>
          </div>

          {/* Tab 2 */}
          <div
            onClick={() => handleTabClick(2)}
            className={`flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab ${
              activeTab === 2 ? 'border-softRed' : ''
            }`}
          >
            <div className={`py-5 ${activeTab === 2 ? 'border-b-4 border-softRed' : ''}`}>
              Speedy Searching
            </div>
          </div>

          {/* Tab 3 */}
          <div
            onClick={() => handleTabClick(3)}
            className={`flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab ${
              activeTab === 3 ? 'border-softRed' : ''
            }`}
          >
            <div className={`py-5 ${activeTab === 3 ? 'border-b-4 border-softRed' : ''}`}>
              Easy Sharing
            </div>
          </div>
        </div>

        {/* Tab Panels */}
        <div id="panels" className="container mx-auto">
          {/* Panel 1 */}
          {activeTab === 1 && (
            <div className="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1">
              {/* Panel Image */}
              <div className="flex justify-center md:w-1/2">
                <img
                  src={IllustrationFeaturesTab1}
                  alt="Illustration Features Tab 1 Image"
                  className="relative z-10"
                />
              </div>
              {/* Panel Content */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Bookmark in one click
                </h3>
                <p className="max-w-md text-center text-grayishBlue md:text-left">
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how you
                  manage your favorite sites.
                </p>
                <div className="mx-auto md:mx-0">
                  <a
                    href="#"
                    className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Panel 2 */}
          {activeTab === 2 && (
            <div className="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-2">
              <div className="flex justify-center md:w-1/2">
                <img
                  src={IllustrationFeaturesTab2}
                  alt="Illustration Features Tab 2 Image"
                  className="relative z-10"
                />
              </div>
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Intelligent search
                </h3>
                <p className="max-w-md text-center text-grayishBlue md:text-left">
                  Our powerful search feature will help you find saved sites in no
                  time at all. No need to trawl through all of your bookmarks.
                </p>
                <div className="mx-auto md:mx-0">
                  <a
                    href="#"
                    className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Panel 3 */}
          {activeTab === 3 && (
            <div className="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-3">
              <div className="flex justify-center md:w-1/2">
                <img
                  src={IllustrationFeaturesTab3}
                  alt="Illustration Features Tab 3 Image"
                  className="relative z-10"
                />
              </div>
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Share your bookmarks
                </h3>
                <p className="max-w-md text-center text-grayishBlue md:text-left">
                  Easily share your bookmarks and collections with others. Create
                  a shareable a link that you can send at the click of a button.
                </p>
                <div className="mx-auto md:mx-0">
                  <a
                    href="#"
                    className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default FeaturesTabs