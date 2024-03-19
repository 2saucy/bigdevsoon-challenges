import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import clsx from "clsx";
import Link from "next/link";
import { FaCrown, FaDatabase, FaExternalLinkAlt } from "react-icons/fa";
import { HiLogout } from "react-icons/hi";
import { IoIosNotifications, IoIosPeople, IoMdSettings } from "react-icons/io";
import { IoFilter, IoNewspaperOutline } from "react-icons/io5";
import { MdApps } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbFilters } from "react-icons/tb";

const Dashboard = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <main className="flex min-h-screen gap-4 bg-gray-200 p-16">
      <Navbar />
      <div className="flex-1 space-y-4">
        <Container classNames="flex items-center justify-between">
          <h2 className="font-bold">Dashboard</h2>
          <div className="flex items-center gap-4">
            <Button
              className="rounded-full  bg-transparent hover:bg-[#262729]"
              size={"icon"}
            >
              <IoIosNotifications className="h-6 w-6" />
            </Button>
            <Avatar>
              <AvatarImage
                className="object-cover"
                src="/assets/100-days-challenge/day-30/profile-pic.jpg"
              />
            </Avatar>
          </div>
        </Container>
        <Container classNames="space-y-4">
          <h1 className="mt-4 text-3xl">Welcome Jason</h1>
          <div className="flex items-center justify-between opacity-50">
            <div className="flex items-center gap-2">
              <Button className="bg-transparent hover:bg-[#262729]">
                Overview
              </Button>
              <Button className="bg-transparent hover:bg-[#262729]">
                Partner Network
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Select>
                <SelectTrigger className="w-[180px] border-none bg-[#262729] outline-none">
                  <SelectValue placeholder="Date" />
                </SelectTrigger>
                <SelectContent className="mt-0.5 border-none bg-[#262729] text-slate-50 text-opacity-50">
                  {months.map((interval) => (
                    <SelectItem key={interval} value={interval}>
                      {interval}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button className="bg-transparent text-sm font-light duration-100 ease-in-out hover:bg-slate-50 hover:bg-opacity-10 hover:text-white">
                <IoFilter className="mr-2 h-6 w-6" /> Filter
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <OverviewCard />
            <OverviewCard />
          </div>
        </Container>
      </div>
    </main>
  );
};

export default Dashboard;

interface Route {
  name: string;
  icon: React.ReactNode;
  submenu: {
    name: string;
    icon: React.ReactNode;
  }[];
}

const Navbar = () => {
  const routes: Route[] = [
    {
      name: "Dashboard",
      icon: <MdApps />,
      submenu: [],
    },
    {
      name: "Reports",
      icon: <IoNewspaperOutline />,
      submenu: [],
    },
    {
      name: "Data Sources",
      icon: <FaDatabase />,
      submenu: [],
    },
    {
      name: "Monetise",
      icon: <RiMoneyDollarCircleLine />,
      submenu: [
        {
          name: "Adds",
          icon: <FaExternalLinkAlt />,
        },
        {
          name: "Subscription",
          icon: <FaCrown className="text-yellow-500" />,
        },
        {
          name: "Partner Program",
          icon: <FaExternalLinkAlt />,
        },
      ],
    },
    {
      name: "Filters",
      icon: <TbFilters />,
      submenu: [],
    },
    {
      name: "Settings",
      icon: <IoMdSettings />,
      submenu: [],
    },
    {
      name: "Logout",
      icon: <HiLogout />,
      submenu: [],
    },
  ];

  return (
    <Container classNames="flex flex-col gap-4 w-[240px]">
      <h1 className="whitespace-nowrap text-xl font-semibold">😄 Initech</h1>
      <ul className="flex flex-1 flex-col gap-2 text-xs">
        {routes.map((route) => {
          if (route.submenu.length > 0) {
            return (
              <Accordion type="single" key={route.name}>
                <AccordionItem value={route.name} className="border-none">
                  <AccordionTrigger className="whitespace-nowrap rounded-xl p-2 duration-200 ease-in-out  hover:bg-[#262729]">
                    <span className="flex items-center gap-2">
                      {route.icon} {route.name}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    {route.submenu.map((item) => (
                      <Link
                        href="#"
                        key={item.name}
                        className="flex items-center gap-2 p-2 text-xs opacity-50 duration-150 ease-in-out hover:underline hover:opacity-100"
                      >
                        {item.name} {item.icon}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          }

          return (
            <li
              className={clsx(
                "flex items-center gap-2 whitespace-nowrap rounded-xl p-2 duration-200  ease-in-out",
                route === routes[routes.length - 1]
                  ? "mt-auto bg-red-600 hover:bg-red-700"
                  : "hover:bg-[#262729]",
              )}
              key={route.name}
            >
              {route.icon} {route.name}
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

const Container = ({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) => {
  return (
    <div
      className={clsx(
        "rounded-2xl bg-[#1a1b1d] p-4 text-slate-50 shadow-lg",
        classNames,
      )}
    >
      {children}
    </div>
  );
};

const OverviewCard = () => {
  return (
    <Container classNames="space-y-4 shadow-md bg-[#101011]">
      <div className="rounded-xl bg-[#333333] p-4 text-center text-3xl">
        76%
      </div>
      <div className="flex items-center gap-2 rounded-xl bg-[#333333] p-2">
        <div className="rounded-full bg-[#f800d0] p-2">
          <IoIosPeople className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-semibold">Referral traffic</h3>
          <span className="text-xs font-light">Last updated on 23 Feb</span>
        </div>
      </div>
    </Container>
  );
};
