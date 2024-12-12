import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        
          {/* Menu */}
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </Link>
              <Link href="/about" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                About
              </Link>
              <Link href="/services" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                Services
              </Link>
              <Link href="/contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;