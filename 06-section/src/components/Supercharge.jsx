import IconBlacklist from '../assets/icon-blacklist.svg'
import IconText from '../assets/icon-text.svg'
import IconPreview from '../assets/icon-preview.svg'

const Supercharge = () => {
//   Supercharge Section
  return (
    <div>
        <div className="section-container my-20">
            <h3>Supercharge your workflow</h3>
            <p className="section-content text-xl mb-16"> 
                We&apos;ve got the tools to boost your productivity.
            </p>

            {/* Items Container */}
            <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">

                {/* Item 1 */}
                <div className="flex flex-col items-center space-y-5">
                    <img 
                        src={IconBlacklist} 
                        alt="" 
                        className="mb-6"
                    />
                    <h5>Create Blacklists</h5>
                    <p className='max-w-md text-grayishBlue'>
                        Easily search your snippets by content, category, web address, application, and more.
                    </p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center space-y-5">
                    <img 
                        src={IconText} 
                        alt="" 
                        className="mb-6"
                    />
                    <h5>Plain Text Snippets</h5>
                    <p className='max-w-md text-grayishBlue'>
                        Remove unwanted formatting from copied text for a consistent look.
                    </p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center space-y-5">
                    <img 
                        src={IconPreview} 
                        alt="" 
                        className="mb-6"
                    />
                    <h5>Create Blacklists</h5>
                    <p className='max-w-md text-grayishBlue'>
                        Quick preview of all snippets on your Clipboard for easy access.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Supercharge