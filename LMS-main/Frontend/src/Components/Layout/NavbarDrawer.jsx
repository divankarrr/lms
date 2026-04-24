import React from "react";
import { Link } from "react-router-dom";

const NavbarDrawer = () => {
  return (
    <div className="py-8 px-4 h-full overflow-y-auto text-white">
      <div className="py-4 px-3 text-2xl font-bold flex items-center gap-2 border-b border-gray-700">
        <span className="text-blue-500 text-3xl">🎓</span>
        SkillNest
      </div>
      <ul className="flex flex-col gap-4 mt-8 pl-2">
        
        <li>
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:pl-6"
          >
            <i className="fa-solid fa-house text-lg"></i>
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:pl-6"
          >
            <i className="fa-solid fa-circle-info text-lg"></i>
            About
          </Link>
        </li>

        <li>
          <Link
            to="/courses"
            className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:pl-6"
          >
            <i className="fa-solid fa-book-open text-lg"></i>
            Courses
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:pl-6"
          >
            <i className="fa-solid fa-envelope text-lg"></i>
            Contact
          </Link>
        </li>

      </ul>

    </div>
  );
};

export default NavbarDrawer;