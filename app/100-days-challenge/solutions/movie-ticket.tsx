"use client"
import { AspectRatio, } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const MovieTicket = () => {
  const [isBuyinTicket, setIsBuyinTicket] = useState(false);


  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">
      {!isBuyinTicket ? <Movie setIsBuyinTicket={setIsBuyinTicket} /> : <BuyTicket setIsBuyinTicket={setIsBuyinTicket} />}
    </main>
  );
}

export default MovieTicket;

const Movie = ({ setIsBuyinTicket }: { setIsBuyinTicket: (bool: boolean) => void }) => {
  return (
    <div className="rounded-2xl flex flex-col overflow-hidden bg-white w-[400px] aspect-[2/4]">
      <div className="basis-1/2">
        <img className="h-full w-full object-cover" src="/assets/100-days-challenge/day-24/spirited-away.jpg" alt="Spirited Away"/>
      </div>
      <div className="flex flex-col basis-1/2 p-4 overflow-y-auto">
        <div className="overflow-y-auto space-y-4">
          <div>
            <h1 className="text-2xl font-bold">Spirited Away</h1>
            <div className="text-xs flex items-center justify-between">
              <span>Anime/Adventure/Fantasy</span>
              <span>2h 50m</span>
            </div>
          </div>
          <p className="text-sm">
            The story centres around Chihiro, a young girl about to move into a new place and who feels insecure about the new environment she will be living in. These fears become a part of her encounter with a strange abandoned amusement park that she and her parents find when they reach a dead end in their car.
          </p>
          <div>
            <h2 className="text-lg font-bold">Cast</h2>
            <div className="flex items-center gap-4">
              <div className="w-20 rounded-lg overflow-hidden">
                <AspectRatio ratio={1 / 1}>
                  <img
                    className="h-full w-full object-cover"
                    src="/assets/100-days-challenge/day-1/profile-pic.jpg"
                  />
                </AspectRatio>
              </div>
              <div className="w-20 rounded-lg overflow-hidden">
                <AspectRatio ratio={1 / 1}>
                  <img
                    className="h-full w-full object-cover"
                    src="/assets/100-days-challenge/day-1/profile-pic.jpg"
                  />
                </AspectRatio>
              </div>
              <div className="w-20 rounded-lg overflow-hidden">
                <AspectRatio ratio={1 / 1}>
                  <img
                    className="h-full w-full object-cover"
                    src="/assets/100-days-challenge/day-1/profile-pic.jpg"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
        <Button className="mt-2" onClick={() => setIsBuyinTicket(true)}>
          Buy tickets
        </Button>
      </div>
    </div>
  )
}

const BuyTicket = ({ setIsBuyinTicket }: { setIsBuyinTicket: (bool: boolean) => void }) => {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden bg-white w-[400px] aspect-[2/4]">
      <div className="basis-2/3 bg-violet-600 text-slate-50 p-4 flex flex-col justify-between">
        <div className="flex items-center gap-4">
          <Button variant={"ghost"} size={"icon"} onClick={() => setIsBuyinTicket(false)}><IoIosArrowBack className="h-6 w-6" /></Button>
          <h1 className="text-xl">Choose seats</h1>
        </div>
        <CinemaSeats />
        <div className="flex items-center justify-around text-xs">
          <p><span className="bg-orange-500 px-2 aspect-square rounded-full mr-2" />Select</p>
          <p><span className="bg-gray-200 px-2 aspect-square rounded-full mr-2" />Reserved</p>
          <p><span className="bg-green-200 px-2 aspect-square rounded-full mr-2" />Available</p>
        </div>
      </div>
      <div className="bg-white flex flex-col gap-4 basis-1/3 p-4">
        <div className="space-y-2">
          <h2>Date</h2>
          <div className="grid grid-cols-4 gap-2">
            <DateBox>21 Feb</DateBox>
            <DateBox>22 Feb</DateBox>
            <DateBox>23 Feb</DateBox>
            <DateBox>24 Feb</DateBox>
          </div>
        </div>
        <div className="space-y-2">
          <h2>Time</h2>
          <div className="grid grid-cols-4 gap-2">
            <DateBox>15:15</DateBox>
            <DateBox>17:45</DateBox>
            <DateBox>20:35</DateBox>
            <DateBox>22:15</DateBox>
          </div>
        </div>
        <Button>Pay</Button>
      </div>
    </div>
  )
}

const DateBox = ({ children }: { children: React.ReactNode }) => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <div onClick={() => setIsSelected(!isSelected)} className={clsx("text-center border-2  rounded-lg bg-transparent cursor-pointer", isSelected ? "text-orange-500 border-orange-500" : "text-gray-500 border-gray-500")}>
      {children}
    </div>
  )
}

const CinemaSeats = () => {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([])
  const [reservedSeats, setReservedSeats] = useState<number[]>([])

  const seats = [
    [null, 1, 2, 3, 4, 5, 6, null],
    [null, 7, 8, 9, 10, 11, 12, null],
    [13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, 32, 33, 34, 35, 36],
    [37, 38, 39, 40, 41, 42, 43, 44],
  ]


  const onClick = ({ value }: { value: number }) => {
    if (value === null) return

    if (selectedSeats.includes(value)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== value))
    } else {
      setSelectedSeats([...selectedSeats, value])
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {seats.map((col, i) => (
        <div key={i} className="space-x-1">
          {col.map((row, i) => (
            <Button onClick={(row) => onClick} key={row} className={clsx("w-8 h-8", row === null ? "hidden" : selectedSeats.includes(row) ? "bg-orange-500" : "bg-gray-200" )} />
          ))}
        </div>
      ))}
    </div>
  )
} 