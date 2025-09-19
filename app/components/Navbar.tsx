import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 flex items-center justify-between py-4 px-8 bg-gray-100 dark:bg-gray-900 shadow z-50">
      <div className="font-bold text-lg text-gray-800 dark:text-gray-100">
        MyApp
      </div>
      <ul className="flex gap-6">
        <li>
          <Link href="/" className="hover:underline text-gray-700 dark:text-gray-200">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline text-gray-700 dark:text-gray-200">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline text-gray-700 dark:text-gray-200">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
