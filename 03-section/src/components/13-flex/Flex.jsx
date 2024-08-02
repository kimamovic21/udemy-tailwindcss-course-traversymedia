const Flex = () => {
  return (
    <div className="flex flex-col gap-20">
        <div className="flex flex-wrap justify-center items-center h-72 w-full bg-gray-100 mb-20">
            <div className="p-10 border border-blue-300 bg-blue-100">
                01
            </div>
            <div className="p-10 border border-blue-300 bg-blue-100">
                02
            </div>
            <div className="p-10 border border-blue-300 bg-blue-100">
                03
            </div>
            <div className="p-10 border border-blue-300 bg-blue-100">
                04
            </div>
            <div className="p-10 border border-blue-300 bg-blue-100">
                05
            </div>
            <div className="p-10 border border-blue-300 bg-blue-100">
                06
            </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 justify-center items-center h-72 w-full bg-gray-100">
            <div className="order-4 p-10 border border-blue-300 bg-blue-100">
                01
            </div>
            <div className="order-3 p-10 border border-blue-300 bg-blue-100">
                02
            </div>
            <div className="order-2 p-10 border border-blue-300 bg-blue-100">
                03
            </div>
            <div className="order-1 p-10 border border-blue-300 bg-blue-100">
                04
            </div>
        </div>

        <div className="mt-20 flex w-full bg-gray-100">
            <div className="flex-initial w-64 p-10 border border-blue-300 bg-blue-100">
                01
            </div>
            <div className="flex-none w-64 p-10 border border-blue-300 bg-blue-100">
                02
            </div>
            <div className="flex-auto w-64 p-10 border border-blue-300 bg-blue-100">
                03
            </div>
            <div className="flex-1 w-64  p-10 border border-blue-300 bg-blue-100">
                04
            </div>
            <div className="p-10 border border-blue-300 bg-blue-100">
                05
            </div>
            <div className="p-10 border border-blue-300 bg-blue-100">
                06
            </div>
        </div>

        <div className="flex text-center">
            <div className="flex-1 bg-blue-100">Hello</div>
            <div className="flex-1 bg-blue-100">Hello</div>
            <div className="flex-1 bg-blue-100">Hello</div>
        </div>
    </div>
  )
}

export default Flex