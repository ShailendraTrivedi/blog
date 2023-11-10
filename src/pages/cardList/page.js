import Pagination from "../pagination/page";

export default function CardList() {
  return (
    <div className="space-y-10">
      {/* Most Popular Section */}
      <div className="">
        <div className="py-2">
          <span className="text-sm text-gray-500">What's hot</span>
          <div className="text-xl font-bold">Most Popular</div>
        </div>
        {/* CardList */}
        <ul className="list-none flex flex-col gap-2">
          <li className="text-sm space-y-2">
            <span className=" text-white bg-red-300 p-1 px-4 rounded-full">
              Travel
            </span>
            <div className="text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio a
              ullam laudantium sapiente?
            </div>
            <span className="flex gap-2">
              <p>John Doe</p>
              <p>01.09.2020</p>
            </span>
          </li>
          <li className="text-sm space-y-2">
            <span className=" text-white bg-yellow-300 p-1 px-4 rounded-full">
              Culture
            </span>
            <div className="text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio a
              ullam laudantium sapiente?
            </div>
            <span className="flex gap-2">
              <p>John Doe</p>
              <p>01.09.2020</p>
            </span>
          </li>
          <li className="text-sm space-y-2">
            <span className=" text-white bg-violet-300 p-1 px-4 rounded-full">
              Coding
            </span>
            <div className="text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio a
              ullam laudantium sapiente?
            </div>
            <span className="flex gap-2">
              <p>John Doe</p>
              <p>01.09.2020</p>
            </span>
          </li>
          <li className="text-sm space-y-2">
            <span className=" text-white bg-pink-300 p-1 px-4 rounded-full">
              Fashion
            </span>
            <div className="text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio a
              ullam laudantium sapiente?
            </div>
            <span className="flex gap-2">
              <p>John Doe</p>
              <p>01.09.2020</p>
            </span>
          </li>
        </ul>
        {/* Dicovery By Topic */}
      </div>
      {/* Categories */}
      <div>
        <div>
          <span className="text-sm text-gray-500">Disover by topic</span>
          <div className="font-bold text-xl">Categories</div>
        </div>
        <ul className="grid grid-cols-3 gap-2 text-black">
          <li className="w-full flex justify-center items-center gap-2 bg-blue-200 rounded-xl h-[2rem] ">
            Style
          </li>
          <li className="w-full flex justify-center items-center gap-2 bg-pink-200 rounded-xl h-[2rem] ">
            Fashion
          </li>
          <li className="w-full flex justify-center items-center gap-2 bg-green-200 rounded-xl h-[2rem] ">
            Food
          </li>
          <li className="w-full flex justify-center items-center gap-2 bg-red-200 rounded-xl h-[2rem] ">
            Travel
          </li>
          <li className="w-full flex justify-center items-center gap-2 bg-yellow-200 rounded-xl h-[2rem] ">
            Culture
          </li>
          <li className="w-full flex justify-center items-center gap-2 bg-violet-200 rounded-xl h-[2rem] ">
            Coding
          </li>
        </ul>
      </div>
      {/* Editors Pick */}
      <div className="">
        <div className="py-2">
          <span className="text-sm text-gray-500">Chosen by the editor</span>
          <div className="text-xl font-bold">Editors Pick</div>
        </div>
        {/* CardList */}
        <ul className="list-none space-y-4 flex flex-col gap-2">
          <li className="grid grid-cols-3">
            <div className="flex justify-center items-center rounded-full w-full h-full">
              <img
                src="/IMAGES/culture.png"
                alt=""
                className=" rounded-full w-[5rem] h-[5rem] object-cover"
              />
            </div>
            <div className="col-span-2 text-sm space-y-1">
              <span className=" text-white bg-red-300 p-1 px-4 rounded-full">
                Travel
              </span>
              <div className="text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio a
                ullam laudantium sapiente?
              </div>
              <span className="flex gap-2">
                <p>John Doe</p>
                <p>01.09.2020</p>
              </span>
            </div>
          </li>
          <li className="grid grid-cols-3">
            <div className="flex justify-center items-center rounded-full w-full h-full">
              <img
                src="/IMAGES/culture.png"
                alt=""
                className=" rounded-full w-[5rem] h-[5rem] object-cover"
              />
            </div>
            <div className="col-span-2 text-sm space-y-1">
              <span className=" text-white bg-red-300 p-1 px-4 rounded-full">
                Travel
              </span>
              <div className="text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio a
                ullam laudantium sapiente?
              </div>
              <span className="flex gap-2">
                <p>John Doe</p>
                <p>01.09.2020</p>
              </span>
            </div>
          </li>
          <li className="grid grid-cols-3">
            <div className="flex justify-center items-center rounded-full w-full h-full">
              <img
                src="/IMAGES/culture.png"
                alt=""
                className=" rounded-full w-[5rem] h-[5rem] object-cover"
              />
            </div>
            <div className="col-span-2 text-sm space-y-1">
              <span className=" text-white bg-red-300 p-1 px-4 rounded-full">
                Travel
              </span>
              <div className="text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio a
                ullam laudantium sapiente?
              </div>
              <span className="flex gap-2">
                <p>John Doe</p>
                <p>01.09.2020</p>
              </span>
            </div>
          </li>
          <li className="grid grid-cols-3">
            <div className="flex justify-center items-center rounded-full w-full h-full">
              <img
                src="/IMAGES/culture.png"
                alt=""
                className=" rounded-full w-[5rem] h-[5rem] object-cover"
              />
            </div>
            <div className="col-span-2 text-sm space-y-1">
              <span className=" text-white bg-red-300 p-1 px-4 rounded-full">
                Travel
              </span>
              <div className="text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio a
                ullam laudantium sapiente?
              </div>
              <span className="flex gap-2">
                <p>John Doe</p>
                <p>01.09.2020</p>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
