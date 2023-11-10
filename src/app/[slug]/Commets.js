const Commets = ({ singleBlog }) => {
  const authenticate = true;
  return (
    <div className="py-10 space-y-5">
      <div className="text-3xl font-bold">Comments</div>
      {authenticate && (
        <div className="flex flex-col gap-2 text-black">
          <textarea
            className="w-full border-2 border-black p-2 rounded "
            placeholder="Write the comment here..."
          ></textarea>
          <button className="w-[10rem] rounded bg-green-700 text-white p-2">
            Send
          </button>
        </div>
      )}
      <div className="flex flex-col gap-5 p-2">
        {singleBlog.commets.map((item, i) => {
          return (
            <div key={i} className="space-y-2">
              <div className="flex gap-5">
                <img src={item.img} alt="" className="h-12 w-12 rounded-full" />
                <div className="flex flex-col">
                  <span className="font-bold">{item.label}</span>
                  <span className="text-gray-500">{item.date}</span>
                </div>
              </div>
              <div>{item.commet}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Commets;
