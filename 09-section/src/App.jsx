import Box1 from "./components/Box1"
import Box2 from "./components/Box2"
import Box3 from "./components/Box3"
import Box4 from "./components/Box4"
import Box5 from "./components/Box5"

const App = () => {
  return (
    // Global Container
    <section className="bg-gray-200">

      {/* Grid Container */}
      <div className="container mx-auto max-w-7xl p-2 md:p-10">

        <div className="grid gap-6 grid-cols-1 text-white md:grid-cols-4 md:grid-rows-2" >
          <Box1 />
          <Box2 />
          <Box3 />
          <Box4 />
          <Box5 />
        </div>
      </div>
    </section>
  )
}

export default App