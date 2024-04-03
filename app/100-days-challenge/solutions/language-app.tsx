"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import { BsPersonCircle } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { RiFileCopy2Fill } from "react-icons/ri";
import { getAssetsDir } from "../utils";
import { Badge } from "@/components/ui/badge";
import { FaCrown, FaPlay } from "react-icons/fa";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const LanguageApp = () => {
  const assetsDir = getAssetsDir(usePathname());
  const leaderboard = [
    {
      name: "Walter",
      points: 280,
      avatar: `${assetsDir}/nahida.webp`,
    },
    {
      name: "Juan",
      points: 270,
      avatar: `${assetsDir}/nahida.webp`,
    },
    {
      name: "María",
      points: 260,
      avatar: `${assetsDir}/nahida.webp`,
    },
    {
      name: "LadyCari",
      points: 240,
      avatar: `${assetsDir}/nahida.webp`,
    },
    {
      name: "Luisa",
      points: 150,
      avatar: `${assetsDir}/nahida.webp`,
    },
    {
      name: "Ana",
      points: 140,
      avatar: `${assetsDir}/nahida.webp`,
    },
    {
      name: "Carlos",
      points: 130,
      avatar: `${assetsDir}/nahida.webp`,
    },
    {
      name: "Marta",
      points: 120,
      avatar: `${assetsDir}/nahida.webp`,
    },
    {
      name: "David",
      points: 110,
      avatar: `${assetsDir}/nahida.webp`,
    },
    {
      name: "Elena",
      points: 100,
      avatar: `${assetsDir}/nahida.webp`,
    },
  ];

  const user = {
    avatar: `${assetsDir}/nahida.webp`,
    name: "LadyCari",
    points: 240,
    active_language: {
      language: "English",
      flag: `${assetsDir}/flag.png`,
      progress: 50,
    },
    lessons: {
      grammar: 30,
      reading: 20,
      listening: 30,
      speaking: 40,
    },
    leaderboard_rank: 4,
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-violet-600">
      <div className="w-1/3 overflow-hidden rounded-3xl bg-white shadow-md">
        <div className="max-h-[70vh] space-y-6 overflow-y-auto p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage className="object-cover" src={user.avatar} />
              </Avatar>
              <h2 className="font-bold">{user.name}</h2>
            </div>
            <Badge>
              <FaCrown className="mr-2 h-4 w-4 text-yellow-400" /> {user.points}
            </Badge>
          </div>
          <ActiveLanguage {...user.active_language} />
          <div className="space-y-4">
            <h2 className="text-lg font-bold">My Lessons</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(user.lessons).map((lesson) => {
                const progress: number =
                  user.lessons[
                    lesson as "grammar" | "speaking" | "reading" | "listening"
                  ];

                return (
                  <LessonsCard
                    key={lesson}
                    lesson={lesson}
                    progress={progress}
                  />
                );
              })}
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Leaderboard</h2>
            <Leaderboard leaderboard={leaderboard} />
          </div>
        </div>
        <div className="flex h-[80px] items-center justify-evenly">
          <BsPersonCircle className="h-6 w-6 basis-1/3" />
          <IoHome className="h-6 w-6 basis-1/3" />
          <RiFileCopy2Fill className="h-6 w-6 basis-1/3" />
        </div>
      </div>
    </main>
  );
};

export default LanguageApp;

const ActiveLanguage = ({
  language,
  flag,
  progress,
}: {
  language: string;
  flag: string;
  progress: number;
}) => {
  return (
    <div className="relative flex items-center gap-4 rounded-lg bg-violet-600 p-4 text-slate-50">
      <Avatar className="h-16 w-16">
        <AvatarImage className="object-cover" src={flag} />
      </Avatar>
      <div className="flex-1">
        <h2 className="font-bold">{language} lesson</h2>
        <div className="flex items-center gap-2">
          <ProgressBar progress={progress} />
          <span>{progress}%</span>
        </div>
      </div>
      <Button className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white font-semibold text-violet-600 shadow-md hover:scale-105 hover:bg-white">
        <FaPlay className="mr-2 h-4 w-4" /> Continue
      </Button>
    </div>
  );
};

const LessonsCard = ({
  lesson,
  progress,
}: {
  lesson: string;
  progress: number;
}) => {
  return (
    <div className="space-y-2 rounded-lg bg-slate-50 p-4 shadow-lg">
      <div className="text-lg font-semibold">
        {lesson.charAt(0).toUpperCase() + lesson.slice(1)}
      </div>
      <span className="text-xs">{progress}% completed</span>
      <ProgressBar progress={progress} customBarColor="bg-violet-600" />
    </div>
  );
};

const Leaderboard = ({
  leaderboard,
}: {
  leaderboard: { name: string; points: number; avatar: string }[];
}) => {
  const [viewAll, setViewAll] = useState<boolean>(false);

  return (
    <div className="space-y-2">
      {!viewAll ? (
        <>
          {leaderboard.slice(0, 5).map((person) => (
            <LeaderboardCard key={person.name} {...person} />
          ))}
          <Button
            variant={"ghost"}
            className="w-full"
            onClick={() => setViewAll(true)}
          >
            view all
          </Button>
        </>
      ) : (
        <>
          {leaderboard.map((person) => (
            <LeaderboardCard key={person.name} {...person} />
          ))}
        </>
      )}
    </div>
  );
};

const LeaderboardCard = ({
  name,
  points,
  avatar,
}: {
  name: string;
  points: number;
  avatar: string;
}) => {
  return (
    <div className="flex items-center justify-between bg-white px-2 py-1 shadow-lg">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage className="object-cover" src={avatar} />
        </Avatar>
        <span className="font-semibold">{name}</span>
      </div>
      <div className="flex items-center">
        <FaCrown className="mr-2 h-4 w-4 text-yellow-400" /> {points}
      </div>
    </div>
  );
};

const ProgressBar = ({
  progress,
  customBarColor,
}: {
  progress: number;
  customBarColor?: string;
}) => {
  const progressWidth = `w-[${progress}%]`;
  const barColor = customBarColor ? customBarColor : "bg-white";

  return (
    <div className={clsx("h-1.5 w-full rounded-full bg-opacity-50", barColor)}>
      <div className={clsx("h-1.5 rounded-full", progressWidth, barColor)} />
    </div>
  );
};
