"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { IoArrowBackOutline, IoSend } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";

interface User {
  id: number;
  name: string;
  profile_picture: string;
  status: "online" | "offline" | "busy" | "away";
}

interface Message {
  content: string;
  timestamp: string;
  sender: string;
}

interface Chat {
  id: number;
  user: User;
  messages: Message[];
}

const Messages = () => {
  const chats: Chat[] = [
    {
      id: 1,
      user: {
        id: 1,
        name: "Son Goku",
        profile_picture: "/assets/100-days-challenge/day-22/goku-pfp.jpeg",
        status: "online",
      },
      messages: [
        {
          content: "Hello! How are you?",
          timestamp: "10:30 AM",
          sender: "Son Goku",
        },
        {
          content: "I'm good, thanks! How about you?",
          timestamp: "10:35 AM",
          sender: "You",
        },
        {
          content: "Im nice",
          timestamp: "10:30 AM",
          sender: "Son Goku",
        },
        {
          content: "What are you doing?",
          timestamp: "10:35 AM",
          sender: "Son Goku",
        },
        {
          content: "Nothing",
          timestamp: "10:30 AM",
          sender: "You",
        },
        {
          content: "Do you have any plans for the weekend?",
          timestamp: "10:35 AM",
          sender: "You",
        },
      ],
    },
    {
      id: 2,
      user: {
        id: 2,
        name: "Mikasa Ackerman",
        profile_picture: "/assets/100-days-challenge/day-22/mikasa-pfp.jpg",
        status: "offline",
      },
      messages: [
        {
          content: "Hey there!",
          timestamp: "11:00 AM",
          sender: "Mikasa Ackerman",
        },
        {
          content: "Hi! How are you?",
          timestamp: "11:05 AM",
          sender: "You",
        },
        {
          content: "I'm good, thanks!",
          timestamp: "11:10 AM",
          sender: "Mikasa Ackerman",
        },
      ],
    },
    {
      id: 3,
      user: {
        id: 3,
        name: "Gojo",
        profile_picture: "/assets/100-days-challenge/day-22/gojo-pfp.jpg",
        status: "away",
      },
      messages: [
        {
          content: "Good morning!",
          timestamp: "09:00 AM",
          sender: "Gojo",
        },
        {
          content: "Morning! How's it going?",
          timestamp: "09:05 AM",
          sender: "You",
        },
        {
          content: "Not bad, just getting started with work.",
          timestamp: "09:10 AM",
          sender: "Gojo",
        },
      ],
    },
    {
      id: 4,
      user: {
        id: 4,
        name: "Kamisato Ayaka",
        profile_picture: "/assets/100-days-challenge/day-22/ayaka-pfp.png",
        status: "away",
      },
      messages: [
        {
          content: "Hey! What's up?",
          timestamp: "02:00 PM",
          sender: "Kamisato Ayaka",
        },
        {
          content: "Not much, just relaxing.",
          timestamp: "02:05 PM",
          sender: "You",
        },
      ],
    },
    {
      id: 5,
      user: {
        id: 5,
        name: "Paimon",
        profile_picture: "/assets/100-days-challenge/day-22/paimon-pfp.jpg",
        status: "busy",
      },
      messages: [
        {
          content: "Hello!",
          timestamp: "04:00 PM",
          sender: "Paimon",
        },
        {
          content: "Hi there! How are you?",
          timestamp: "04:05 PM",
          sender: "You",
        },
        {
          content: "I'm good, thanks!",
          timestamp: "04:10 PM",
          sender: "Paimon",
        },
      ],
    },
    {
      id: 6,
      user: {
        id: 6,
        name: "Rick Sanchez",
        profile_picture: "/assets/100-days-challenge/day-22/rick-pfp.jpg",
        status: "online",
      },
      messages: [
        {
          content: "Hey! Long time no see.",
          timestamp: "06:00 PM",
          sender: "Rick Sanchez",
        },
        {
          content: "I know, it's been too long!",
          timestamp: "06:05 PM",
          sender: "You",
        },
      ],
    },
    {
      id: 7,
      user: {
        id: 7,
        name: "Monkey D. Luffy",
        profile_picture: "/assets/100-days-challenge/day-22/luffy-pfp.jpg",
        status: "offline",
      },
      messages: [
        {
          content: "Good evening!",
          timestamp: "08:00 PM",
          sender: "Monkey D. Luffy",
        },
        {
          content: "Evening! How was your day?",
          timestamp: "08:05 PM",
          sender: "You",
        },
        {
          content: "It was good, thanks for asking.",
          timestamp: "08:10 PM",
          sender: "Monkey D. Luffy",
        },
      ],
    },
    {
      id: 8,
      user: {
        id: 8,
        name: "Giga Chad",
        profile_picture: "/assets/100-days-challenge/day-22/gigachad-pfp.jpg",
        status: "offline",
      },
      messages: [
        {
          content: "Hey, what's going on?",
          timestamp: "10:00 PM",
          sender: "Giga Chad",
        },
        {
          content: "Not much, just watching TV.",
          timestamp: "10:05 PM",
          sender: "You",
        },
      ],
    },
    {
      id: 9,
      user: {
        id: 9,
        name: "Yunjiro Hanma",
        profile_picture: "/assets/100-days-challenge/day-22/yunjiro-pfp.jpeg",
        status: "offline",
      },
      messages: [
        {
          content: "Hey! How's it going?",
          timestamp: "12:00 PM",
          sender: "Yunjiro Hanma",
        },
        {
          content: "Hey! I'm good, thanks.",
          timestamp: "12:05 PM",
          sender: "You",
        },
      ],
    },
  ];

  const [chatOpen, setChatOpen] = useState<Chat | null>(null);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-400">
      {chatOpen === null ? (
        <MessagesCard chats={chats} setChatOpen={setChatOpen} />
      ) : (
        <Chat chat={chatOpen} setChatOpen={setChatOpen} />
      )}
    </main>
  );
};

