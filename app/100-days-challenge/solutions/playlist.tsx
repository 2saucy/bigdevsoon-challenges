"use client";
import clsx from "clsx";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { getAssetsDir } from "../utils";
import { IoIosArrowBack, IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { IoPlay, IoPlayBack, IoPlayForward } from "react-icons/io5";
import { MdMoreVert } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { Button } from "@/components/ui/button";

type Playlist = {
  name: string;
  likes: number;
  cover: string;
  songs: Song[];
};

type Song = {
  cover: string;
  name: string;
  author: string;
  duration: string;
};

const Playlist = () => {
  const assetsDir = getAssetsDir(usePathname());
  const playlist: Playlist = {
    name: "Chill Vibes 2024",
    likes: 100.321,
    cover: `${assetsDir}/picture.jpg`,
    songs: [
      {
        cover: `${assetsDir}/cover (1).jpg`,
        name: "Serenity Dreams",
        author: "Luna Bliss",
        duration: "4:12",
      },
      {
        cover: `${assetsDir}/cover (2).jpg`,
        name: "Tranquil Echoes",
        author: "Zenith Harmonies",
        duration: "4:39",
      },
      {
        cover: `${assetsDir}/cover (3).jpg`,
        name: "Ethereal Whispers",
        author: "Aurora Breeze",
        duration: "5:03",
      },
      {
        cover: `${assetsDir}/cover (4).jpg`,
        name: "Mystic Oasis",
        author: "Solstice Serenity",
        duration: "2:59",
      },
      {
        cover: `${assetsDir}/cover (5).jpg`,
        name: "Calm Horizons",
        author: "Echo falls",
        duration: "3:49",
      },
      {
        cover: `${assetsDir}/cover (6).jpg`,
        name: "Azure Reverie",
        author: "Nancy Grace",
        duration: "3:10",
      },
    ],
  };

  const [isPlaying, setIsPlaying] = useState(playlist.songs[0]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="relative flex aspect-[1/2] w-[400px] flex-col gap-6 overflow-hidden rounded-3xl bg-[#0f0f45] text-white">
        <div className="relative flex flex-col gap-4 px-6 pt-6">
          <IoIosArrowBack className="absolute h-6 w-6" />
          <div className="aspect-square w-[180px] self-center overflow-hidden rounded-lg">
            <img
              src={playlist.cover}
              className="h-full w-full object-cover"
              alt={playlist.name + " Playlist Cover"}
            />
          </div>
          <div className="flex items-center">
            <div className="flex-1">
              <h1 className="text-lg font-bold">{playlist.name}</h1>
              <span className="text-sm opacity-70">
                {playlist.likes} likes · 10h 21min.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <LikeButton />
              <MdMoreVert className="h-6 w-6" />
            </div>
          </div>
        </div>
        <ListOfSongs setIsPlaying={setIsPlaying} songs={playlist.songs} />
        <SongView song={isPlaying} />
      </div>
    </main>
  );
};

export default Playlist;

const ListOfSongs = ({
  songs,
  setIsPlaying,
}: {
  songs: Song[];
  setIsPlaying: (song: Song) => void;
}) => {
  return (
    <div className="space-y-4 overflow-y-scroll pb-28">
      {songs.map(({ name, cover, author, duration }, i) => (
        <div
          key={i}
          className="flex cursor-pointer items-center gap-4 p-2 pr-2 hover:bg-white/10"
          onClick={() => setIsPlaying(songs[i])}
        >
          <div className="aspect-square w-16 overflow-hidden rounded-lg">
            <img
              src={cover}
              className="h-full w-full object-cover"
              alt={name + " Song Cover"}
            />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold">{name}</h2>
            <p className="text-xs opacity-70">{author}</p>
          </div>
          <p className="text-xs opacity-70">{duration}</p>
        </div>
      ))}
    </div>
  );
};

const SongView = ({ song }: { song: Song }) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const { cover, name, author, duration } = song;

  return (
    <div
      className={clsx(
        "absolute bottom-0 left-0 w-full rounded-3xl bg-white/20 text-white backdrop-blur-xl duration-300 ease-in-out",
        isMaximized ? "h-3/4 p-6" : "h-0",
      )}
    >
      {!isMaximized ? (
        <button
          className="absolute bottom-0 left-0 flex w-full items-center gap-4 rounded-3xl bg-white p-4 text-black"
          onClick={() => setIsMaximized(true)}
        >
          <div className="aspect-square w-16 overflow-hidden rounded-2xl">
            <img className="h-full w-full object-cover" src={cover} />
          </div>
          <div className="flex-1 text-start">
            <h2 className="font-semibold">{name}</h2>
            <p className="text-xs opacity-70">{author}</p>
          </div>
          <FaPlay className="h-6 w-6" />
        </button>
      ) : (
        <button
          className="absolute -top-4 left-1/2 h-2 w-[200px] -translate-x-1/2 rounded-xl bg-white"
          onClick={() => setIsMaximized(false)}
        />
      )}

      {isMaximized && (
        <>
          <div className="aspect-square w-full overflow-hidden rounded-xl">
            <img src={cover} className="h-full w-full object-cover" />
          </div>
          <div className="my-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">{name}</h2>
              <p className="text-sm opacity-70">{author}</p>
            </div>
            <LikeButton />
          </div>
          <Player />
        </>
      )}
    </div>
  );
};

const Player = () => {
  return (
    <div>
      <div className="h-2 w-full rounded-full bg-white/50" />
      <div className="flex items-center justify-between text-xs">
        <span>0:00</span>
        <span>0:00</span>
      </div>
      <div className="flex items-center justify-evenly">
        <Button variant={"ghost"}>
          <IoPlayBack className="h-6 w-6" />
        </Button>
        <Button variant={"ghost"}>
          <IoPlay className="h-6 w-6" />
        </Button>
        <Button variant={"ghost"}>
          <IoPlayForward className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <button
      className="rounded-full p-1 hover:bg-red-500/20"
      onClick={() => setIsLiked(!isLiked)}
    >
      {isLiked ? (
        <IoIosHeart className="h-6 w-6 text-red-500" />
      ) : (
        <IoIosHeartEmpty className="h-6 w-6" />
      )}
    </button>
  );
};
