"use client";
import { MdLightMode } from "react-icons/md";
import { HiMoon } from "react-icons/hi";
import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="relative h-[25%] w-full">
      <img
        className="h-full w-full object-cover object-center"
        src="/assets/todo-app/background.jpg"
      />
      <h1 className="absolute top-1/2 ml-6 -translate-y-1/2 text-[6vh] font-extrabold text-white">
        TODO
      </h1>
      <button
        className="absolute -right-0 top-1/2 mr-6 -translate-y-1/2 rounded-full p-2 shadow-md backdrop-blur-xl duration-150 ease-in-out hover:scale-105"
        onClick={handleClick}
      >
        {theme === "dark" ? (
          <MdLightMode className="h-6 w-6 text-white" />
        ) : (
          <HiMoon className="h-6 w-6 text-white" />
        )}
      </button>
    </header>
  );
};

export default Header;
