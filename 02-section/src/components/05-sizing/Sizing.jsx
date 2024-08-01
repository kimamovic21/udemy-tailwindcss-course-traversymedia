const Sizing = () => {
  return (
    <div>
        <div className="bg-black text-white w-10">Hello</div>
        <div className="bg-black text-white w-12">Hello</div>
        <div className="bg-black text-white w-14">Hello</div>

        <div className="bg-green-700 text-white w-1/4">Hello</div>
        <div className="bg-green-700 text-white w-1/3">Hello</div>
        <div className="bg-green-700 text-white w-1/2">Hello</div>

        <div className="bg-blue-500 text-white w-screen">Hello</div>

        <div className="bg-blue-300 text-white w-full">Hello</div>

        <div className="bg-blue-700 text-white w-[300px]">Hello</div>

        <div className="bg-gray-300 max-w-sm mx-auto">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae iure libero in laboriosam vero sequi quod similique accusamus numquam, neque quo! Laboriosam molestias dignissimos ab repellendus accusantium. Delectus, provident sit?
            Quisquam fugiat consequuntur iste, hic quae cupiditate harum fugit aliquam aut, optio est excepturi dicta ex quia libero atque cumque sequi explicabo maiores, et officia! Omnis id qui voluptatibus nulla!</p>
        </div>

        <div className="flex items-end">
            <div className="bg-orange-500 w-20 h-24">Hello</div>
            <div className="bg-orange-500 w-20 h-32">Hello</div>
            <div className="bg-orange-500 w-20 h-40">Hello</div>
            <div className="bg-orange-500 w-20 h-48">Hello</div>
            <div className="bg-orange-500 w-20 h-64">Hello</div>
            <div className="bg-orange-500 w-20 h-96">Hello</div>
        </div>

        <div className="bg-blue-300 text-white h-screen">Hello</div>
    </div>
  )
}

export default Sizing