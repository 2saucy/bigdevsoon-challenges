import clsx from "clsx";
import { FaPlus } from "react-icons/fa";
import { lists } from "./data.json";

const Page = () => {
  return (
    <main className="min-h-screen space-y-8 bg-[#e3e8ee] p-8">
      <h1 className="text-4xl font-bold">Boards</h1>
      <div className="grid 2xl:grid-cols-4 gap-8 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:place-items-center">
        {lists.map(({ id, name, list }) => (
          <div key={id} className="space-y-2">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold">{name}</h2>
              <button className="rounded-full border-2 p-2 duration-100 ease-in-out hover:bg-black/10">
                <FaPlus />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {list.map((item, i) => (
                <Card key={i} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;

const Card = ({
  title,
  description,
  level,
  date,
  image,
}: {
  title: string;
  description: string;
  level: string;
  date: string;
  image?: string;
}) => {
  return (
    <div className="max-w-[360px] space-y-4 rounded-lg bg-white p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <span
          className={clsx(
            "font-ligth rounded-full px-2 py-1 text-xs uppercase text-white",
            level === "High"
              ? "bg-red-500"
              : level === "Medium"
                ? "bg-yellow-500"
                : "bg-green-500",
          )}
        >
          {level}
        </span>
        <span className="text-xs">{date}</span>
      </div>
      {image && (
        <div className="h-[140px] overflow-hidden rounded-xl">
          <img className="h-full w-full object-cover" src={image} alt="Card Image" />
        </div>
      )}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <button className="rounded-full border-2 border-dashed  border-black p-2 opacity-20 duration-150 ease-in-out hover:opacity-100">
          <FaPlus className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
};
