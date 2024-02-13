"use client";

import { type ChangeEvent, type RefObject } from "react";
import Slider from "./Slider";

interface AudioPlayerProps {
  audioRef: RefObject<HTMLAudioElement>;
  currentTime: number;
}

export function formatTime(seconds: number | undefined) {
  if (!seconds) {
    return "0:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const formattedTime = `${String(minutes).padStart(1, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  return formattedTime;
}

export default function AudioPlayer({
  audioRef,
  currentTime,
}: AudioPlayerProps) {
  const onPlaying = (e: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = parseInt(e.target.value, 10);
    }
  };

  return (
    <div className="flex w-full items-center gap-4">
      <span className="text-sm text-[#7a7a7a]">{formatTime(currentTime)}</span>
      <Slider
        value={currentTime}
        max={audioRef.current?.duration || 0}
        onChange={onPlaying}
      />
      <span className="text-[#7a7a7a]">
        {formatTime(audioRef.current?.duration)}
      </span>
    </div>
  );
}
