import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className=" bg-slate-500">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="text-2xl font-bold text-white hover:text-gray-200 transition duration-300"
        >
          MyPortfolio
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>

        {/* Menu */}
        <div
          className={`md:flex space-x-6 items-center ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 text-white text-lg">
            <li>
              <a
                href="#"
                className="hover:text-gray-200 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-200 transition duration-300"
              >
                About
              </a>
            </li>
            <li className="relative group">
              <a
                href="#"
                className="hover:text-gray-200 transition duration-300"
              >
                Projects
              </a>
              <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-2 rounded w-40 py-2">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="my-1 border-gray-200" />
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-200 transition duration-300"
              >
                Contact
              </a>
            </li>
            <li></li>
          </ul>

          {/* Search Bar */}
          <form className="flex items-center mt-4 md:mt-0">
            <input
              type="search"
              placeholder="Search"
              className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
            />
            <button
              type="submit"
              className="bg-purple-700 text-white px-4 py-2 rounded-r-lg hover:bg-purple-600 transition duration-300"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
