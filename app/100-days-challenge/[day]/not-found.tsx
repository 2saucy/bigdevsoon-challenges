import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-slate-50 bg-slate-800">
      <h2 className="text-4xl font-bold">Not Found 404</h2>
      <p className="text-slate-400 text-light text-sm">Could not find requested resource</p>
      <Link href="/" className="hover:underline mt-4">Return Home</Link>
    </main>
  );
}

export default NotFound;