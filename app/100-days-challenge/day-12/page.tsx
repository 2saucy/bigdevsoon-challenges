"use client"
import { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { images } from "./data.json";
import clsx from "clsx";

const Page = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const currentImage = images[currentImgIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="flex items-center justify-center min-h-screen bg-day-12 bg-cover">
      <div className="flex flex-col gap-4 rounded-lg overflow-hidden bg-slate-50 w-[450px] shadow-xl">
        <div className="h-[240px] relative">
          <img className="h-full w-full object-cover" src={currentImage.url} />
          <div className="flex gap-4 absolute bottom-2 -translate-x-1/2 left-1/2">
            {images.map((image, index) => (
              <button 
                key={image.id} 
                onClick={() => setCurrentImgIndex(index)} 
                className={clsx(
                  "px-1.5 aspect-square rounded-full cursor-pointer shadow-md ease-in-out duration-150", 
                  image === currentImage ? "bg-white" : "bg-white/60"
                )} 
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-bold text-2xl">Gramercy Tavern</h1>
              <p className="text-xs">20th St New York</p>
            </div>
            <button onClick={() => setIsLiked(!isLiked)} className="hover:scale-110 ease-in-out duration-75">
              {!isLiked ? <IoHeartOutline className="h-6 w-6 text-red-500" /> : <IoHeart className="h-6 w-6 text-red-500" />}
            </button>
          </div>
          <div className="flex items-center gap-2">
            <IoIosStar className="text-[#fe881c]" />
            <IoIosStar className="text-[#fe881c]" />
            <IoIosStar className="text-[#fe881c]" />
            <IoIosStar className="text-[#fe881c]" />
            <IoIosStar className="text-[#fe881c]" />
            <p className="text-xs font-ligth">(231 reviews)</p>
          </div>
          <p className="my-4 font-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel, quo aut culpa illum labore suscipit modi voluptates vero, perferendis similique rem ipsam mollitia ea expedita quasi, harum natus recusandae.
          </p>
        </div>
        <button className="bg-black p-4 text-slate-50 font-bold hover:bg-white hover:text-black">
          Make a reservation
        </button>
      </div>
    </main>
  );
}

export default Page;