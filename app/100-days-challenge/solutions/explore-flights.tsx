import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import clsx from "clsx";
import { FaCar, FaHotel } from "react-icons/fa";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { IoMdCalendar } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import {
  MdFlight,
  MdOutlineFlightLand,
  MdOutlineFlightTakeoff,
} from "react-icons/md";

const ExploreFlights = () => {
  const tabs = [
    {
      name: "Flight",
      icon: <MdFlight />,
    },
    {
      name: "Hotel",
      icon: <FaHotel />,
    },
    {
      name: "Rent a car",
      icon: <FaCar />,
    },
  ];

  const checkboxes = ["Round trip", "One way", "Multi city"];

  return (
    <main className="flex min-h-screen items-center justify-center bg-explore-flights bg-cover">
      <div className="relative rounded-r-xl rounded-bl-xl bg-white p-8 shadow-lg">
        <div className="absolute -top-12 left-0 flex items-center overflow-hidden rounded-t-xl bg-white">
          {tabs.map(({ icon, name }) => (
            <div
              key={name}
              className={clsx(
                "flex cursor-pointer items-center gap-2 whitespace-nowrap p-3 duration-150 ease-in-out",
                name.toLowerCase() === "flight"
                  ? "bg-violet-600 text-white"
                  : "hover:bg-slate-200",
              )}
            >
              {icon} <span>{name}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">
            Discover your next dream destination
          </h1>
          <div className="flex items-center gap-4">
            {checkboxes.map((label) => {
              const id = label.toLowerCase().replace(" ", "-");

              return (
                <div key={id} className="flex items-center space-x-2">
                  <Checkbox id={id} />
                  <label htmlFor={id}>{label}</label>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-[#cfcfcf] p-2">
            <div className="flex items-center rounded-lg bg-white">
              <MdOutlineFlightTakeoff className="ml-4 mr-2" />
              <input
                className="w-full bg-transparent p-2 outline-none"
                type="text"
                placeholder="Where from?"
              />
            </div>
            <Button
              variant="secondary"
              className="aspect-square rounded-full p-1"
            >
              <HiOutlineSwitchHorizontal className="h-4 w-4" />
            </Button>
            <div className="flex items-center rounded-lg bg-white">
              <MdOutlineFlightLand className="ml-4 mr-2" />
              <input
                className="w-full bg-transparent p-2 outline-none"
                type="text"
                placeholder="Where to?"
              />
            </div>
            <Popover>
              <PopoverTrigger>
                <Button
                  variant="ghost"
                  className="flex items-center gap-4 bg-white"
                >
                  <IoMdCalendar className="h-4 w-4 text-black" />
                  <span className="text-[#a2a9b4]">Pick a date</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Calendar mode="single" />
              </PopoverContent>
            </Popover>
            <Button variant="secondary">
              <IoClose className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <span className="cursor-pointer text-sm text-violet-600 hover:underline">
              Add a flight
            </span>
            <Button className="bg-violet-600 hover:bg-violet-800">
              Search
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExploreFlights;
