"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CiWallet } from "react-icons/ci";
import { IoSearchSharp } from "react-icons/io5";

const JobBoard = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const onJobClick = (job: Job) => {
    setSelectedJob(job);
  };

  return (
    <main className="flex min-h-screen items-center justify-center gap-4 p-8">
      <div className="flex h-[90vh] basis-2/3 flex-col gap-4">
        <SearchContainer />
        <SearchResultsContainer onJobClick={onJobClick} />
      </div>
      {selectedJob !== null && <InfoDisplayContainer {...selectedJob} />}
    </main>
  );
};

export default JobBoard;

const SearchContainer = () => {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-[#f1f0f6] p-4 shadow-lg">
      <div className="flex flex-1 items-center rounded-xl bg-white px-2">
        <IoSearchSharp />
        <input
          className="w-full bg-transparent p-2 outline-none"
          type="text"
          placeholder="Find a job"
        />
      </div>
      <Button variant="ghost" className="rounded-xl bg-[#ff60a3] text-white">
        Search
      </Button>
    </div>
  );
};

interface Job {
  image: string;
  position: string;
  description: string;
  company: string;
  skills: string[];
  salary: string;
}

const SearchResultsContainer = ({
  onJobClick,
}: {
  onJobClick: (job: Job) => void;
}) => {
  const jobs = [
    {
      image: "/assets/100-days-challenge/day-26/google.png",
      position: "Frontend Developer",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit consequuntur ullam exercitationem illum velit perferendis repellendus accusantium vitae debitis autem!",
      company: "Google",
      skills: ["React", "TypeScript", "Redux"],
      salary: "$2000 - $3000",
    },
    {
      image: "/assets/100-days-challenge/day-26/google.png",
      position: "Backend Developer",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit consequuntur ullam exercitationem illum velit perferendis repellendus accusantium vitae debitis autem!",
      company: "Spotify",
      skills: ["Java", "Spring Boot", "AWS"],
      salary: "$2500 - $3500",
    },
    {
      image: "/assets/100-days-challenge/day-26/netflix.png",
      position: "UX/UI Designer",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit consequuntur ullam exercitationem illum velit perferendis repellendus accusantium vitae debitis autem!",
      company: "Netflix",
      skills: ["Adobe XD", "Sketch", "Illustrator"],
      salary: "$1800 - $2500",
    },
    {
      image: "/assets/100-days-challenge/day-26/netflix.png",
      position: "Fullstack Developer",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit consequuntur ullam exercitationem illum velit perferendis repellendus accusantium vitae debitis autem!",
      company: "Netflix",
      skills: ["React", "Node.js", "MongoDB"],
      salary: "$2500 - $3500",
    },
    {
      image: "/assets/100-days-challenge/day-26/netflix.png",
      position: "UX/UI Designer",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit consequuntur ullam exercitationem illum velit perferendis repellendus accusantium vitae debitis autem!",
      company: "Netflix",
      skills: ["Figma", "Adobe XD", "InVision"],
      salary: "$1800 - $2500",
    },
  ];

  return (
    <div className="flex flex-1 flex-col gap-4 rounded-xl bg-[#f1f0f6] p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Search Results</h2>
        <span>1000 results</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {jobs.map((job, index) => (
          <button key={index} onClick={() => onJobClick(job)}>
            <JobCard {...job} />
          </button>
        ))}
      </div>
    </div>
  );
};

const JobCard = ({
  image,
  position,
  company,
  skills,
  salary,
}: {
  image: string;
  position: string;
  company: string;
  skills: string[];
  salary: string;
}) => {
  return (
    <div className="aspect-[5/2] cursor-pointer space-y-4 rounded-2xl bg-white p-4 duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg">
      <div className="flex items-center gap-2">
        <div className="aspect-square w-[60px] rounded-xl bg-slate-200">
          <img
            className="h-full w-full object-cover p-2"
            src={image}
            alt={company}
          />
        </div>
        <div className="text-start">
          <h2 className="font-semibold">{position}</h2>
          <span className="text-xs opacity-50">{company}</span>
        </div>
      </div>
      <div className="space-x-2 text-start">
        {skills.map((skill) => (
          <span
            className="rounded-full bg-gray-200 px-2 py-0.5 text-xs"
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CiWallet className="h-4 w-4" />
          <span className="text-xs font-semibold">{salary}</span>
        </div>
        <span className="text-xs opacity-50">6 mins ago</span>
      </div>
    </div>
  );
};

const InfoDisplayContainer = ({
  image,
  position,
  description,
  company,
  skills,
  salary,
}: {
  image: string;
  position: string;
  description: string;
  company: string;
  skills: string[];
  salary: string;
}) => {
  return (
    <div className="flex h-[90vh] w-[380px] flex-col gap-4 rounded-2xl bg-white p-4 shadow-lg">
      <div className="aspect-square w-[60px] rounded-xl bg-slate-200">
        <img
          className="h-full w-full object-cover p-4"
          src={image}
          alt={company}
        />
      </div>
      <h1 className="text-xl font-bold">{position}</h1>
      <span className="text-sm opacity-50">{company}</span>
      <div className="w-fit rounded-full bg-pink-300 px-2 py-1 text-sm text-pink-700">
        +100 Aplicants
      </div>
      <hr />
      <div className="space-y-2">
        <h2 className="font-semibold">Description</h2>
        <p>{description}</p>
      </div>
      <hr />
      <div className="space-y-2">
        <h2 className="font-semibold">Skills</h2>
        <div>
          {skills.map((skill) => (
            <span
              className="rounded-full bg-gray-200 px-2 py-0.5 text-xs"
              key={skill}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <hr />
      <div>
        <h2 className="font-semibold">Based salary</h2>
        <span>{salary}</span>
      </div>
      <Button className="mt-auto w-full">Apply Now</Button>
    </div>
  );
};
