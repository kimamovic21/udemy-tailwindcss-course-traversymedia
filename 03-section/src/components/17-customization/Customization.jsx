import { useEffect, useState } from "react";

const Customization = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <div className='bg-black h-screen -m-2 sm:bg-green-800 md:bg-blue-800 lg:bg-yellow-800 xl:bg-purple-800 2xl:bg-red-800'>
      <h2 className='m-2 p-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl'>
        Screen Width: {width}
      </h2>
      <h3 className="text-primary">This is text primary color!</h3>
      <h3 className="text-secondary">This is text secondary color!</h3>
    </div>
  )
}

export default Customization