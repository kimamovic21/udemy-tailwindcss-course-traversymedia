const Colors = () => {
  return (
    <div>
        <p className="text-black">Tailwind is awesome</p>
        <p className="text-white bg-black">Tailwind is awesome</p>
        <p className="text-red-900">Tailwind is awesome</p>
        <p className="text-green-500">Tailwind is awesome</p>
        <p className="text-emerald-500">Tailwind is awesome</p>
        <p className="text-zinc-300">Tailwind is awesome</p>
        <p className="text-slate-800">Tailwind is awesome</p>

        <p className="bg-slate-800">Tailwind is awesome</p>
        <p className="bg-emerald-800">Tailwind is awesome</p>
        <p className="bg-yellow-800">Tailwind is awesome</p>
        <p className="bg-indigo-800">Tailwind is awesome</p>

        <p className="underline decoration-red-500">Tailwind is awesome</p>
        <p className="underline decoration-emerald-600">Tailwind is awesome</p>
        <p className="underline decoration-yellow-800">Tailwind is awesome</p>

        <input className="border border-blue-400" type="text" />
        <input className="border border-green-400" type="text" />
        <input className="border border-orange-400" type="text" />

        <div className="divide-y divide-blue-300">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
        </div>

        <div>
            <button className="outline outline-red-500">Hello</button>
            <button className="outline outline-blue-200">Hello</button>
        </div>

        <div>
            <button className="shadow-lg bg-cyan-500 shadow-cyan-500">Subscribe</button>
            <button className="shadow-lg bg-purple-500/50 shadow-cyan-500">Subscribe</button>
        </div>

        <input type="checkbox" className="accent-purple-500" checked />
        <input type="checkbox" className="accent-cyan-500" checked />

        <div className="bg-[#427fab]">Hello</div>
        <div className="bg-[rgb(255,0,0)]">Hello</div>
        <div className="bg-[steelblue]">Hello</div>
    </div>
  )
}

export default Colors