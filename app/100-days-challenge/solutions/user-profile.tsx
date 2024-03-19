import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CiMoneyBill } from "react-icons/ci";
import { IoIosHelpCircleOutline, IoIosMore } from "react-icons/io";
import { MdOutlineDisplaySettings, MdLogout } from "react-icons/md";
import { GiUpgrade } from "react-icons/gi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const UserProfile = () => {
  return (
    <main className="relative min-h-screen bg-slate-100">
      <div className="absolute left-1/2 top-24 flex w-96 -translate-x-1/2 items-center justify-between rounded-lg bg-white p-2 shadow-lg">
        <div className="flex flex-1 items-center gap-2">
          <Avatar>
            <AvatarImage
              className="object-cover"
              src="/assets/100-days-challenge/day-24/spirited-away.jpg"
            />
          </Avatar>
          <h2 className="font-bold">David</h2>
          <Badge className="bg-violet-300 text-violet-600" variant="outline">
            PRO
          </Badge>
        </div>
        <ProfilePopover />
      </div>
    </main>
  );
};

export default UserProfile;

const ProfilePopover = () => {
  const routes = [
    {
      label: "Profile Settings",
      icon: <MdOutlineDisplaySettings className="h-4 w-4" />,
    },
    {
      label: "Help Center",
      icon: <IoIosHelpCircleOutline className="h-4 w-4" />,
    },
    {
      label: "Billings",
      icon: <CiMoneyBill className="h-4 w-4" />,
    },
    {
      label: "Upgrade Plan",
      icon: <GiUpgrade className="h-4 w-4" />,
    },
    {
      label: "Sign Out",
      icon: <MdLogout className="h-4 w-4" />,
    },
  ];

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant={"ghost"}>
          <IoIosMore className="h-6 w-6" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="absolute -right-9 top-0 my-4 w-96 space-y-4">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              className="object-cover"
              src="/assets/100-days-challenge/day-24/spirited-away.jpg"
            />
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-bold">David</h2>
              <Badge
                className="bg-violet-300 text-violet-600"
                variant="outline"
              >
                PRO
              </Badge>
            </div>
            <span className="text-xs opacity-50">david@gmail.com</span>
          </div>
        </div>
        <hr />
        <ul className="flex flex-col gap-4">
          {routes.map(({ label, icon }) => (
            <li
              key={label}
              className="flex cursor-pointer items-center gap-2 rounded-lg p-2 duration-200 ease-in-out hover:bg-slate-100"
            >
              {icon} {label}
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};
