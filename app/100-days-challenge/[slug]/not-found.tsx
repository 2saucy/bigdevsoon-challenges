import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-800 text-slate-50">
      <h2 className="text-4xl font-bold">Not Found 404</h2>
      <p className="text-light text-sm text-slate-400">
        Could not find requested resource
      </p>
      <Link href="/" className="mt-4 hover:underline">
        Return Home
      </Link>
    </main>
  );
};

export default NotFound;
