"use client";
import { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Attachment, Notification, Notifications } from "../types";

import { MdFileDownload } from "react-icons/md";
import { usePathname } from "next/navigation";
import { getAssetsDir } from "../utils";

const Notifications = () => {
  const assetsDir = getAssetsDir(usePathname());

  const notifications: Notifications = [
    {
      id: 1,
      profile_picture: `${assetsDir}/pfp-1.jpg`,
      name: "Jane Anne",
      type: "joined_group",
      date: "2024-01-01T00:00:00",
      group: {
        name: "Design",
        url: "https://www.google.com.ar",
      },
    },
    {
      id: 1,
      profile_picture: `${assetsDir}/pfp-2.jpg`,
      name: "Ryan",
      type: "mentioned_in_comment",
      date: "2024-01-01T00:00:00",
      comment: "https://www.google.com.ar",
    },
    {
      id: 1,
      profile_picture: `${assetsDir}/pfp-3.jpg`,
      name: "Billy Doe",
      type: "friend_request",
      date: "2024-01-01T00:00:00",
    },
    {
      id: 1,
      profile_picture: `${assetsDir}/pfp-4.jpg`,
      name: "Maria Hernandez",
      type: "uploaded_attachments",
      date: "2024-01-01T00:00:00",
      channel: {
        name: "Source",
        url: "https://www.google.com.ar",
      },
      attachments: [
        {
          type: "file",
          img: `${assetsDir}/attachment-miniature.jpg`,
          file_name: "Background Images",
          size: "1.4GB",
        },
        {
          type: "link",
          img: `${assetsDir}/attachment-miniature.jpg`,
          title: "App Generator - The technology agnostic way",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, possimus.",
          site: "https://www.google.com/",
        },
      ],
    },
  ];

  return (
    <main className="flex min-h-screen bg-[#f1ecff]">
      <div className="relative basis-1/2">
        <NotificationContainer notifications={[]} />
      </div>
      <div className="relative basis-1/2">
        <NotificationContainer notifications={notifications} />
      </div>
    </main>
  );
};

export default Notifications;

const Card = ({ notifications }: { notifications: Notifications }) => {
  return (
    <CardContainer>
      <div className="flex items-center justify-between p-4 shadow-md">
        <h1 className="text-xl font-semibold">Notifications</h1>
        <button className="text-xs font-light hover:underline">
          Mark as read
        </button>
      </div>
      {notifications.length > 0 ? (
        <>
          <div className="flex max-h-[500px] flex-col overflow-y-auto">
            {notifications.map((n, i) => (
              <>
                <Notification key={i} {...n} />
                <hr />
              </>
            ))}
          </div>
          <button className="m-4 rounded-lg bg-black p-2 text-sm text-slate-50 shadow-lg">
            View all notifications
          </button>
        </>
      ) : (
        <div className="flex max-h-[500px] flex-col overflow-y-auto">
          <p className="m-8 text-center text-sm text-slate-300">
            You dont have any notifications yet
          </p>
        </div>
      )}
    </CardContainer>
  );
};

const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute right-0 top-12 flex w-[400px] flex-col overflow-hidden rounded-lg bg-slate-50 shadow-md">
      {children}
    </div>
  );
};

const NotificationButton = ({
  hasNotification,
  onClick,
}: {
  hasNotification: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="relative rounded-full bg-slate-50 p-1 shadow-lg duration-150 ease-in-out hover:scale-110"
    >
      {hasNotification && (
        <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
      )}
      <IoIosNotificationsOutline className="h-6 w-6" />
    </button>
  );
};

const NotificationContainer = ({
  notifications,
}: {
  notifications: Notifications;
}) => {
  const [isCardActive, setIsCardActive] = useState<boolean>(false);
  const hasNotification = notifications.length > 0;

  const toggleCard = () => {
    setIsCardActive((prevState) => !prevState);
  };

  return (
    <div className="relative left-3/4 top-[15%] w-fit -translate-x-1/2">
      <NotificationButton
        onClick={toggleCard}
        hasNotification={hasNotification}
      />
      {isCardActive && <Card notifications={notifications} />}
    </div>
  );
};

const Notification = ({
  profile_picture,
  name,
  type,
  group,
  comment,
  attachments,
  channel,
  date,
}: Notification) => {
  const getTypeMessage = () => {
    switch (type) {
      case "friend_request":
        return name + " sent you a friend request.";
      case "joined_group":
        return name + " joined to " + group?.name + " Group.";
      case "uploaded_attachments":
        return (
          name +
          " upload " +
          attachments?.length +
          " attachments to " +
          channel?.name +
          " Channel"
        );
      case "mentioned_in_comment":
        return name + " mentioned you in comment";
      default:
        return "";
    }
  };

  return (
    <div className="flex gap-4 bg-slate-100 p-2 hover:bg-slate-200">
      <div className="h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full">
        <img className="h-full w-full object-cover" src={profile_picture} />
      </div>
      <div className="">
        <p>{getTypeMessage()}</p>
        <div>
          <span className="text-xs text-slate-400">{date}</span>
          {type === "friend_request" && (
            <div className="flex items-center justify-center gap-2">
              <button className="basis-1/2 rounded-md bg-[#6e41e2]/60 py-1 text-xs text-slate-50 duration-200 ease-in-out hover:bg-[#6e41e2]">
                Accept
              </button>
              <button className="basis-1/2 rounded-md bg-[#dddddd]/60 py-1 text-xs duration-200 ease-in-out hover:bg-[#dddddd]">
                Decline
              </button>
            </div>
          )}
          {type === "uploaded_attachments" && attachments && (
            <div className="flex flex-col gap-2">
              {attachments.map((at, i) => (
                <Attachment key={i} attachment={at} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Attachment = ({ attachment }: { attachment: Attachment }) => {
  if (attachment.type === "file") {
    return (
      <div className="flex items-center justify-between rounded-lg border-2 bg-[#f5f5f5] p-2">
        <div className="flex items-center gap-2">
          <div className="h-[60px] w-[60px] overflow-hidden rounded-md">
            <img className="h-full w-full object-cover" src={attachment.img} />
          </div>
          <div>
            <p className="font-semibold text-[#6e41e2]">
              {attachment.file_name}
            </p>
            <p>{attachment.size}</p>
          </div>
        </div>
        <button className="rounded-full p-2 duration-200 ease-in-out hover:bg-slate-200">
          <MdFileDownload className="h-6 w-6" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-between gap-2 rounded-lg border-2 bg-[#f5f5f5] p-2">
      <div className="aspect-square h-[60px] w-[60px] shrink-0 overflow-hidden rounded-md">
        <img className="h-full w-full object-cover" src={attachment.img} />
      </div>
      <div>
        <p className="font-semibold text-[#6e41e2]">{attachment.title}</p>
        <p>{attachment.description}</p>
      </div>
    </div>
  );
};
