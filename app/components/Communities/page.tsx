import Link from "next/link";

const communities = ["IEEE", "NSS", "SHE", "MULearn", "Thub", "TREXX"];

export default function CommunitiesPage() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-24 px-8">
      <h1 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100">
        Community Highlight
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {communities.map((community) => (
          <div
            key={community}
            className="flex items-center justify-center h-40 bg-gray-300 dark:bg-gray-700 rounded-lg shadow hover:scale-105 transition cursor-pointer"
          >
            <span className="text-xl font-medium text-gray-900 dark:text-gray-100">
              {community}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
        >
          Back
        </Link>
      </div>
    </main>
  );
}
