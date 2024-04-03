"use client";
import { FaShare } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getAssetsDir } from "../utils";
import { usePathname } from "next/navigation";

interface Post {
  authorImg: string;
  author: string;
  date: string;
  title: string;
  description: string;
  img: string;
}

const ArticleSlider = () => {
  const assetsDir = getAssetsDir(usePathname());

  const posts: Post[] = [
    {
      authorImg: `${assetsDir}/pfp.jpg`,
      author: "John Doe",
      date: "2024-02-28",
      title: "First Post",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ante eget massa fermentum sodales a non velit. Phasellus tristique eros ut risus tincidunt, at congue risus efficitur. Aliquam erat volutpat. ",
      img: `${assetsDir}/side-image.jpg`,
    },
    {
      authorImg: `${assetsDir}/pfp.jpg`,
      author: "Jane Smith",
      date: "2024-02-27",
      title: "Second Post",
      description:
        "Nullam facilisis vehicula nisl, id lobortis turpis eleifend vel. Maecenas ac arcu in orci tempus fringilla. Vivamus mattis, ligula nec eleifend suscipit, nunc nibh sodales mauris, eu consequat tortor dolor vel metus.",
      img: `${assetsDir}/side-image.jpg`,
    },
    {
      authorImg: `${assetsDir}/pfp.jpg`,
      author: "Alice Johnson",
      date: "2024-02-26",
      title: "Third Post",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Donec sit amet urna non felis fringilla pretium.",
      img: `${assetsDir}/side-image.jpg`,
    },
    {
      authorImg: `${assetsDir}/pfp.jpg`,
      author: "Bob Brown",
      date: "2024-02-25",
      title: "Fourth Post",
      description:
        "Fusce in ex id elit convallis varius. Etiam bibendum diam at tortor sagittis, eget mattis ipsum lobortis. Ut vestibulum nisl ac nunc posuere, nec dignissim nisl scelerisque. ",
      img: `${assetsDir}/side-image.jpg`,
    },
    {
      authorImg: `${assetsDir}/pfp.jpg`,
      author: "Eve Williams",
      date: "2024-02-24",
      title: "Fifth Post",
      description:
        "Suspendisse ac metus at nisl bibendum cursus in a ipsum. Proin fringilla elit non quam euismod, a vestibulum metus sollicitudin. Sed in dolor ut enim vestibulum ullamcorper.",
      img: `${assetsDir}/side-image.jpg`,
    },
  ];

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-gray-100">
      <Carousel className="w-3/4">
        <CarouselContent>
          {posts.map((post) => (
            <CarouselItem key={post.title}>
              <Display {...post} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </main>
  );
};

export default ArticleSlider;

const Display = ({
  authorImg,
  author,
  date,
  title,
  description,
  img,
}: Post) => {
  return (
    <div className="flex h-[400px] w-full overflow-hidden rounded-xl bg-white">
      <div className="basis-1/2 overflow-hidden">
        <img className="h-full w-full object-cover" src={img} />
      </div>
      <div className="flex basis-1/2 flex-col justify-between gap-4 p-6">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p>{description}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <Avatar>
            <AvatarImage
              className="object-cover"
              src={authorImg}
              alt="Author"
            />
          </Avatar>
          <div className="flex flex-1 flex-col">
            <span className="font-semibold">{author}</span>
            <span className="text-sm font-light">{date}</span>
          </div>
          <Button className="rounded-full" size={"icon"} variant={"secondary"}>
            <FaShare className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
