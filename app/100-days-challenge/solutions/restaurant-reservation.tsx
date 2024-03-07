"use client";
import { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import clsx from "clsx";

const RestaurantReservation = () => {
  const images: string[] = [
    "joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg",
    "chris-liverani-oCsaxvGCehM-unsplash.jpg",
    "chad-montano-MqT0asuoIcU-unsplash.jpg",
  ];

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
    <main className="bg-day-12 flex min-h-screen items-center justify-center bg-cover">
      <div className="flex w-[450px] flex-col gap-4 overflow-hidden rounded-lg bg-slate-50 shadow-xl">
        <div className="relative h-[240px]">
          <img
            className="h-full w-full object-cover"
            src={"/assets/100-days-challenge/day-12/" + currentImage}
          />
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-4">
            {images.map((image, i) => (
              <button
                key={i}
                onClick={() => setCurrentImgIndex(i)}
                className={clsx(
                  "aspect-square cursor-pointer rounded-full px-1.5 shadow-md duration-150 ease-in-out",
                  image === currentImage ? "bg-white" : "bg-white/60",
                )}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Gramercy Tavern</h1>
              <p className="text-xs">20th St New York</p>
            </div>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="duration-75 ease-in-out hover:scale-110"
            >
              {!isLiked ? (
                <IoHeartOutline className="h-6 w-6 text-red-500" />
              ) : (
                <IoHeart className="h-6 w-6 text-red-500" />
              )}
            </button>
          </div>
          <div className="flex items-center gap-2">
            <IoIosStar className="text-[#fe881c]" />
            <IoIosStar className="text-[#fe881c]" />
            <IoIosStar className="text-[#fe881c]" />
            <IoIosStar className="text-[#fe881c]" />
            <IoIosStar className="text-[#fe881c]" />
            <p className="font-ligth text-xs">(231 reviews)</p>
          </div>
          <p className="my-4 font-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            vel, quo aut culpa illum labore suscipit modi voluptates vero,
            perferendis similique rem ipsam mollitia ea expedita quasi, harum
            natus recusandae.
          </p>
        </div>
        <button className="bg-black p-4 font-bold text-slate-50 hover:bg-white hover:text-black">
          Make a reservation
        </button>
      </div>
    </main>
  );
};

export default RestaurantReservation;
