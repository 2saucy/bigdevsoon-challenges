import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaLinkedin, FaDribbble } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const ProfileCard = () => {
  const socialMedia = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      url: "https://facebook.com",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter />,
      url: "https://twitter.com",
    },
    {
      name: "Instagram",
      icon: <RiInstagramFill />,
      url: "https://instagram.com",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://linkedin.com",
    },
    {
      name: "Dribbble",
      icon: <FaDribbble />,
      url: "https://dribbble.com",
    },
  ];

  return (
    <main className="flex h-screen items-center justify-center bg-[#eff3c0]">
      <div className="relative h-[650px] w-[450px] overflow-hidden rounded-[3rem] bg-white p-8 shadow-xl duration-150 ease-in-out hover:scale-105 hover:shadow-2xl">
        <img
          className="absolute left-0 top-0 h-[250px] w-full"
          src="/assets/100-days-challenge/day-1/curve.svg"
        />
        <Avatar className="absolute left-1/2 top-5 h-[120px] w-[120px] -translate-x-1/2">
          <AvatarImage
            className="object-cover"
            src="/assets/100-days-challenge/day-1/profile-pic.jpg"
          />
          <AvatarFallback>Profile Image</AvatarFallback>
        </Avatar>
        <div className="flex h-full flex-col justify-between pt-[250px]">
          <div className="self-center text-center">
            <h1 className="text-2xl font-semibold tracking-widest">
              Johnny Rogers
            </h1>
            <p className="text-[0.7rem] text-[#43535f]">@johnnyroggers</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            {socialMedia.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="duration-200 ease-in hover:text-[#e03f8d]"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <p className="text-center">
            Crafting brand and communication strategies, creating visual
            designs, leading art direction, and capturing portraits through
            photography.
          </p>
          <div className="flex justify-center gap-6">
            <Button className="w-full rounded-full bg-[#e03f8d] hover:bg-[#98314f]">
              Follow
            </Button>
            <Button className="w-full rounded-full" variant={"outline"}>
              Message
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileCard;