export default Messages;

const MessagesCard = ({
  chats,
  setChatOpen,
}: {
  chats: Chat[];
  setChatOpen: (chat: Chat) => void;
}) => {
  const friendsOnline = chats
    .filter((chat) => chat.user.status !== "offline")
    .map((chat) => chat.user);

  return (
    <div className="flex flex-col overflow-hidden bg-slate-50 max-sm:h-screen max-sm:w-full sm:rounded-3xl sm:shadow-lg md:h-[800px] md:w-[400px]">
      <div className="space-y-4 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Messages</h1>
          <div>
            <Button className="rounded-full" size={"icon"} variant={"ghost"}>
              <FaRegBell className="h-5 w-5" />
            </Button>
            <Button className="rounded-full" size={"icon"} variant={"ghost"}>
              <SlOptionsVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {friendsOnline.map((friend, i) => (
            <div key={i} className="flex flex-col items-center">
              <StatusAvatar {...friend} />
              <p className="whitespace-nowrap text-xs">
                {friend.name.length > 8
                  ? friend.name.slice(0, 8) + "..."
                  : friend.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setChatOpen(chat)}
            className="flex cursor-pointer flex-col hover:bg-slate-100"
          >
            <div className="flex items-center gap-2 p-2">
              <StatusAvatar {...chat.user} />
              <div className="flex flex-1 flex-col">
                <div className="flex items-center justify-between">
                  <p className="font-bold">{chat.user.name}</p>
                  <span className="text-xs opacity-50">
                    {chat.messages[0].timestamp}
                  </span>
                </div>
                <p className="text-sm opacity-50">
                  {chat.messages[0].sender + ": " + chat.messages[0].content}
                </p>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

const StatusAvatar = ({
  name,
  profile_picture,
  status,
}: {
  name: string;
  profile_picture: string;
  status: "online" | "offline" | "busy" | "away";
}) => {
  return (
    <div className="relative w-fit">
      <Avatar>
        <AvatarImage className="object-cover" src={profile_picture} />
        <AvatarFallback>{name}</AvatarFallback>
      </Avatar>
      <StatusDot status={status} />
    </div>
  );
};

const Chat = ({
  chat,
  setChatOpen,
}: {
  chat: Chat;
  setChatOpen: (chat: Chat | null) => void;
}) => {
  return (
    <div className="flex h-[800px] w-[400px] flex-col overflow-hidden bg-slate-50 max-sm:h-screen max-sm:w-full sm:rounded-3xl sm:shadow-lg">
      <div className="relative flex flex-col items-center gap-2 p-4 shadow-md">
        <StatusAvatar {...chat.user} />
        <p className="text-xl font-bold">{chat.user.name}</p>
        <Button
          onClick={() => setChatOpen(null)}
          size={"icon"}
          variant={"ghost"}
          className="absolute left-0 top-1/2 ml-2 -translate-y-1/2 rounded-full"
        >
          <IoArrowBackOutline className="h-6 w-6" />
        </Button>
      </div>
      <div className="h-full overflow-y-auto pt-6">
        {chat.messages.map((message, i) => (
          <div key={i} className="flex items-center gap-4 p-4">
            {message.sender !== "You" && (
              <Avatar>
                <AvatarImage
                  className="object-cover"
                  src={chat.user.profile_picture}
                />
                <AvatarFallback>{chat.user.name}</AvatarFallback>
              </Avatar>
            )}
            <div
              className={clsx(
                "rounded-xl p-4",
                message.sender === "You"
                  ? "ml-auto bg-blue-100"
                  : "mr-auto bg-gray-200",
              )}
            >
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 p-4">
        <input
          className="w-full rounded-lg bg-gray-300 px-4 py-2 outline-none"
          placeholder="Message"
          type="text"
        />
        <Button size={"icon"} className="shrink-0 rounded-full">
          <IoSend />
        </Button>
      </div>
    </div>
  );
};

const StatusDot = ({
  status,
}: {
  status: "online" | "offline" | "busy" | "away";
}) => {
  const statusColors = {
    online: "bg-green-400",
    offline: "bg-gray-400",
    busy: "bg-red-400",
    away: "bg-yellow-400",
  };

  return (
    <div
      className={clsx(
        "absolute right-0 top-7 aspect-square rounded-full border-[3px] border-white px-[0.3rem]",
        statusColors[status],
      )}
    />
  );
};
