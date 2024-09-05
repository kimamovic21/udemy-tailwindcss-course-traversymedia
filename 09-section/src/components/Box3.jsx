import Person3Image from '../assets/person3.jpg'

const Box3 = () => {
  return (
    <div className="row-start-6 p-10 rounded-xl bg-white text-gray-900 md:block md:row-start-1 md:col-start-4 md:row-span-2">
        {/* Box Header */}
        <div className="flex space-x-4">
            <img
                src={Person3Image}
                alt="Person 3 Image"
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
            />
            <div className="text-sm">
                <h4 className="opacity-90">Kira Whittle</h4>
                <p className="opacity-50">Verified Graduate</p>
            </div>
        </div>

        {/* Large Text */}
        <p className="mt-6 text-xl">
            Such a life-changing experience. Highly recommended!
        </p>

        {/* Small Text */}
        <p className="mt-6 opacity-50">
            "Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever
            have. In fact, I've often referred to it during interviews as an example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100% recommend!"
        </p>
    </div>
  )
}

export default Box3