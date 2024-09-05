import Person2Image from '../assets/person2.jpg'

const Box2 = () => {
  return (
    <div class="p-10 rounded-xl bg-gray-600">
        {/* Box Header */}
        <div class="flex space-x-4">
            <img
                src={Person2Image}
                alt="Person 2 Image"
                class="w-10 h-10 rounded-full ring-2 ring-purple-300"
            />
            <div class="text-sm">
                <h4 class="opacity-90">Jonathan Walters</h4>
                <p class="opacity-50">Verified Graduate</p>
            </div>
        </div>

        {/* Large Text */}
        <p class="mt-6 text-xl">
        The team was very supportive and kept me motivated
        </p>

        {/* Small Text */}
        <p class="mt-6 opacity-50 line-clamp-5">
            "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the
            best investments I've made in myself. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsam veritatis natus illum
            ullam ab, nesciunt rerum nobis, quibusdam ad voluptatum rem necessitatibus facere nihil deleniti assumenda vel velit neque quia,
            nisi ipsum laudantium impedit eveniet iste. Pariatur, exercitationem consequuntur praesentium a est eum velit quos maiores ipsum 
            facere tempora!"
        </p>
    </div>
  )
}

export default Box2