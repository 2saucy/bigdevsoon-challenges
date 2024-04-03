"use client";
import { useState } from "react";
import { FaLocationDot, FaPaw, FaShieldDog } from "react-icons/fa6";
import { IoIosHeartEmpty, IoMdArrowRoundBack } from "react-icons/io";
import { IoFemale, IoHeart, IoMale, IoSearch } from "react-icons/io5";
import { getAssetsDir } from "../utils";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

interface Dog {
  name: string;
  breed: string;
  year: number;
  weight: number;
  height: number;
  distance: string;
  sex: "male" | "female";
  image: string;
  description: string;
}

type Dogs = Dog[];

const FurFriends = () => {
  const assetsDir = getAssetsDir(usePathname());
  const dogs: Dogs = [
    {
      name: "Noemi",
      breed: "Labrador Retriever",
      year: 4,
      weight: 35,
      height: 17,
      distance: "3,1 miles",
      sex: "female",
      image: `${assetsDir}/dog-5.jpg`,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi unde necessitatibus nihil, rem numquam perspiciatis doloremque quae tempore nam ipsum laudantium accusamus velit animi voluptatibus atque quis ut esse inventore.",
    },
    {
      name: "Joey",
      breed: "Pitbull",
      year: 2,
      weight: 27,
      height: 12,
      distance: "10,0 miles",
      sex: "male",
      image: `${assetsDir}/dog-3.jpg`,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi unde necessitatibus nihil, rem numquam perspiciatis doloremque quae tempore nam ipsum laudantium accusamus velit animi voluptatibus atque quis ut esse inventore.",
    },
    {
      name: "Lorren",
      breed: "Dalmata",
      year: 1,
      weight: 20,
      height: 12,
      distance: "1,7 miles",
      sex: "male",
      image: `${assetsDir}/dog-4.jpg`,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi unde necessitatibus nihil, rem numquam perspiciatis doloremque quae tempore nam ipsum laudantium accusamus velit animi voluptatibus atque quis ut esse inventore.",
    },
    {
      name: "Hermes",
      breed: "Bulldog",
      year: 3,
      weight: 20,
      height: 9,
      distance: "0,2 miles",
      sex: "male",
      image: `${assetsDir}/dog-2.jpg`,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi unde necessitatibus nihil, rem numquam perspiciatis doloremque quae tempore nam ipsum laudantium accusamus velit animi voluptatibus atque quis ut esse inventore.",
    },
    {
      name: "Celyn",
      breed: "Spaniel bréton",
      year: 2,
      weight: 24,
      height: 12,
      distance: "2,5 miles",
      sex: "female",
      image: `${assetsDir}/dog-1.jpg`,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi unde necessitatibus nihil, rem numquam perspiciatis doloremque quae tempore nam ipsum laudantium accusamus velit animi voluptatibus atque quis ut esse inventore.",
    },
  ];
  const [currentView, setCurrentView] = useState<"list" | "profile">("list");
  const [currentDog, setCurrentDog] = useState<Dog>({} as Dog);

  return (
    <main className="bg-fur-friends flex min-h-screen items-center justify-center">
      {currentView === "list" ? (
        <DogsList
          dogs={dogs}
          setCurrentDog={setCurrentDog}
          setCurrentView={setCurrentView}
        />
      ) : (
        <Profile currentDog={currentDog} setCurrentView={setCurrentView} />
      )}
    </main>
  );
};

export default FurFriends;

const Profile = ({
  currentDog,
  setCurrentView,
}: {
  currentDog: Dog;
  setCurrentView: (view: "list" | "profile") => void;
}) => {
  const { name, breed, distance, image, description, year, weight, height } =
    currentDog;

  return (
    <Container>
      <div className="absolute flex w-full items-center justify-between px-4 py-4">
        <Button onClick={() => setCurrentView("list")}>
          <IoMdArrowRoundBack className="h-6 w-6" />
        </Button>
        <LikeButton />
      </div>
      <div className="h-1/2">
        <img className="h-full w-full object-cover" src={image} />
      </div>
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <span className="text-sm">{breed}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaLocationDot className="text-[#ff1c7b]" />
            <span>{distance}</span>
          </div>
        </div>
        <div className="flex items-center justify-around">
          <InfoBox title="Age" value={year + " years"} />
          <InfoBox title="Height" value={height + " inchs"} />
          <InfoBox title="Weight" value={weight + " lbs"} />
        </div>
        <p className="text-sm">{description.slice(0, 140)}</p>
        <div className="flex items-center gap-4">
          <button className="basis-1/3 rounded-lg bg-[#ecedef] p-1.5">
            Donate
          </button>
          <button className="flex basis-2/3 items-center justify-center gap-2 rounded-lg bg-[#ff1c7b] p-1.5 text-slate-50">
            Adopt <FaPaw className="h-3 w-3" />
          </button>
        </div>
      </div>
    </Container>
  );
};

const DogsList = ({
  dogs,
  setCurrentDog,
  setCurrentView,
}: {
  dogs: Dogs;
  setCurrentDog: (dog: Dog) => void;
  setCurrentView: (view: "list" | "profile") => void;
}) => {
  return (
    <Container>
      <div className="mx-4 mt-8 flex items-center gap-2">
        <FaShieldDog className="h-6 w-6" />
        <h1 className="text-xl font-bold">FurEverFriends</h1>
      </div>
      <div className="m-4 flex items-center rounded-lg bg-[#ecedef] px-2">
        <IoSearch />
        <input
          className="w-full bg-transparent p-2 outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="space-y-2 overflow-y-scroll p-2">
        {dogs.map((dog, i) => (
          <button
            key={i}
            className="w-full"
            onClick={() => {
              setCurrentDog(dog);
              setCurrentView("profile");
            }}
          >
            <DogCard key={dog.name} {...dog} />
          </button>
        ))}
      </div>
    </Container>
  );
};

const InfoBox = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="flex aspect-square w-[80px] flex-col items-center justify-center rounded-lg bg-[#ecedef]">
      <h3 className="text-sm font-semibold">{title}</h3>
      <span className="text-xs">{value}</span>
    </div>
  );
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col overflow-hidden  bg-white shadow-xl max-md:h-screen max-md:w-full md:h-[800px] md:w-[400px] md:rounded-2xl">
      {children}
    </div>
  );
};

const DogCard = ({
  name,
  breed,
  distance,
  image,
  sex,
}: {
  name: string;
  breed: string;
  distance: string;
  image: string;
  sex: string;
}) => {
  return (
    <div className="flex h-[120px] shrink-0 items-center justify-between gap-2 overflow-hidden rounded-xl pr-2 shadow-md">
      <div className="h-full w-1/2 overflow-hidden rounded-xl">
        <img className="h-full w-full object-cover object-center" src={image} />
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">{name}</span>
          {sex === "female" ? (
            <IoFemale className="h-4 w-4 text-red-500" />
          ) : (
            <IoMale className="h-4 w-4 text-blue-500" />
          )}
        </div>
        <span className="text-start text-xs opacity-50">{breed}</span>
        <span className="flex items-center gap-1 text-xs">
          <FaLocationDot className="text-[#ff1c7b]" /> {distance}
        </span>
      </div>
      <LikeButton />
    </div>
  );
};

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <button onClick={() => setIsLiked(!isLiked)}>
      {isLiked ? (
        <IoHeart className="h-6 w-6 text-red-500" />
      ) : (
        <IoIosHeartEmpty className="h-6 w-6 text-red-500" />
      )}
    </button>
  );
};
