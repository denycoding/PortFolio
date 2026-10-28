import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Optional: for mobile toggle icons

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-950/50 backdrop-blur-md border-b border-gray-800/60 px-6 md:px-10 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Brand / Logo */}
        <a href="#" className="font-bold tracking-wide">
          <span className="text-2xl md:text-3xl text-white">
            <span className="text-blue-500">P</span>ort
          </span>
          <span className="text-2xl md:text-3xl text-white">
            <span className="text-violet-500">F</span>olio.
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 font-medium text-gray-300">
          <a href="#" className="hover:text-white hover:bg-blue-500/20 px-4 py-2 rounded-xl transition-all">
            Home
          </a>
          <a href="#about" className="hover:text-white hover:bg-blue-500/20 px-4 py-2 rounded-xl transition-all">
            About
          </a>
          <a href="#skills" className="hover:text-white hover:bg-blue-500/20 px-4 py-2 rounded-xl transition-all">
            Skills
          </a>
          <a href="#experience" className="hover:text-white hover:bg-blue-500/20 px-4 py-2 rounded-xl transition-all">
            Experience
          </a>
          <a href="#projects" className="hover:text-white hover:bg-blue-500/20 px-4 py-2 rounded-xl transition-all">
            Projects
          </a>
          <a href="#contact" className="hover:text-white hover:bg-blue-500/20 px-4 py-2 rounded-xl transition-all">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white text-2xl focus:outline-none p-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-gray-950/95 backdrop-blur-xl border-b border-gray-800 flex flex-col items-center gap-4 py-6 text-gray-300 font-medium shadow-xl">
          <a href="#" onClick={() => setIsOpen(false)} className="hover:text-blue-400 py-1">
            Home
          </a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-blue-400 py-1">
            About
          </a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-blue-400 py-1">
            Skills
          </a>
          <a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-blue-400 py-1">
            Experience
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-blue-400 py-1">
            Projects
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-400 py-1">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;