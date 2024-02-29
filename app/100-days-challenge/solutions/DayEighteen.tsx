"use client";
import clsx from "clsx";
import { useState } from "react";
import { FaList } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";
import { GrAppsRounded } from "react-icons/gr";

const DayEighteen = () => {
  const images: string[] = [
    "birmingham-museums-trust-wvD0zZnRbcw-unsplash.jpg",
    "chuttersnap-eH_ftJYhaTY-unsplash.jpg",
    "dylan-leagh-UG3L8WAQLBs-unsplash.jpg",
    "emma-fabbri-2TmsyZXMNTE-unsplash.jpg",
    "hans-veth-ltEraYc7QrU-unsplash.jpg",
    "joshua-coleman-R1OSU00xo78-unsplash.jpg",
    "redd-f-c7xBEFBJhkg-unsplash.jpg",
    "steve-johnson-u11UYmBfuCc-unsplash.jpg",
    "zhang-xupeng--wlxM5Ig_LI-unsplash.jpg",
  ];

  const [activeMode, setActiveMode] = useState<"Multi" | "List" | "Carousel">(
    "Multi",
  );

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-300">
      <Container>
        <Header activeMode={activeMode} setActiveMode={setActiveMode} />
        {activeMode === "List" ? (
          <List images={images} />
        ) : activeMode === "Carousel" ? (
          <Carousel images={images} />
        ) : (
          <Multi images={images} />
        )}
      </Container>
    </main>
  );
};

export default DayEighteen;

const Header = ({
  activeMode,
  setActiveMode,
}: {
  activeMode: "Multi" | "List" | "Carousel";
  setActiveMode: (mode: "Multi" | "List" | "Carousel") => void;
}) => {
  return (
    <header className="flex items-center justify-between bg-[#333331] p-2 text-slate-50 shadow-md">
      <h1>Images</h1>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setActiveMode("Multi")}
          disabled={activeMode === "Multi"}
        >
          <GrAppsRounded />
        </button>
        <button
          onClick={() => setActiveMode("List")}
          disabled={activeMode === "List"}
        >
          <FaList />
        </button>
        <button
          onClick={() => setActiveMode("Carousel")}
          disabled={activeMode === "Carousel"}
        >
          <FaDisplay />
        </button>
      </div>
    </header>
  );
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[800px] overflow-hidden rounded-xl shadow-md">
      {children}
    </div>
  );
};

const ImageCard = ({
  image,
  className,
}: {
  image: string;
  className?: string;
}) => {
  return (
    <div className={clsx("aspect-video overflow-hidden rounded-lg", className)}>
      <img className="h-full w-full object-cover" src={image} />
    </div>
  );
};

const Multi = ({ images }: { images: string[] }) => {
  return (
    <div className="grid h-96 grid-cols-3 gap-4 bg-[#212121] p-4">
      {images.map((image, i) => (
        <ImageCard
          key={i}
          image={"/assets/100-days-challenge/day-18/" + image}
        />
      ))}
    </div>
  );
};

const List = ({ images }: { images: string[] }) => {
  return (
    <div className="flex h-96 flex-col overflow-y-auto bg-[#212121] ">
      {images.map((image, i) => (
        <div
          key={i}
          className={clsx(
            "flex h-[100px] items-center gap-2 p-2 text-slate-50",
            i % 2 === 0 && "bg-[#333331]",
          )}
        >
          <ImageCard
            key={i}
            className="h-16"
            image={"/assets/100-days-challenge/day-18/" + image}
          />
          <p>Image {i + 1}</p>
        </div>
      ))}
    </div>
  );
};

const Carousel = ({ images }: { images: string[] }) => {
  const [curImg, setCurImg] = useState<string>(images[0]);

  return (
    <div className="flex h-96 flex-col gap-4 bg-[#212121] p-4">
      <ImageCard image={"/assets/100-days-challenge/day-18/" + curImg} />
      <div className="flex items-center gap-4">
        {images.map((image, i) => (
          <button
            key={i}
            className={image === curImg ? "grayscale-0" : "grayscale"}
            onClick={() => setCurImg(image)}
          >
            <ImageCard
              className="h-16 shrink-0"
              image={"/assets/100-days-challenge/day-18/" + image}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
