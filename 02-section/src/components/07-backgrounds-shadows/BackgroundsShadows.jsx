import LaptopImage from '../../assets/img1.jpg';

const BackgroundsShadows = () => {
  return (
    <div>
        <div 
            className="h-64 w-72 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${LaptopImage})` }}
        >
        </div>

        <div className="h-24 bg-gradient-to-r from-cyan-500 to-blue-500"></div>

        <div className="w-96 mt-6 ml-4 p-3 shadow">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore dicta odio necessitatibus, nisi, 
            commodi voluptatum cupiditate repellendus incidunt eligendi accusantium unde ea iure voluptatem 
            aliquid atque asperiores repellat. Quo, modi.
        </div>
        <div className="w-96 mt-6 ml-4 p-3 shadow-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo tempora laboriosam 
            aspernatur maiores minima natus doloribus incidunt vel culpa quas nobis perferendis eveniet blanditiis, 
            quod velit dolores. Voluptates, eligendi.
        </div>
        <div className="w-96 mt-6 ml-4 p-3 shadow-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse impedit optio ad ipsam id, recusandae 
            veniam enim vero ullam, soluta doloremque illo possimus nesciunt, ducimus atque excepturi culpa ex similique.
        </div>
        <div className="w-96 mt-6 ml-4 p-3 shadow-xl shadow-red-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse impedit optio ad ipsam id, recusandae veniam 
            enim vero ullam, soluta doloremque illo possimus nesciunt, ducimus atque excepturi culpa ex similique.
        </div>
        <div className="w-96 mt-10 ml-4 p-3 shadow-2xl shadow-blue-500/50">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse impedit optio ad ipsam id, recusandae veniam 
            enim vero ullam, soluta doloremque illo possimus nesciunt, ducimus atque excepturi culpa ex similique.
        </div>
        <div className="w-96 mt-10 ml-4 p-3 shadow-inner">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse impedit optio ad ipsam id, recusandae veniam 
            enim vero ullam, soluta doloremque illo possimus nesciunt, ducimus atque excepturi culpa ex similique.
        </div>

        <div className="flex justify-center -space-x-24">
            <div className="bg-blue-400 mix-blend-multiply">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque molestiae quidem, deserunt nemo cupiditate
                nisi debitis numquam magnam dolorem accusamus illo? Doloremque qui neque sint tempora omnis consequatur 
                maiores possimus!
            </div>
            <div className='bg-pink-400 mix-blend-multiply'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim totam tempore earum atque aspernatur 
                voluptates quisquam quos numquam vero autem esse qui, porro, sunt nostrum sint modi similique quia architecto?
            </div>
        </div>
    </div>
  )
}

export default BackgroundsShadows