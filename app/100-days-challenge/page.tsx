import Link from "next/link";
import { challenges } from "./challenges";

const Page = () => {
  return (
    <main className="min-h-screen space-y-8 bg-slate-800 p-16 text-slate-50">
      <h1 className="text-3xl font-bold">100 Days of Code</h1>
      <div className="grid grid-cols-4">
        {challenges.map((challenge) => (
          <Link
            className="text-blue-500 hover:underline"
            key={challenge.slug}
            href={`/100-days-challenge/${challenge.slug}`}
          >
            {challenge.slug
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Page;
