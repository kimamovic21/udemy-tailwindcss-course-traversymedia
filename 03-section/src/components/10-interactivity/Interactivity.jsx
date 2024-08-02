import { Link } from "react-router-dom";

const Interactivity = () => {
  return (
    <div>
        <button className="m-3 bg-black text-white py-3 px-5 rounded-lg hover:bg-gray-700">
            Submit
        </button>

        <button className="m-3 bg-black text-white py-3 px-5 rounded-lg focus:bg-green-800">
            Submit
        </button>

        <button className="m-3 bg-black text-white py-3 px-5 rounded-lg active:bg-yellow-800">
            Submit
        </button>

        <Link className="group block max-w-xs mx-auto rounded-lg p-6 bg-white shadow-lg space-y-3 hover:bg-sky-500">
            <h2 className="group-hover:text-white">Card Title</h2>
            <p className="group-hover:text-white">This is the card text</p>
        </Link>

        <ul>
            <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">Item 1</li>
            <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">Item 2</li>
            <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">Item 3</li>
            <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">Item 4</li>
            <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">Item 5</li>
            <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">Item 6</li>
        </ul>

        <br />

        <select className="appearance-none">
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>

        <br />

        <p className="cursor-pointer">Hello</p>

        <button className="bg-black text-white py-3 px-5 rounded-lg m-3 cursor-wait">
            Submit
        </button>
        <button className="bg-black text-white py-3 px-5 rounded-lg m-3 cursor-not-allowed">
            Submit
        </button>

        <div className="border select-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quia consectetur fugiat quisquam 
            repellat officia atque nostrum, placeat eveniet corrupti molestiae optio nam dicta iste quidem ipsum, 
            laudantium nisi! Sapiente!
        </div>
        <div className="border select-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ipsum. Eos, dolorum consectetur. 
            Modi, expedita consequatur quis eaque fugit, accusamus aperiam consectetur, soluta dicta libero doloribus. 
            Natus eos recusandae ex?
        </div>
        <div className="border select-all">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At architecto ut ipsum qui iusto saepe, amet a 
            soluta veniam ab quas id? Explicabo quam repellat doloribus et? Perferendis, magni quasi.
        </div>
        <div className="border select-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum accusantium neque voluptates provident? 
            Error qui tempora, reiciendis neque earum ea vero, temporibus molestias omnis unde totam distinctio 
            necessitatibus quas exercitationem.
        </div>

        <a href="#item" className="block my-6">Go To Item</a>

        <p className="border">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ducimus temporibus commodi consectetur rem totam odio tempore. Voluptatum, laudantium. Dignissimos, excepturi cupiditate! Aspernatur sapiente earum architecto necessitatibus, recusandae qui quis.
        Ea nam laudantium voluptas nemo, dolores animi! Laudantium, rem deleniti vel aut, quia corrupti hic sunt minima quis, perspiciatis facilis laboriosam. Eaque accusamus ipsum corrupti officiis nobis eveniet repellendus aspernatur.
        Quibusdam saepe deleniti maxime, laudantium eius eveniet et veritatis magni illum voluptatum aliquid soluta cupiditate voluptatibus neque quidem? Voluptates rerum maxime adipisci eaque natus reprehenderit fuga, voluptatem ut minima! Perspiciatis?
        Cumque distinctio tempore labore eius, deserunt inventore quasi ea molestiae corrupti commodi omnis sunt repellendus unde dignissimos nisi perferendis reprehenderit, atque tenetur blanditiis? Quam ab provident tempora commodi incidunt optio.
        Voluptatum magni quae repellat blanditiis hic, deserunt nesciunt facilis fugiat corrupti est libero harum, aliquid iusto ratione voluptate eius nihil unde deleniti quam perspiciatis ea. Quisquam obcaecati praesentium sed libero.</p>
        <p id="item" className="border">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptas debitis, expedita eligendi atque quam, quod placeat rerum velit provident aut cupiditate dolores laudantium quos consectetur labore nobis rem? Vel.
        Ratione, suscipit! Rem, error excepturi? Dolorem omnis odio rem reiciendis commodi officia quod necessitatibus aliquid sunt quia? Eveniet voluptatum nisi odit distinctio voluptatibus pariatur debitis consectetur similique. Mollitia, voluptate quibusdam!
        Dolor, nihil consectetur. Dicta adipisci veniam reprehenderit doloremque quo odio tempora non obcaecati vitae. Voluptatibus aspernatur nisi ad vel explicabo eius sed ullam non, alias accusantium dolorum officiis, nihil eum?
        Deserunt minima enim reiciendis nemo id, cumque tempore nisi repellat rem veniam ea odit quaerat excepturi autem neque voluptatem architecto. Modi eos nulla vel ipsa beatae quisquam unde voluptatibus fugit.
        Omnis, officiis, voluptatibus eveniet eius rem fugit non alias similique eum cumque optio deserunt inventore dolor laboriosam! Iure magnam aliquid, necessitatibus quae saepe perspiciatis, eaque alias repellendus ex maiores aspernatur?</p>
    </div>
  )
}

export default Interactivity