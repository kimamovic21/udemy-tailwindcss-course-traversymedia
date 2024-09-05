import Person4Image from '../assets/person4.jpg'

const Box4 = () => {
  return (
    <div className="p-10 rounded-xl text-gray-900 bg-white">
        {/* Box Header */}
        <div className="flex space-x-4">
            <img
                src={Person4Image}
                alt="Person 4 Image"
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
            />
            <div className="text-sm">
                <h4 className="opacity-90">Jeanette Harmon</h4>
                <p className="opacity-50">Verified Graduate</p>
            </div>
        </div>

        {/* Large Text */}
        <p className="mt-6 text-xl">
            An overall wonderful and rewarding experience
        </p>

        {/* Small Text */}
        <p className="mt-6 opacity-50">
            "Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love."
        </p>
    </div>
  )
}

export default Box4