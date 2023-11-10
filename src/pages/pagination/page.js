export default function Pagination() {
  const paginationCards = [
    {
      src: "/IMAGES/culture.png",
      date: "11.02.2020",
      type: "CULUTRE",
      label:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,in!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi odit omnis at officiis! Alias sapiente soluta debitis cum quae, eum voluptatem rerum minus repudiandae laborum aliquid facere praesentium, explicabo ipsum!",
    },
    {
      src: "/IMAGES/culture.png",
      date: "11.02.2020",
      type: "CULUTRE",
      label:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,in!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi odit omnis at officiis! Alias sapiente soluta debitis cum quae, eum voluptatem rerum minus repudiandae laborum aliquid facere praesentium, explicabo ipsum!",
    },
    {
      src: "/IMAGES/culture.png",
      date: "11.02.2020",
      type: "CULUTRE",
      label:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,in!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi odit omnis at officiis! Alias sapiente soluta debitis cum quae, eum voluptatem rerum minus repudiandae laborum aliquid facere praesentium, explicabo ipsum!",
    },
    {
      src: "/IMAGES/culture.png",
      date: "11.02.2020",
      type: "CULUTRE",
      label:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,in!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi odit omnis at officiis! Alias sapiente soluta debitis cum quae, eum voluptatem rerum minus repudiandae laborum aliquid facere praesentium, explicabo ipsum!",
    },
  ];
  return (
    <div className="">
      <div className="text-2xl font-bold">Recent Posts</div>
      <div className="space-y-10">
        {/* Cards */}
        {paginationCards.map((item, i) => {
          return (
            <div className="grid sm:grid-cols-3 sm:gap-10 gap-5">
              <div className="">
                <img src={item.src} alt="" className=" w-full h-[15rem]" />
              </div>
              <div className="sm:col-span-2 space-y-3">
                <div className="flex gap-2 text-gray-500">
                  <span>{item.date}</span>
                  <span className="text-red-500">{item.type}</span>
                </div>
                <div className="text-xl font-bold">{item.label}</div>
                <div className=" text-base">{item.description}</div>
                <div className="font-bold">Read More...</div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Button */}
      <div className="w-full flex justify-between gap-2 p-5">
        <button className="text-white bg-red-500 w-[10rem] p-2">
          Previous
        </button>
        <button className="text-white bg-red-500 w-[10rem] p-2">
          Next
        </button>
      </div>
    </div>
  );
}
