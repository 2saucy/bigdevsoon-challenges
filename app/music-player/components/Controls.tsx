"use client";

import { useState, type ChangeEvent, type RefObject } from "react";
import Button from "./Button";
import data from "../data.json";
import { Song } from "../types";

import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { MdOutlineReplay } from "react-icons/md";
import { IoRepeatOutline } from "react-icons/io5";
import { FaPause } from "react-icons/fa6";
import { IoPlay } from "react-icons/io5";
import { FaVolumeUp } from "react-icons/fa";
import { FaVolumeDown } from "react-icons/fa";
import { FaVolumeOff } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";
import Slider from "./Slider";

interface ControlProps {
  isPlaying: boolean;
  setIsPlaying: (bool: boolean) => void;
  isRepeat: boolean;
  setIsRepeat: (bool: boolean) => void;
  audioRef: RefObject<HTMLAudioElement>;
  currentSong: Song;
  setCurrentSong: (song: Song) => void;
}

export default function Controls({
  isPlaying,
  setIsPlaying,
  isRepeat,
  setIsRepeat,
  audioRef,
  currentSong,
  setCurrentSong,
}: ControlProps) {
  const [volume, setVolume] = useState<number>(audioRef.current?.volume || 1);
  const isMuted = audioRef.current?.muted;

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.volume = parseFloat(e.target.value);
      setVolume(parseFloat(e.target.value));
    }
  };

  const play = () => {
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pause = () => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const previous = () => {
    setCurrentSong(
      data[(data.indexOf(currentSong) - 1 + data.length) % data.length],
    );
    setIsPlaying(true);
  };

  const next = () => {
    setCurrentSong(data[(data.indexOf(currentSong) + 1) % data.length]);
    setIsPlaying(true);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
    }
  };

  const replay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div className="relative grid grid-cols-5 gap-6">
      <Button text="Replay" onClick={replay}>
        <MdOutlineReplay className="h-6 w-6" />
      </Button>

      <Button text="Previous" onClick={previous}>
        <MdSkipPrevious className="h-6 w-6" />
      </Button>

      {!isPlaying ? (
        <Button text="Play" background="white" onClick={play} primary>
          <IoPlay className="h-6 w-6" />
        </Button>
      ) : (
        <Button text="Pause" background="white" onClick={pause} primary>
          <FaPause className="h-6 w-6" />
        </Button>
      )}

      <Button text="Next" onClick={next}>
        <MdSkipNext className="h-6 w-6" />
      </Button>

      {isRepeat ? (
        <div className="relative">
          <div className="absolute right-2 top-2 rounded-full bg-[#1ed760] p-0.5" />
          <Button text="Turn-off" onClick={() => setIsRepeat(false)}>
            <IoRepeatOutline className="h-6 w-6 text-[#1ed760]" />
          </Button>
        </div>
      ) : (
        <Button text="Loop" onClick={() => setIsRepeat(true)}>
          <IoRepeatOutline className="h-6 w-6" />
        </Button>
      )}

      <div className="absolute left-[450px] flex w-[170px] items-center">
        <Button text={isMuted ? "Unmute" : "Mute"} onClick={toggleMute}>
          {isMuted ? (
            <FaVolumeMute className="h-6 w-6" />
          ) : volume > 0.5 ? (
            <FaVolumeUp className="h-6 w-6" />
          ) : volume > 0 ? (
            <FaVolumeDown className="h-6 w-6" />
          ) : (
            <FaVolumeOff className="h-6 w-6" />
          )}
        </Button>
        <Slider
          value={volume}
          min={0}
          max={1}
          onChange={handleVolumeChange}
          step={0.01}
        />
      </div>
    </div>
  );
}
