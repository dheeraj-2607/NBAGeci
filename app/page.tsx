import Link from "next/link";
import Navbar from "./components/Navbar";
import CommunitiesPage from "./components/Communities/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 pt-20">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">
          Welcome to MyApp
        </h1>
        <div className="flex gap-6">
          <Link
            href="/communities"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Communities
          </Link>
          <Link
            href="/courses"
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            Courses
          </Link>
        </div>
      </main>
    </>
  );
}
