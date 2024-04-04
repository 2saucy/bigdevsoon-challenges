"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { FaCamera, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { getAssetsDir } from "../utils";
import { Avatar as AvatarUI, AvatarImage } from "@/components/ui/avatar";

type AdditionalInfo = {
  college: string;
  position: string;
  height: string;
  weight: string;
  birthdate: string;
  status: string;
};

type CareerHistory = {
  team: string;
  joined: string;
  left: string;
}[];

type LinkedArticles = {
  title: string;
  posted: string;
  url: string;
  miniature: string;
}[];

type SocialMedia = {
  instagram: string;
  facebook: string;
  twitter: string;
};

type PlayerUser = {
  banner: string;
  name: string;
  avatar: string;
  tags: string[];
  social_media: SocialMedia;
  additional_info: AdditionalInfo;
  career_history: CareerHistory;
  linked_articles: LinkedArticles;
};

const PlayerProfile = () => {
  const assetsDir = getAssetsDir(usePathname());

  const user: PlayerUser = {
    banner: `${assetsDir}/banner.jpg`,
    name: "Lionel Messi",
    avatar: `${assetsDir}/messi-pfp.jpg`,
    tags: ["football", "sports", "forward", "argentinian"],
    social_media: {
      instagram: "",
      facebook: "",
      twitter: "",
    },
    additional_info: {
      college: "None",
      position: "Forward",
      height: "1.70 m",
      weight: "72 kg",
      birthdate: "June 24, 1987",
      status: "active",
    },
    career_history: [
      {
        team: "F.C Barcelona",
        joined: "2004",
        left: "2021",
      },
      {
        team: "Paris Saint-Germain F.C",
        joined: "2021",
        left: "2023",
      },
      {
        team: "Inter Miami",
        joined: "2023",
        left: "present",
      },
    ],
    linked_articles: [
      {
        posted: "February 16, 2024",
        title: "Messi is both king and pawn on trail Beckham blazed",
        url: "#",
        miniature: "",
      },
      {
        posted: "March 29, 2024",
        title: "Lionel Messi’s napkin ‘contract’ up for auction at £200,000",
        url: "#",
        miniature: "",
      },
    ],
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#bfc4e1]">
      <Card user={user} />
    </main>
  );
};

export default PlayerProfile;

const Card = ({ user }: { user: PlayerUser }) => {
  return (
    <div className="aspect-[1/2] w-[400px] overflow-y-auto rounded-xl bg-white shadow-md">
      <CardHeader banner={user.banner} avatar={user.avatar} />
      <CardContent {...user} />
    </div>
  );
};

const CardHeader = ({ banner, avatar }: { banner: string; avatar: string }) => {
  return (
    <div className="relative h-[180px]">
      <img className="h-full w-full object-cover" src={banner} />
      <Button
        variant="secondary"
        className="absolute right-3 top-3 aspect-square rounded-full p-1 text-blue-700"
      >
        <FaCamera className="h-4 w-4" />
      </Button>
      <Avatar image={avatar} />
    </div>
  );
};

const CardContent = ({
  name,
  tags,
  additional_info,
  career_history,
  linked_articles,
}: {
  name: string;
  tags: string[];
  additional_info: AdditionalInfo;
  career_history: CareerHistory;
  linked_articles: LinkedArticles;
}) => {
  return (
    <div className="p-4">
      <div className="mt-6 space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">{name}</h1>
          <div className="flex items-center gap-2">
            <FaXTwitter />
            <FaInstagram />
          </div>
        </div>
        <div className="flex items-center gap-2 overflow-hidden font-semibold">
          {tags.map((tag) => (
            <div
              key={tag}
              className="rounded-full bg-blue-200/50 px-2 py-0.5 text-xs text-blue-800"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <Accordion type="multiple">
        {["info", "career history", "linked articles"].map((label, i) => (
          <AccordionItem key={i} value={label}>
            <AccordionTrigger className="text-sm text-blue-700">
              {label.toLocaleUpperCase()}
            </AccordionTrigger>
            <AccordionContent>
              {label === "info" && <Info info={additional_info} />}
              {label === "career history" && (
                <CareerHistory carrer_history={career_history} />
              )}
              {label === "linked articles" && (
                <LinkedArticles linked_articles={linked_articles} />
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const Info = ({ info }: { info: AdditionalInfo }) => {
  return (
    <div className="space-y-4">
      {Object.keys(info).map((attribute) => {
        const value = info[attribute as keyof typeof info]
        const capitalized = attribute.charAt(0).toUpperCase() + attribute.slice(1)

        return (
          <div
            className="flex items-center justify-between gap-2 text-xs"
            key={attribute}
          >
            <span className="opacity-50">{capitalized}</span>
            <span className="text-end font-semibold">{value}</span>
          </div>
        )
      })}
    </div>
  );
};

const CareerHistory = ({
  carrer_history,
}: {
  carrer_history: CareerHistory;
}) => {
  return (
    <div className="space-y-4">
      {carrer_history.map(({ team, joined, left }, i) => (
        <div key={i}>
          <h3 className="font-semibold">{team}</h3>
          <span className="text-xs opacity-50">
            {joined} · {left}
          </span>
        </div>
      ))}
    </div>
  );
};

const LinkedArticles = ({
  linked_articles,
}: {
  linked_articles: LinkedArticles;
}) => {
  return (
    <div className="space-y-4">
      {linked_articles.map((article) => (
        <div className="flex items-center gap-3" key={article.title}>
          <div className="flex flex-1 flex-col">
            <span className="text-xs opacity-50">{article.posted}</span>
            <a href={article.url} className="font-semibold hover:underline">
              {article.title}
            </a>
          </div>
          <div className="aspect-square w-20 overflow-hidden rounded-xl bg-slate-300">
            {/* <img className="h-full w-full object-cover" src={article.miniature} /> */}
          </div>
        </div>
      ))}
    </div>
  );
};

const Avatar = ({ image }: { image: string }) => {
  return (
    <div className="absolute -bottom-6 left-3 aspect-square w-20">
      <AvatarUI className="h-full w-full">
        <AvatarImage className="object-cover" src={image} />
      </AvatarUI>
      <RiVerifiedBadgeFill className="absolute -bottom-0 right-0 h-6 w-6 rounded-full bg-white text-blue-700" />
    </div>
  );
};
