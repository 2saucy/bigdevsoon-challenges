"use client";
import { FaTags, FaUserTag } from "react-icons/fa";
import { IoMdNotifications, IoMdPerson } from "react-icons/io";
import { LuLibrary } from "react-icons/lu";
import { MdApps, MdEmail } from "react-icons/md";
import { PiNewspaper } from "react-icons/pi";
import { getAssetsDir } from "../utils";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { RiExpandLeftLine, RiExpandRightLine } from "react-icons/ri";
import { useState } from "react";
import clsx from "clsx";

interface Route {
  name: string;
  icon: React.ReactNode;
}

const AppNavigation = () => {
  const routes = [
    {
      name: "Dashboard",
      icon: <MdApps className="h-6 w-6" />,
    },
    {
      name: "Tag List",
      icon: <FaTags className="h-6 w-6" />,
    },
    {
      name: "Define Subject",
      icon: <PiNewspaper className="h-6 w-6" />,
    },
    {
      name: "Members",
      icon: <IoMdPerson className="h-6 w-6" />,
    },
    {
      name: "Tags Assignment",
      icon: <FaUserTag className="h-6 w-6" />,
    },
    {
      name: "Library",
      icon: <LuLibrary className="h-6 w-6" />,
    },
    {
      name: "Emails",
      icon: <MdEmail className="h-6 w-6" />,
    },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="w-[400px]">
        <CollapsibleMenu routes={routes} classNames="" />
      </div>
    </main>
  );
};

export default AppNavigation;

const CollapsibleMenu = ({
  routes,
  classNames,
}: {
  routes: Route[];
  classNames?: string;
}) => {
  const assetsDir = getAssetsDir(usePathname());
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div
      className={clsx(
        "relative h-[800px] bg-slate-900 p-4 text-slate-50 shadow-lg duration-300 ease-in-out",
        expanded ? "w-[400px] " : "w-[200px]",
        classNames,
      )}
    >
      <Button
        onClick={() => setExpanded(!expanded)}
        className="absolute -right-5 aspect-square rounded-full p-1 hover:bg-white hover:text-black"
      >
        {expanded ? (
          <RiExpandLeftLine className="h-4 w-4" />
        ) : (
          <RiExpandRightLine className="h-4 w-4" />
        )}
      </Button>
      <h1 className="mb-4 whitespace-nowrap text-2xl font-bold">Rose way</h1>
      <div className="flex flex-col gap-2">
        {routes.map((route) => (
          <div
            className={clsx(
              "flex cursor-pointer items-center gap-2 rounded-xl px-2.5 py-2 hover:bg-violet-800",
              !expanded && "justify-center",
            )}
            key={route.name}
          >
            {route.icon} {expanded && route.name}
          </div>
        ))}
        <hr className="my-2 opacity-50" />
        <div
          className={clsx(
            "flex items-center gap-2",
            !expanded && "justify-center",
          )}
        >
          <div className="relative w-10">
            <img
              className="aspect-square h-full w-full rounded-full object-cover"
              src={`${assetsDir}/pfp.jpg`}
            />
            <div className="absolute bottom-0 right-0 aspect-square rounded-full border-2 border-slate-900 bg-emerald-400 p-1" />
          </div>
          {expanded && <span className="font-semibold">Lily Chen</span>}
        </div>
        <div
          className={clsx(
            "flex cursor-pointer items-center gap-2 rounded-xl px-2.5 py-2 hover:bg-violet-800",
            !expanded && "justify-center",
          )}
        >
          <IoMdNotifications className="h-6 w-6" />{" "}
          {expanded && "Notifications"}
        </div>
        <button className="flex flex-col items-center justify-center rounded-lg bg-blue-300 p-2 duration-75 ease-in-out hover:bg-blue-400">
          <span className="font-semibold">90 days left</span>
          <span className="text-xs text-blue-800">Select a plan</span>
        </button>
      </div>
    </div>
  );
};
