"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getAssetsDir } from "../utils";
import { usePathname } from "next/navigation";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface Request {
  name: string;
  email: string;
  avatar: string;
  mutual_friends: {
    name: string;
    avatar: string;
  }[];
}

const FriendRequest = () => {
  const assetsDir = getAssetsDir(usePathname());

  const requestList: Request[] = [
    {
      name: "Lionel Messi",
      email: "lionel.messi@outlook.com",
      avatar: `${assetsDir}/messi-pfp.jpg`,
      mutual_friends: [
        {
          name: "Daisy",
          avatar: `${assetsDir}/dog-pfp.jpg`,
        },
        {
          name: "Son Goku",
          avatar: `${assetsDir}/goku-pfp.jpeg`,
        },
      ],
    },
    {
      name: "Son Goku",
      email: "kakaroto@outlook.com",
      avatar: `${assetsDir}/goku-pfp.jpeg`,
      mutual_friends: [
        {
          name: "Lionel Messi",
          avatar: `${assetsDir}/messi-pfp.jpg`,
        },
      ],
    },
    {
      name: "Daisy",
      email: "pawpaw@gmail.com",
      avatar: `${assetsDir}/dog-pfp.jpg`,
      mutual_friends: [],
    },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center">
      <Card requestList={requestList} />
    </main>
  );
};

export default FriendRequest;

const Card = ({ requestList }: { requestList: Request[] }) => {
  return (
    <div className="relative w-1/2 rounded-xl border-2 border-black bg-white p-6">
      <div className="absolute left-4 top-4 z-[-10] h-full w-full rounded-xl bg-black" />
      <h1 className="mb-2 text-xl font-black">Pending Invitation</h1>
      <p>{requestList.length} friends user request</p>
      <div className="mt-6 space-y-4">
        {requestList.map((request) => (
          <div
            key={request.email}
            className="flex items-center justify-between rounded-lg border-2 border-black p-4"
          >
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  className="object-cover"
                  src={request.avatar}
                  alt={`${request.name} Avatar`}
                />
              </Avatar>
              <div className="flex flex-col">
                <span className="font-bold">{request.name}</span>
                {request.mutual_friends.length > 0 && (
                  <HoverCard>
                    <HoverCardTrigger>
                      <span className="cursor-pointer text-sm">
                        {request.mutual_friends.length} mutual friends
                      </span>
                    </HoverCardTrigger>
                    <HoverCardContent className="space-y-2 border-2 border-black p-2">
                      {request.mutual_friends.map((person) => (
                        <div
                          key={person.name}
                          className="flex cursor-pointer items-center gap-2 rounded-lg p-2 hover:bg-slate-100"
                        >
                          <Avatar>
                            <AvatarImage
                              className="object-cover"
                              src={person.avatar}
                              alt={`${person.name} Avatar`}
                            />
                          </Avatar>
                          <span>{person.name}</span>
                        </div>
                      ))}
                    </HoverCardContent>
                  </HoverCard>
                )}
              </div>
            </div>
            <div className="space-x-2">
              <Button variant="ghost">Decline</Button>
              <Button className="bg-emerald-400 hover:bg-emerald-600">
                Confirm
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
