import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { IoMail, IoPerson, IoSearchSharp } from "react-icons/io5";
import { MdOutlineNavigateNext } from "react-icons/md";

const HomePage = () => {
  return (
    <main className="min-h-screen text-[#617564]">
      <Header />
      <div className="flex items-center gap-12 p-8">
        <div className="flex basis-1/2 items-center justify-center gap-6">
          <div className="relative">
            <FaQuoteRight className="h-20 w-20" />

            <div className="absolute z-20 flex flex-col gap-4 rounded-xl bg-white p-4 text-black shadow-lg">
              <div className="flex items-center gap-4">
                <div className="h-[60px] w-[60px] overflow-hidden rounded-lg shadow-lg">
                  <img
                    className="h-full w-full object-cover"
                    src="/assets/100-days-challenge/day-23/pfp.jpg"
                  />
                </div>
                <div>
                  <p className="font-semibold">John Doe</p>
                  <div className="flex items-center gap-2">
                    4.8
                    <FaStar className="text-[#ffa51b]" />
                    <FaStar className="text-[#ffa51b]" />
                    <FaStar className="text-[#ffa51b]" />
                    <FaStar className="text-[#ffa51b]" />
                    <FaStar className="text-[#ffa51b]" />
                  </div>
                </div>
              </div>
              <p className="text-sm">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                sunt voluptas rerum illum harum aspernatur{" "}
              </p>
            </div>
          </div>
          <div className="w-full">
            <AspectRatio ratio={9 / 16}>
              <img
                src="/assets/100-days-challenge/day-23/chris-lee-70l1tDAI6rM-unsplash.jpg"
                className="h-full w-full object-cover"
                alt="Hero Image"
              />
            </AspectRatio>
          </div>
        </div>
        <div className="basis-1/2 space-y-8 self-start">
          <h2 className="font-serif text-6xl font-bold">
            Make your home beautiful with plants
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            distinctio dolore nulla tempore numquam sapiente iusto, accusantium
            modi unde consequatur in nemo quae eum. Enim aperiam aut vitae at
            voluptates!
          </p>
          <div className="flex items-center gap-8">
            <PlantCard image="plant-1.jpg" />
            <PlantCard image="plant-2.jpg" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="text-3xl font-bold">GrowGreen</h1>
      <Navbar />
      <div className="flex items-center gap-4">
        <IoSearchSharp />
        <IoPerson />
        <IoMail />
      </div>
    </header>
  );
};

const Navbar = () => {
  const routes = ["Home", "Catalog", "Blog", "Contact"];

  return (
    <nav className="flex items-center gap-6">
      {routes.map((r) => (
        <a href="#" key={r} className="hover:underline">
          {r}
        </a>
      ))}
    </nav>
  );
};

const PlantCard = ({ image }: { image: string }) => {
  return (
    <div className="relative">
      <div className="w-[180px] overflow-hidden rounded-xl">
        <AspectRatio ratio={1 / 1}>
          <img
            src={"/assets/100-days-challenge/day-23/" + image}
            className="h-full w-full object-cover"
            alt="Plant Card"
          />
        </AspectRatio>
      </div>
      <Button
        className="absolute -bottom-12 left-1/2 -translate-x-1/2"
        size={"icon"}
        variant={"secondary"}
      >
        <MdOutlineNavigateNext className="h-6 w-6" />
      </Button>
    </div>
  );
};
