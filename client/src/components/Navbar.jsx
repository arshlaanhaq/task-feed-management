import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()
  function onlogout(){
    localStorage.removeItem('token')
    navigate("/")
  }

  return (
    <nav className="bg-gray-800  text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">Application</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="/tasks" className="hover:text-gray-200">
              Task
            </a>
          </li>
          <li>
            <a href="/feed" className="hover:text-gray-200">
              Feed
            </a>
          </li>
          <li>
           <button onClick={onlogout} className="hover:text-red-200 cursor-pointer" >Logout</button>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-grey-600 text-white space-y-4 px-4 py-6">
          <li>
            <a href="/tasks" className="block hover:text-gray-200">
              Task
            </a>
          </li>
          <li>
            <a href="feed" className="block hover:text-gray-200">
              Feed
            </a>
          </li>
          <li>
           <button onClick={onlogout} className="block hover:text-red-200 cursor-pointer" >Logout</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
