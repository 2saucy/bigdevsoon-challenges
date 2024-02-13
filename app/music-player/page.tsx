"use client";

import { useState } from "react";
import Card from "./components/Card";
import Color from "color-thief-react";
import songList from "./data.json";
import { Song } from "./types";
import "./styles.css";

const Page = () => {
  const [currentSong, setCurrentSong] = useState<Song>(songList[0]);

  return (
    <Color src={currentSong.image} crossOrigin="anonymous" format="hex">
      {({ data, loading }) => {
        const backgroundColor = loading ? "black" : data;
        return (
          <main
            style={{ backgroundColor }}
            className="flex min-h-screen items-center justify-center"
          >
            <Card currentSong={currentSong} setCurrentSong={setCurrentSong} />
          </main>
        );
      }}
    </Color>
  );
};

export default Page;
