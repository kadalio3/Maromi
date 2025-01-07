'use client';
import { useState } from 'react';
import { RiMoonLine, RiCloseLine, RiMenuFill } from 'react-icons/ri';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <nav className="container mx-auto flex items-center justify-between p-4">
      <a href="/home" className="text-2xl font-bold text-gray-800 dark:text-white">
        Maromi
      </a>

      <div
        className={`fixed inset-0 z-10 bg-white dark:bg-gray-900 flex flex-col justify-center items-center transform transition-transform duration-300 lg:static lg:flex lg:flex-row lg:items-center lg:gap-6 lg:bg-transparent lg:dark:bg-transparent ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        }`}
      >
        <ul className="space-y-6 lg:space-y-0 lg:flex lg:gap-6">
          {[
            { href: '/home', label: 'Home' },
            { href: '/home/about', label: 'About' },
            { href: '#profile', label: 'Profile' },
            { href: '#store', label: 'Store' },
          ].map((link) => (
            <li key={link.href} className="nav__item">
              <a
                href={link.href}
                className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Close button */}
        <button
          className="absolute top-6 right-6 text-2xl text-gray-800 dark:text-white lg:hidden"
          onClick={toggleMenu}
        >
          <RiCloseLine />
        </button>
      </div>

      <div className="flex items-center gap-4">
        {/* Dark/Light mode button */}
        <button
          className="text-2xl text-gray-800 dark:text-white"
          onClick={toggleTheme}
        >
          <RiMoonLine />
        </button>

        {/* Menu toggle button */}
        <button
          className="text-2xl text-gray-800 dark:text-white lg:hidden"
          onClick={toggleMenu}
        >
          <RiMenuFill />
        </button>
      </div>
    </nav>
  );
}