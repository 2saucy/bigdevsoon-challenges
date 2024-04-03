"use client";
import clsx from "clsx";
import YoutubePlayer from "react-player/youtube";

const MusicFestival = () => {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-music-festival bg-cover">
      <Header />
      <div>
        <div className="absolute right-6 top-[40%] flex -translate-y-1/2 flex-col gap-4 text-right text-7xl font-black tracking-wider text-white">
          <span>2024</span>
          <span>ELECTRO</span>
          <span>MUSIC</span>
          <span>FESTIVAL</span>
        </div>
        <SideCard />
      </div>
    </main>
  );
};

export default MusicFestival;

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-black/20 p-6">
      <div className="flex space-x-4">
        <h1 className="text-3xl font-black text-white">ELECTROFESTIVAL</h1>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center rounded-full border-4 border-emerald-300 px-2 text-xs font-semibold text-emerald-400">
            3-6 JULY
          </div>
          <div className="flex items-center justify-center rounded-full border-4 border-emerald-300 px-2 text-xs font-semibold text-emerald-400">
            ZAMARDI, HUNGARY
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

const Navbar = () => {
  return (
    <nav className="flex items-center gap-2">
      {["Tickets", "Lineup", "News", "Artist", "Explore"].map((route) => (
        <a
          key={route}
          href="#"
          className={clsx(
            "rounded-full px-2.5 py-1 font-semibold text-white",
            route === "Tickets"
              ? "bg-emerald-400 text-black"
              : "hover:bg-white/20",
          )}
        >
          {route}
        </a>
      ))}
    </nav>
  );
};

const SideCard = () => {
  return (
    <div className="absolute left-[20%] top-[60%] flex w-[500px] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 overflow-hidden rounded-2xl bg-black/20 p-8 backdrop-blur-md">
      <h2 className="text-lg font-black text-white">
        What is ELECTRO MUSIC FESTIVAL
      </h2>
      <p className="text-sm text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nisi
        recusandae rem esse aperiam atque nam harum similique? Dolorem labore,
        dignissimos quas odit dolores repudiandae!
      </p>
      <div className="aspect-[2/1] overflow-hidden rounded-xl">
        <YoutubePlayer
          url={"https://www.youtube.com/watch?v=5dbEhBKGOtY"}
          width="100%"
          height="100%"
        />
      </div>
      <span className="text-xs text-gray-500">2023 Official Trailer</span>
    </div>
  );
};
