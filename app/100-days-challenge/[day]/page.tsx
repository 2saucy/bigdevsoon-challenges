"use server"
import { notFound } from "next/navigation";
import { challenges } from "../challenges";


interface ParamsProps {
  day: string,
}

export async function generateMetadata({ params }: { params: ParamsProps }) {
  return {
    title: `Day ${params.day}`,
  };
};

export async function generateStaticParams() {
  return challenges.map(({ day }) => ({
    day: day.toString(),
  }))
}

export default async function Page({ params }: { params: ParamsProps }) {
  const { day } = params;
  const solution = challenges.find(challenge => challenge.day === Number(day))?.solution

  if (!solution) {
    return notFound()
  }
  
  return <>{solution}</>
}
