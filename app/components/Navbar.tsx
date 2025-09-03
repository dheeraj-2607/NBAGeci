import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-gray-100 dark:bg-gray-900 shadow mb-8">
      <div className="font-bold text-lg text-gray-800 dark:text-gray-100">
        MyApp
      </div>
      <ul className="flex gap-6">
        <li>
          <Link href="/">
            <a className="hover:underline text-gray-700 dark:text-gray-200">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="hover:underline text-gray-700 dark:text-gray-200">About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="hover:underline text-gray-700 dark:text-gray-200">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}