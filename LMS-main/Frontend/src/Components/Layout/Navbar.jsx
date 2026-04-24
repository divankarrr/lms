import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarDrawer from "./NavbarDrawer";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  function handleNavbar() {
    setIsOpen(!isOpen);
  }

  const navLinkClass =
    "relative px-3 py-1 transition duration-300 text-gray-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-300";

  return (
    <>
      {/* Navbar */}
     <nav className="fixed top-4 left-10 right-10 z-50 bg-gradient-to-br from-white/8 to-white/5 border border-white/20 backdrop-blur-md shadow-lg rounded-xl">
        
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-white flex items-center gap-2 transition duration-300 hover:text-green-400 hover:scale-105"
          >
            <span className="text-blue-500 text-3xl">🎓</span>
            SkillNest
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8 px-7 text-sm font-medium">
            <li><Link to="/" className={navLinkClass}>Home</Link></li>
            <li><Link to="/about" className={navLinkClass}>About</Link></li>
            <li><Link to="/courses" className={navLinkClass}>Courses</Link></li>
            <li><Link to="/contact" className={navLinkClass}>Contact</Link></li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="px-5 py-2 rounded-full border border-gray-500 text-gray-300 hover:text-white hover:border-white transition duration-300"
            onClick={()=>navigate("/login")}>
              Login
            </button>

            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
              Get Started <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          {/* Hamburger */}
          <button className="lg:hidden text-3xl" onClick={handleNavbar}>
            <i className="fa-solid fa-bars hover:scale-[1.2] transition duration-300"></i>
          </button>

        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 w-[80%] sm:w-[60%] md:w-[50%] h-screen bg-gradient-to-b from-[#1a2745] via-[#111827] to-[#1d263a] z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <NavbarDrawer />
      </div>
    </>
  );
};

export default Navbar;