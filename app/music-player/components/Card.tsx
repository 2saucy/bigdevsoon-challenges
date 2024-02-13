"use client";

import { useEffect, useRef, useState } from "react";
import CircleImage from "./CircleImage";
import Controls from "./Controls";
import AudioPlayer from "./AudioPlayer";
import { Song } from "../types";

interface CardProps {
  currentSong: Song;
  setCurrentSong: (song: Song) => void;
}

export default function Card({ currentSong, setCurrentSong }: CardProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const ref = audioRef.current;

    if (!ref) return;

    const updateCurrentTime = () => {
      setCurrentTime(ref.currentTime);

      if (ref.ended) {
        setIsPlaying(false);
      }
    };

    ref.addEventListener("timeupdate", updateCurrentTime);

    return () => {
      ref.removeEventListener("timeupdate", updateCurrentTime);
    };
  }, [audioRef]);

  return (
    <div className="h-[700px] w-[1200px] overflow-hidden rounded-xl shadow-lg shadow-black/40">
      <audio ref={audioRef} src={currentSong.music} loop={isRepeat} autoPlay />

      <div className="relative h-1/4">
        <div className="h-full w-full overflow-hidden">
          <img
            className="h-full w-full scale-150 object-cover blur-md"
            src={currentSong.image}
          />
        </div>
        <CircleImage image={currentSong.image} />
      </div>

      <div className="flex h-3/4 flex-col items-center justify-between gap-8 bg-[#212121] p-20">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold text-white">
            {currentSong.song}
          </h1>
          <p className="text-sm text-[#9b9b9b]">{currentSong.artist}</p>
        </div>
        <div className="flex w-full flex-col items-center gap-4">
          <Controls
            audioRef={audioRef}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            isRepeat={isRepeat}
            setIsRepeat={setIsRepeat}
            setCurrentSong={setCurrentSong}
            currentSong={currentSong}
          />
          <AudioPlayer audioRef={audioRef} currentTime={currentTime} />
        </div>
      </div>
    </div>
  );
}
