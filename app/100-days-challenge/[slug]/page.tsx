"use server";
import { notFound } from "next/navigation";
import { challenges } from "../challenges";

interface ParamsProps {
  slug: string;
}

export async function generateMetadata({ params }: { params: ParamsProps }) {
  const { slug } = params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: title,
  };
}

export async function generateStaticParams() {
  return challenges.map((challenge) => ({
    slug: challenge.slug,
  }));
}

export default async function Page({ params }: { params: ParamsProps }) {
  const { slug } = params;
  const solution = challenges.find(
    (challenge) => challenge.slug === slug,
  )?.solution;

  if (!solution) {
    return notFound();
  }

  return <>{solution}</>;
}
