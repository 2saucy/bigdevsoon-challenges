"use client";
import clsx from "clsx";
import { useState } from "react";
import { FaDiscord, FaFacebook, FaShare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

interface Post {
  authorImg: string;
  author: string;
  date: string;
  title: string;
  description: string;
  img: string;
}

const ArticleSlider = () => {
  const posts: Post[] = [
    {
      authorImg: "/assets/100-days-challenge/day-17/profile-pic.jpg",
      author: "John Doe",
      date: "2024-02-28",
      title: "First Post",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ante eget massa fermentum sodales a non velit. Phasellus tristique eros ut risus tincidunt, at congue risus efficitur. Aliquam erat volutpat. ",
      img: "/assets/100-days-challenge/day-17/travis-leery-E4BKNmb31fA-unsplash.jpg",
    },
    {
      authorImg: "/assets/100-days-challenge/day-17/profile-pic.jpg",
      author: "Jane Smith",
      date: "2024-02-27",
      title: "Second Post",
      description:
        "Nullam facilisis vehicula nisl, id lobortis turpis eleifend vel. Maecenas ac arcu in orci tempus fringilla. Vivamus mattis, ligula nec eleifend suscipit, nunc nibh sodales mauris, eu consequat tortor dolor vel metus.",
      img: "/assets/100-days-challenge/day-17/travis-leery-E4BKNmb31fA-unsplash.jpg",
    },
    {
      authorImg: "/assets/100-days-challenge/day-17/profile-pic.jpg",
      author: "Alice Johnson",
      date: "2024-02-26",
      title: "Third Post",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Donec sit amet urna non felis fringilla pretium.",
      img: "/assets/100-days-challenge/day-17/travis-leery-E4BKNmb31fA-unsplash.jpg",
    },
    {
      authorImg: "/assets/100-days-challenge/day-17/profile-pic.jpg",
      author: "Bob Brown",
      date: "2024-02-25",
      title: "Fourth Post",
      description:
        "Fusce in ex id elit convallis varius. Etiam bibendum diam at tortor sagittis, eget mattis ipsum lobortis. Ut vestibulum nisl ac nunc posuere, nec dignissim nisl scelerisque. ",
      img: "/assets/100-days-challenge/day-17/travis-leery-E4BKNmb31fA-unsplash.jpg",
    },
    {
      authorImg: "/assets/100-days-challenge/day-17/profile-pic.jpg",
      author: "Eve Williams",
      date: "2024-02-24",
      title: "Fifth Post",
      description:
        "Suspendisse ac metus at nisl bibendum cursus in a ipsum. Proin fringilla elit non quam euismod, a vestibulum metus sollicitudin. Sed in dolor ut enim vestibulum ullamcorper.",
      img: "/assets/100-days-challenge/day-17/travis-leery-E4BKNmb31fA-unsplash.jpg",
    },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#b3c7d2] px-16">
      <Carousel posts={posts} />
    </main>
  );
};

export default ArticleSlider;

const Carousel = ({ posts }: { posts: Post[] }) => {
  const [currentPost, setCurrentPost] = useState<Post>(posts[0]);

  const onNext = () => {
    if (currentPost === posts[posts.length - 1]) {
      setCurrentPost(posts[0]);
    } else {
      setCurrentPost(posts[posts.indexOf(currentPost) + 1]);
    }
  };

  const onPrevious = () => {
    if (currentPost === posts[0]) {
      setCurrentPost(posts[posts.length - 1]);
    } else {
      setCurrentPost(posts[posts.indexOf(currentPost) - 1]);
    }
  };

  return (
    <div className="relative flex items-center gap-4">
      <Button
        icon={<GrFormPrevious className="h-6 w-6" />}
        onClick={onPrevious}
      />
      <Display {...currentPost} index={posts.indexOf(currentPost) + 1} />
      <Button icon={<GrFormNext className="h-6 w-6" />} onClick={onNext} />

      <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {posts.map((post, i) => (
          <CarouselDot key={i} isActive={post === currentPost} />
        ))}
      </div>
    </div>
  );
};

const Button = ({
  icon,
  onClick,
}: {
  icon: JSX.Element;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="rounded-lg bg-slate-50 p-2 shadow-md hover:bg-slate-100"
    >
      {icon}
    </button>
  );
};

const Display = ({
  authorImg,
  author,
  date,
  title,
  description,
  img,
  index,
}: {
  authorImg: string;
  author: string;
  date: string;
  title: string;
  description: string;
  img: string;
  index: number;
}) => {
  const [shareOptionsVisible, setShareOptionsVisible] = useState(false);

  return (
    <div className="relative flex h-[400px] w-[800px] rounded-xl shadow-lg">
      <div className="absolute -left-6 -top-6 flex aspect-square w-12 items-center justify-center rounded-full bg-white text-3xl shadow-md">
        {index}
      </div>
      <div className="w-[40%] overflow-hidden rounded-l-xl">
        <img className="h-full w-full object-cover" src={img} />
      </div>
      <div className="flex w-[60%] flex-col justify-between rounded-r-xl bg-white p-6">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p>{description}</p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <CircleProfile authorImg={authorImg} />
          <div className="flex flex-1 flex-col">
            <span className="font-semibold">{author}</span>
            <span className="text-sm font-light">{date}</span>
          </div>
          <button
            onClick={() => setShareOptionsVisible(!shareOptionsVisible)}
            className="relative rounded-lg bg-slate-50 p-2 shadow-md hover:bg-slate-100"
          >
            <FaShare />
            <ShareOptions isActive={shareOptionsVisible} />
          </button>
        </div>
      </div>
    </div>
  );
};

const ShareOptions = ({ isActive }: { isActive: boolean }) => {
  return (
    <div
      className={clsx(
        "absolute -top-8 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-4 rounded-md bg-black p-2 text-white",
        isActive ? "block" : "hidden",
      )}
    >
      <a href="#" className="rounded-lg p-2 hover:bg-slate-700">
        <FaFacebook />
      </a>
      <a href="#" className="rounded-lg p-2 hover:bg-slate-700">
        <FaXTwitter />
      </a>
      <a href="#" className="rounded-lg p-2 hover:bg-slate-700">
        <FaDiscord />
      </a>
    </div>
  );
};

const CircleProfile = ({ authorImg }: { authorImg: string }) => {
  return (
    <div className="h-10 w-10 overflow-hidden rounded-full">
      <img className="h-full w-full object-cover" src={authorImg} />
    </div>
  );
};

const CarouselDot = ({ isActive }: { isActive: boolean }) => {
  return (
    <div
      className={clsx(
        "h-3 w-3 rounded-full",
        isActive ? "bg-[#6e41e2]" : "bg-slate-400",
      )}
    />
  );
};
