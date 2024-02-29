import clsx from "clsx";
import { FaPlus } from "react-icons/fa";

const DayThirteen = () => {
  const lists = [
    {
      id: 1,
      name: "To do",
      list: [
        {
          level: "High",
          date: "2/15/24",
          image:
            "/assets/100-days-challenge/day-13/jr-korpa-9XngoIpxcEo-unsplash.jpg",
          title: "Update Website Homepage",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio iusto ducimus quas! Odio, quis atque repellendus dignissimos architecto reprehenderit aut.",
          participants: [
            {
              image: "/assets/100-days-challenge/day-13/profile.jpg",
            },
            {
              image: "/assets/100-days-challenge/day-13/profile.jpg",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "In progress",
      list: [
        {
          level: "Low",
          date: "2/15/24",
          image: "",
          title: "Big Fix - User Registration",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio iusto ducimus quas! Odio, quis atque repellendus dignissimos architecto reprehenderit aut.",
          participants: [
            {
              image: "/assets/100-days-challenge/day-13/profile.jpg",
            },
          ],
        },
        {
          level: "Medium",
          date: "2/15/24",
          image:
            "/assets/100-days-challenge/day-13/travis-leery-E4BKNmb31fA-unsplash.jpg",
          title: "Social Media Campaign",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio iusto ducimus quas! Odio, quis atque repellendus dignissimos architecto reprehenderit aut.",
          participants: [
            {
              image: "/assets/100-days-challenge/day-13/profile.jpg",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Under Review",
      list: [
        {
          level: "High",
          date: "2/15/24",
          image: "",
          title: "Mobile App Feature - Push Notifications",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio iusto ducimus quas! Odio, quis atque repellendus dignissimos architecto reprehenderit aut.",
          participants: [
            {
              image: "/assets/100-days-challenge/day-13/profile.jpg",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Done",
      list: [
        {
          level: "Low",
          date: "2/15/24",
          image:
            "/assets/100-days-challenge/day-13/travis-leery-E4BKNmb31fA-unsplash.jpg",
          title: "Content Creation - Blog Post",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio iusto ducimus quas! Odio, quis atque repellendus dignissimos architecto reprehenderit aut.",
          participants: [
            {
              image: "/assets/100-days-challenge/day-13/profile.jpg",
            },
            {
              image: "/assets/100-days-challenge/day-13/profile.jpg",
            },
          ],
        },
        {
          level: "Medium",
          date: "2/15/24",
          image:
            "/assets/100-days-challenge/day-13/jr-korpa-9XngoIpxcEo-unsplash.jpg",
          title: "IT Security Audit",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio iusto ducimus quas! Odio, quis atque repellendus dignissimos architecto reprehenderit aut.",
          participants: [
            {
              image: "/assets/100-days-challenge/day-13/profile.jpg",
            },
            {
              image: "/assets/100-days-challenge/day-13/profile.jpg",
            },
            {
              image: "/assets/100-days-challenge/day-13/profile.jpg",
            },
          ],
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen space-y-8 bg-[#e3e8ee] p-8">
      <h1 className="text-4xl font-bold">Boards</h1>
      <div className="grid gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 lg:grid-cols-4">
        {lists.map(({ id, name, list }) => (
          <div key={id} className="space-y-2">
            <div className="flex items-center gap-2 text-slate-500">
              <h2 className="text-lg font-bold">{name}</h2>
              <button className="rounded-full border-2 p-2 duration-100 ease-in-out hover:bg-black/10">
                <FaPlus />
              </button>
            </div>
            <div className="flex shrink-0 flex-col gap-4">
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

export default DayThirteen;

const Card = ({
  title,
  description,
  level,
  date,
  image,
  participants,
}: {
  title: string;
  description: string;
  level: string;
  date: string;
  image?: string;
  participants: { image: string }[];
}) => {
  return (
    <div className="max-w-[360px] space-y-4 rounded-lg bg-white p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <span
          className={clsx(
            "font-ligth rounded-full px-2 py-1 text-[.5rem] uppercase text-white shadow-md",
            level === "High"
              ? "bg-red-500"
              : level === "Medium"
                ? "bg-yellow-500"
                : "bg-green-500",
          )}
        >
          {level}
        </span>
        <span className="text-xs italic">{date}</span>
      </div>
      {image && (
        <div className="h-[140px] overflow-hidden rounded-xl">
          <img
            className="h-full w-full object-cover"
            src={image}
            alt="Card Image"
          />
        </div>
      )}
      <div className="space-y-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="font-serif text-xs">{description}</p>
      </div>
      <div className="relative flex h-[40px] items-center">
        {participants.map(({ image }, i) => (
          <ProfileCircle key={i} profileImg={image} style={{ left: i * 25 }} />
        ))}
        <button
          className="absolute flex aspect-square w-[40px] items-center justify-center rounded-full border-2  border-dashed border-black opacity-20 shadow-md backdrop-blur-sm duration-150 ease-in-out  hover:opacity-70"
          style={{ left: participants.length * 25 }}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

const ProfileCircle = ({
  profileImg,
  style,
}: {
  profileImg: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className="absolute aspect-square w-[40px] overflow-hidden rounded-full shadow-md"
      style={style}
    >
      <img
        className="h-full w-full object-cover"
        src={profileImg}
        alt="Profile Image"
      />
    </div>
  );
};
