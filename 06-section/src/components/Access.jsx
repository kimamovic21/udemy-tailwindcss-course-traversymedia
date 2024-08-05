import ImageDevices from '../assets/image-devices.png'

const Access = () => {
  return (
    // Access Anywhere Section
    <section id="access">
        <div className="section-container my-20">
            <h3>Access Clipboard Anywhere</h3>
            <p className="section-content text-xl mb-24">
                Whether you&apos;re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.
            </p>
            <img 
                src={ImageDevices}
                alt="Image Devices" 
                className="mx-auto"
            />
        </div>
    </section>
  )
}

export default Access