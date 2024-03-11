"use client"
import { useState } from "react";
import YoutubePlayer from "react-player/youtube"
import { BiSolidLike } from "react-icons/bi";
import { IoEye } from "react-icons/io5";
import { IoMdHeart, IoMdHeartEmpty, IoMdShare } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface User {
  name: string
  profile_picture: string
  subscribers: number
}

interface Video {
  miniature: string
  title: string
  url: string
  user: User
  views: number
  likes: number
  related_videos: Video[]
  createdAt: string
}

const VideoPlayer = () => {
  const video: Video = {
    miniature: "",
    title: "Longboard Session #3 - Original Skateboards",
    url: "https://www.youtube.com/watch?v=j1CUwDTF9Bw&ab_channel=OriginalSkateboards",
    user: {
      name: "Original Skateboards",
      profile_picture: "/assets/100-days-challenge/day-29/pfp.jpg",
      subscribers: 130500
    },
    views: 12000000,
    likes: 360,
    related_videos: [
      {
        miniature: "/assets/100-days-challenge/day-29/1.jpg",
        title: "Best Longboard Tricks 2022",
        url: "https://www.youtube.com/watch?v=1&ab_channel=BestLongboardTricks",
        user: {
          name: "Extreme Longboarders",
          profile_picture: "/assets/100-days-challenge/day-29/1-pfp.jpg",
          subscribers: 50000
        },
        views: 5000000,
        likes: 120,
        related_videos: [],
        createdAt: "2022-01-02T00:00:00"
      },
      {
        miniature: "/assets/100-days-challenge/day-29/2.jpg",
        title: "Longboarding Across the USA",
        url: "https://www.youtube.com/watch?v=2&ab_channel=LongboardUSA",
        user: {
          name: "Longboard USA",
          profile_picture: "/assets/100-days-challenge/day-29/2-pfp.jpg",
          subscribers: 75000
        },
        views: 8000000,
        likes: 200,
        related_videos: [],
        createdAt: "2022-01-03T00:00:00"
      },
      {
        miniature: "/assets/100-days-challenge/day-29/3.jpg",
        title: "Downhill Longboarding Championships",
        url: "https://www.youtube.com/watch?v=3&ab_channel=LongboardChampionships",
        user: {
          name: "Longboard Championships",
          profile_picture: "/assets/100-days-challenge/day-29/3-pfp.jpg",
          subscribers: 30000
        },
        views: 3000000,
        likes: 90,
        related_videos: [],
        createdAt: "2022-01-04T00:00:00"
      },
      {
        miniature: "/assets/100-days-challenge/day-29/4.jpg",
        title: "Longboard Freestyle Tricks Tutorial",
        url: "https://www.youtube.com/watch?v=4&ab_channel=FreestyleLongboard",
        user: {
          name: "Freestyle Longboard",
          profile_picture: "/assets/100-days-challenge/day-29/4-pfp.jpg",
          subscribers: 40000
        },
        views: 4000000,
        likes: 150,
        related_videos: [],
        createdAt: "2022-01-05T00:00:00"
      },
      {
        miniature: "/assets/100-days-challenge/day-29/5.jpg",
        title: "Longboard Maintenance Tips",
        url: "https://www.youtube.com/watch?v=5&ab_channel=LongboardMaintenance",
        user: {
          name: "Longboard Maintenance",
          profile_picture: "/assets/100-days-challenge/day-29/5-pfp.jpg",
          subscribers: 20000
        },
        views: 2000000,
        likes: 60,
        related_videos: [],
        createdAt: "2022-01-06T00:00:00"
      },
      {
        miniature: "/assets/100-days-challenge/day-29/6.jpg",
        title: "Longboard Dance Competition Highlights",
        url: "https://www.youtube.com/watch?v=6&ab_channel=LongboardDance",
        user: {
          name: "Longboard Dance",
          profile_picture: "/assets/100-days-challenge/day-29/6-pfp.jpg",
          subscribers: 60000
        },
        views: 6000000,
        likes: 180,
        related_videos: [],
        createdAt: "2022-01-07T00:00:00"
      },
      {
        miniature: "/assets/100-days-challenge/day-29/7.jpg",
        title: "Longboard Racing World Cup",
        url: "https://www.youtube.com/watch?v=7&ab_channel=LongboardRacing",
        user: {
          name: "Longboard Racing",
          profile_picture: "/assets/100-days-challenge/day-29/7-pfp.jpg",
          subscribers: 90000
        },
        views: 9000000,
        likes: 270,
        related_videos: [],
        createdAt: "2022-01-08T00:00:00"
      },
      {
        miniature: "/assets/100-days-challenge/day-29/8.jpg",
        title: "Longboard Documentary: The History of Longboarding",
        url: "https://www.youtube.com/watch?v=8&ab_channel=LongboardHistory",
        user: {
          name: "Longboard History",
          profile_picture: "/assets/100-days-challenge/day-29/8-pfp.jpg",
          subscribers: 10000
        },
        views: 1000000,
        likes: 30,
        related_videos: [],
        createdAt: "2022-01-09T00:00:00"
      },
      {
        miniature: "/assets/100-days-challenge/day-29/9.jpg",
        title: "Longboard Tips for Beginners",
        url: "https://www.youtube.com/watch?v=9&ab_channel=LongboardBeginners",
        user: {
          name: "Longboard Beginners",
          profile_picture: "/assets/100-days-challenge/day-29/9-pfp.jpg",
          subscribers: 15000
        },
        views: 1500000,
        likes: 45,
        related_videos: [],
        createdAt: "2022-01-10T00:00:00"
      },
      {
        miniature: "/assets/100-days-challenge/day-29/10.jpg",
        title: "Longboard Freeride Session",
        url: "https://www.youtube.com/watch?v=10&ab_channel=LongboardFreeride",
        user: {
          name: "Longboard Freeride",
          profile_picture: "/assets/100-days-challenge/day-29/10-pfp.jpg",
          subscribers: 25000
        },
        views: 2500000,
        likes: 75,
        related_videos: [],
        createdAt: "2022-01-11T00:00:00"
      }
    ],
    createdAt: "2022-01-01T00:00:00"
  };

  return (
    <main className="min-h-screen bg-stone-900 flex items-center justify-center p-16">
      <div className="flex max-lg:flex-col lg:flex-row items-center gap-4">
        <div className="flex flex-col items-center gap-4">
          <YoutubePlayer url={video.url} controls={true} />
          <VideoInfo {...video} />
        </div>
        <RelatedVideosList relatedVideos={video.related_videos} />
      </div>
    </main>
  );
}

