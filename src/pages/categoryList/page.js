export default function CategoryList() {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-3xl">Popular Categories</div>
      <ul className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-2 text-black">
        <li className="w-full flex justify-center items-center gap-2 bg-blue-200 rounded-xl h-[5rem] ">
          <div className="h-[3rem] w-[3rem] rounded-full">
            <img
              src="/IMAGES/style.png"
              alt=""
              className=" rounded-full w-full h-full object-cover"
            />
          </div>
          Style
        </li>
        <li className="w-full flex justify-center items-center gap-2 bg-pink-200 rounded-xl h-[5rem] ">
          <div className="h-[3rem] w-[3rem] rounded-full">
            <img
              src="/IMAGES/fashion.png"
              alt=""
              className=" rounded-full w-full h-full object-cover"
            />
          </div>
          Fashion
        </li>
        <li className="w-full flex justify-center items-center gap-2 bg-green-200 rounded-xl h-[5rem] ">
          <div className="h-[3rem] w-[3rem] rounded-full">
            <img
              src="/IMAGES/food.png"
              alt=""
              className=" rounded-full w-full h-full object-cover"
            />
          </div>
          Food
        </li>
        <li className="w-full flex justify-center items-center gap-2 bg-red-200 rounded-xl h-[5rem] ">
          <div className="h-[3rem] w-[3rem] rounded-full">
            <img
              src="/IMAGES/travel.png"
              alt=""
              className=" rounded-full w-full h-full object-cover"
            />
          </div>
          Travel
        </li>
        <li className="w-full flex justify-center items-center gap-2 bg-yellow-200 rounded-xl h-[5rem] ">
          <div className="h-[3rem] w-[3rem] rounded-full">
            <img
              src="/IMAGES/culture.png"
              alt=""
              className=" rounded-full w-full h-full object-cover"
            />
          </div>
          Culture
        </li>
        <li className="w-full flex justify-center items-center gap-2 bg-violet-200 rounded-xl h-[5rem] ">
          <div className="h-[3rem] w-[3rem] rounded-full">
            <img
              src="/IMAGES/coding.png"
              alt=""
              className=" rounded-full w-full h-full object-cover"
            />
          </div>
          Coding
        </li>
      </ul>
    </div>
  );
}
