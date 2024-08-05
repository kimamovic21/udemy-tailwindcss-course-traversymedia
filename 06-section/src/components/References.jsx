import LogoGoogle from '../assets/logo-google.png'
import LogoIBM from '../assets/logo-ibm.png'
import LogoMicrosoft from '../assets/logo-microsoft.png'
import LogoHP from '../assets/logo-hp.png'
import LogoVectorGraphics from '../assets/logo-vector-graphics.png'

const References = () => {
    return (
    // References Section
    <section id="references">
        <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
            <img src={LogoGoogle} alt="Google Logo" />
            <img src={LogoIBM} alt="IBM Logo" />
            <img src={LogoMicrosoft} alt="Microsoft Logo" />
            <img src={LogoHP} alt="HP Logo" />
            <img src={LogoVectorGraphics} alt="Vector Graphics Logo" />
        </div>
    </section>
  )
}

export default References