import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-gray-300 px-6 md:px-16 py-10">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">SkillNet</h2>
          <p className="text-sm text-gray-400">
            Learn new skills with top-quality courses designed by industry experts.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>Development</li>
            <li>Design</li>
            <li>Marketing</li>
            <li>Business</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-400">Email: support@skillnet.com</p>
          <p className="text-sm text-gray-400">Phone: +91 9876543210</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-3 text-lg">
            <i className="fa-brands fa-facebook hover:text-white cursor-pointer"></i>
            <i className="fa-brands fa-instagram hover:text-white cursor-pointer"></i>
            <i className="fa-brands fa-linkedin hover:text-white cursor-pointer"></i>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-8 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SkillNet. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer