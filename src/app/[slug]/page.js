import CardList from "@/pages/cardList/page";
import Features from "@/pages/features/page";
import Commets from "./Commets";

const SinglePage = () => {
  const singleBlog = {
    label:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nihil?",
    picture: "/IMAGES/culture.png",
    img: "/IMAGES/culture.png",
    author: "Shailendra Trivedi",
    date: "26 April 2023",
    blog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat! Ut excepturi, tenetur numquam itaque sequi nulla minus perspiciatis velit quos ea sapiente soluta quo ullam. Exercitationem sunt a expedita eius quaerat iste, laboriosam veroquibusdam nulla sapiente asperiores cum id rem? Iusto magni natus aut harum, obcaecati doloribus minus temporibus eius consequuntur rerum doloremque labore autem maiores similique modi atque alias eveniet earum sunt, esse, aliquam placeat recusandae et!.Inventore ex esse ea cupiditate nesciunt error dolor reiciendis repudiandae quo? Minus nulla, repellendus asperiores velit nihil repudiandae nonquam distinctio debitis quidem soluta, voluptatum vitae error deleniti maiores quis?",
    commets: [
      {
        img: "/IMAGES/culture.png",
        label: "John Doe1",
        date: "22.07.2023",
        commet:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, similique!",
      },
      {
        img: "/IMAGES/culture.png",
        label: "John Doe2",
        date: "22.07.2023",
        commet:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, similique!",
      },
      {
        img: "/IMAGES/culture.png",
        label: "John Doe3",
        date: "22.07.2023",
        commet:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, similique!",
      },
      {
        img: "/IMAGES/culture.png",
        label: "John Doe4",
        date: "22.07.2023",
        commet:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, similique!",
      },
    ],
  };
  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-3 grid-cols-1">
        <div className="sm:col-span-2 sm:text-5xl text-3xl font-bold">
          {singleBlog.label}
        </div>
        <div>
          <img
            src={singleBlog.picture}
            alt=""
            className=" sm:h-[13rem] h-[10rem] w-full object-cover"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-5 grid-cols-1">
        <div className="col-span-2 space-y-5">
          <div className="flex gap-5">
            <img
              src={singleBlog.img}
              alt=""
              className="h-12 w-12 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-bold">{singleBlog.author}</span>
              <span className="text-gray-500">{singleBlog.date}</span>
            </div>
          </div>
          <div className="">{singleBlog.blog}</div>
          <Commets singleBlog={singleBlog} />
        </div>
        <CardList />
      </div>
    </div>
  );
};

export default SinglePage;