export default VideoPlayer;

const VideoInfo = ({ user, views, likes }: { user: User, views: number, likes: number }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const { name, profile_picture, subscribers } = user;
  return (
    <div className="bg-stone-800 flex items-center justify-between rounded-xl p-4 text-slate-50 w-full">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={profile_picture} />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h2 className="font-bold  whitespace-nowrap text-sm">{name}</h2>
          <span className="text-xs opacity-50">{subscribers} subscribers</span>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 text-xs font-light opacity-50">
          <IoEye />
          {views} views
        </div>
        <div className="flex items-center gap-2 text-xs font-light opacity-50">
          <BiSolidLike />
          <span>{likes} likes</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant={"secondary"} size={"icon"} className="rounded-full shadow-md" onClick={() => { }}>
          <IoMdShare className="h-4 w-4" />
        </Button>
        <Button size={"icon"} className="bg-violet-500 hover:bg-violet-800 rounded-full shadow-md" onClick={() => setIsLiked(!isLiked)}>
          {isLiked ? <IoMdHeart className="h-4 w-4" /> : <IoMdHeartEmpty className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  )
}

const RelatedVideosList = ({ relatedVideos }: { relatedVideos: Video[] }) => {
  return (
    <div className="rounded-lg bg-stone-800 p-6 text-slate-50 space-y-4 h-[700px] aspect-[3/4] overflow-hidden">
      <h2>Related videos</h2>
      <div className="flex flex-col gap-4 overflow-scroll h-full">
        {relatedVideos.map((relatedVideo, i) => (
          <RelatedVideo key={i} {...relatedVideo} />
        ))}
      </div>
    </div>
  )
}

const RelatedVideo = ({ miniature, title, user, views, createdAt }: { miniature: string, title: string, user: User, views: number, createdAt: string }) => {
  return (
    <div className="flex items-center gap-4 mr-16">
      <div className="w-[180px] aspect-video rounded-xl overflow-hidden shrink-0">
        <img className="h-full w-full object-cover" src={miniature} alt={title} />
      </div>
      <div className="flex flex-col gap-1">
        <h3>{title}</h3>
        <span className="text-xs font-light">{user.name}</span>
        <span className="text-xs font-light whitespace-nowrap">{views} views • {createdAt}</span>
      </div>
    </div>
  )
}

