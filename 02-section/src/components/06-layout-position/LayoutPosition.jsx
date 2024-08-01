import LaptopImage from '../../assets/img1.jpg';

const LayoutPosition = () => {
  return (
    <div>
        <div className="relative h-12 bg-red-200 w-1/4">
            <p>Parent Element</p>
            <div className="absolute bottom-0 right-0 bg-red-500">
                <p>Absolute Child</p>
            </div>
        </div>

        <div className="mt-1 relative h-32 w-32 bg-yellow-100">
            <div className="absolute left-0 top-0 h-16 w-16 bg-yellow-300"></div>
        </div>

        <div className="mt-1 relative h-32 w-32 bg-yellow-100">
            <div className="absolute right-0 top-0 h-16 w-16 bg-yellow-300"></div>
        </div>

        <div className="mt-1 relative h-32 w-32 bg-yellow-100">
            <div className="absolute left-0 bottom-0 h-16 w-16 bg-yellow-300"></div>
        </div>

        <div className="mt-1 relative h-32 w-32 bg-yellow-100">
            <div className="absolute right-0 bottom-0 h-16 w-16 bg-yellow-300"></div>
        </div>

        <div className="mt-1 relative h-32 w-32 bg-yellow-100">
            <div className="absolute inset-x-0 top-0 h-16 bg-yellow-300"></div>
        </div>

        <div className="mt-1 relative h-32 w-32 bg-yellow-100">
            <div className="absolute inset-y-0 left-0 w-16 bg-yellow-300"></div>
        </div>

        <div className="mt-1 relative h-32 w-32 bg-yellow-100">
            <div className="absolute inset-y-0 right-0 w-16 bg-yellow-300"></div>
        </div>

        <div className="mt-1 relative h-32 w-32 bg-yellow-100">
            <div className="absolute inset-x-0 bottom-0 h-16 bg-yellow-300"></div>
        </div>

        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span className="inline font-bold">This is inline</span> Natus, tenetur! 
            Quasi qui laborum itaque voluptate rerum, fugiat unde sequi magnam dolorem, illum odit, vel optio. Iusto deserunt ducimus 
            id sapiente! Ipsa perferendis, officiis alias eius quidem corrupti nemo nobis perspiciatis officia, 
            <span className="inline-block font-bold">This is inline-block</span> assumenda aperiam harum, repudiandae eos repellat accusantium 
            dicta consequuntur cum dolores dignissimos qui cupiditate? Praesentium sint similique expedita optio.Nisi ratione ea qui 
            quasi? <span className="block font-bold">This is block</span> Ipsam corporis aliquam illo nam itaque harum. 
            <span className="hidden font-bold">This is hidden</span> Magnam animi praesentium nemo facilis, reprehenderit accusamus qui? 
            Illum libero facere recusandae commodi maiores quas eum praesentium at.
        </div>

        <div className="relative h-36">
            <div className="absolute left-10 w-24 h-24 bg-blue-300 z-10">1</div>
            <div className="absolute left-20 w-24 h-24 bg-blue-400 z-20">2</div>
            <div className="absolute left-40 w-24 h-24 bg-blue-500 z-30">3</div>
            <div className="absolute left-60 w-24 h-24 bg-blue-600 z-40">4</div>
            <div className="absolute left-80 w-24 h-24 bg-blue-700 z-50">5</div>
        </div>

        <div className="w-1/2">
            <img 
                className='h-48 w-48 float-right m-4'
                src={LaptopImage} 
                alt="Laptop Image" 
            />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo possimus beatae ad officia, esse facilis neque sunt sint dignissimos a ipsa aliquam id quis eum, quidem eaque quas! Odio, est!</p>
        </div>
    </div>
  )
}

export default LayoutPosition