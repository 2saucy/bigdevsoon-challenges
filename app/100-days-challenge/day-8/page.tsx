"use client";
import { useState } from "react";
import data from "./data.json";
import { Data, MusicEvent, MusicEvents } from "./types";
import { IoTicket } from "react-icons/io5";
import clsx from "clsx";
import { capNumOfChars, outputDate, formatTime } from "./utils";

const Page = () => {
  const typedData: Data = data;
  const events: MusicEvents = typedData.events;

  return (
    <main className="flex min-h-screen flex-col justify-center gap-8 bg-[#eaf2ff] p-16">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Music events</h1>
        <p>in London, United Kingdom</p>
      </div>
      <EventsContainer events={events} />
    </main>
  );
};

export default Page;

const EventsContainer = ({ events }: { events: MusicEvents }) => {
  return (
    <div className="flex flex-col gap-4">
      {events.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  );
};

const EventCard = ({ title, description, date }: MusicEvent) => {
  const [isSoldOut, setIsSoldOut] = useState<boolean>(false);
  const colors = [
    "bg-[#f7dad4]",
    "bg-[#edf7d4]",
    "bg-[#d3e6f7]",
    "bg-[#e1d3f7]",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const dateObj = new Date(date);

  return (
    <div className="flex justify-between gap-4 rounded-xl bg-white p-5 max-md:flex-col md:items-center">
      <div
        className={clsx(
          "flex flex-col items-center justify-center rounded-xl p-4",
          randomColor,
        )}
      >
        <span className="text-xs">{outputDate(dateObj)}</span>
        <span className="text-2xl">
          {`${formatTime(dateObj.getHours())}:${formatTime(dateObj.getMinutes())}`}
        </span>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{capNumOfChars(description)}</p>
      </div>
      {isSoldOut ? (
        <p className="h-full w-[200px] whitespace-nowrap text-center font-bold max-md:w-full">
          Sold out!
        </p>
      ) : (
        <button
          className="flex h-full w-[200px] items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-black px-4 py-3.5 text-white max-md:w-full"
          onClick={() => setIsSoldOut(true)}
        >
          <IoTicket />
          Buy a Ticket
        </button>
      )}
    </div>
  );
};
