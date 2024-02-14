import { BsPersonCircle } from "react-icons/bs";
import { FaLocationDot, FaPeopleGroup } from "react-icons/fa6";
import { FiHome, FiMail } from "react-icons/fi";
import { ImStatsDots } from "react-icons/im";
import { IoMdMail, IoMdNotifications } from "react-icons/io";
import { IoPeopleSharp, IoPerson, IoSettingsSharp } from "react-icons/io5"
import { MdNavigateNext } from "react-icons/md";

const Page = () => {
  const items = [
    {
      name: "Personal Data",
      icon: <IoPerson />
    },
    {
      name: "Messages",
      icon: <IoMdMail />
    },
    {
      name: "Notifications",
      icon: <IoMdNotifications />
    },
    {
      name: "Location",
      icon: <FaLocationDot />
    },
    {
      name: "Community",
      icon: <FaPeopleGroup />
    },
  ]

  const otherItems = [
    {
      name: "FAQs",
      icon: <IoPeopleSharp />
    },
    {
      name: "Settings",
      icon: <IoSettingsSharp />
    }
  ]

  return (
    <main className="h-screen antialiased bg-[#e8ebf4] flex flex-col items-center justify-center">
      <div className="shadow-2xl rounded-3xl h-[750px] w-[360px] bg-white px-4 py-6 flex flex-col justify-between">
        <div className="flex items-center gap-6">
          <img className="h-[60px] w-[60px] object-cover rounded-xl" src="/assets/100-days-challenge/day-3/profile.jpg" />
          <div>
            <h1 className="text-sm font-bold">Lisa Richardson</h1>
            <p className="text-xs">Enviromental meteorologist</p>
          </div>
        </div>
        <div className="h-full">
          <hr className="my-6" />
          <div className="flex flex-col gap-4">
            {items.map((item, i) => (
              <Item key={i} name={item.name} icon={item.icon} />
            ))}
          </div>
          <hr className="my-6" />
          <div className="flex flex-col gap-4">
            {otherItems.map((item, i) => (
              <Item key={i} name={item.name} icon={item.icon} />
            ))}
          </div>
        </div>
        <Menu />
      </div>
    </main>
  );
}

export default Page;

const Item = ({ name, icon }: { name: string, icon: JSX.Element }) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="bg-[#e6e9fc] p-1.5 rounded-md ">
        {icon}
      </div>
      <p className="w-full text-xs font-black">{name}</p>
      <MdNavigateNext className="h-6 w-6" />
    </div>
  )
}

const Menu = () => {
  return (
    <div className="flex items-center justify-around">
      <MenuButton>
        <FiHome className="h-6 w-6" />
      </MenuButton>
      <MenuButton>
        <ImStatsDots className="h-6 w-6" />
      </MenuButton>
      <MenuButton>
        <FiMail className="h-6 w-6" />
      </MenuButton>
      <MenuButton>
        <BsPersonCircle className="h-6 w-6" />
      </MenuButton>
    </div>
  )
}

const MenuButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="rounded-full text-[#d5d9f6] hover:bg-[#f5f5fd] hover:text-[#6b83d6] p-2">
      {children}
    </button>
  )
}