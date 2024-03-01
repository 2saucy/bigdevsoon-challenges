import { FaFacebook, FaLinkedin, FaDribbble } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const ProfileCard = () => {
  return (
    <main className="flex h-screen items-center justify-center bg-[#eff3c0]">
      <div className="relative h-[650px] w-[450px] overflow-hidden rounded-[3rem] bg-white p-8 shadow-xl duration-150 ease-in-out hover:scale-105 hover:shadow-2xl">
        <img
          className="absolute left-0 top-0 h-[250px] w-full"
          src="/assets/100-days-challenge/day-1/curve.svg"
        />
        <div className="absolute left-1/2 top-5 z-10 aspect-square h-[120px] w-[120px] -translate-x-1/2 overflow-hidden rounded-full border-2">
          <img
            className="h-full w-full object-cover"
            src="/assets/100-days-challenge/day-1/profile-pic.jpg"
            alt="profile picture"
          />
        </div>
        <div className="flex h-full flex-col justify-between pt-[250px]">
          <div className="self-center text-center">
            <h1 className="text-2xl font-semibold tracking-widest">
              Johnny Rogers
            </h1>
            <p className="text-[0.7rem] text-[#43535f]">@johnnyroggers</p>
          </div>
          <div className="flex items-center justify-center gap-8">
            <a href="http://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="h-5 w-5 cursor-pointer hover:animate-pulse" />
            </a>
            <a href="http://www.linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="h-5 w-5 cursor-pointer hover:animate-pulse" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <FaXTwitter className="h-5 w-5 cursor-pointer hover:animate-pulse" />
            </a>
            <a href="http://www.instagram.com" target="_blank" rel="noreferrer">
              <RiInstagramFill className="h-5 w-5 cursor-pointer hover:animate-pulse" />
            </a>
            <a href="http://www.dribbble.com" target="_blank" rel="noreferrer">
              <FaDribbble className="h-5 w-5 cursor-pointer hover:animate-pulse" />
            </a>
          </div>
          <p className="text-center text-xs">
            Crafting brand and communication strategies, creating visual
            designs, leading art direction, and capturing portraits through
            photography.
          </p>
          <div className="flex justify-center gap-6">
            <button className="w-full rounded-full bg-[#e03f8d] py-2 text-white duration-300 ease-in-out hover:bg-[#98314f]">
              Follow
            </button>
            <button className="w-full rounded-full border-2 border-[#898989] py-2 text-[#898989] duration-300 ease-in-out hover:border-black hover:text-black">
              Message
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileCard;
