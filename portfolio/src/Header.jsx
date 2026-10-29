import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  const navLinks = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "skills", name: "Skills" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" },
  ];

  // Detect active section while scrolling
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Active and inactive link styles
  const linkClass = (id) =>
    `px-4 py-2 rounded-xl transition-all duration-300 ${
      activeId === id
        ? "bg-violet-500/30 text-white"
        : "text-gray-300 hover:text-white hover:bg-blue-500/10"
    }`;

  // Close mobile menu and update active link
  const handleNavigation = (id) => {
    setActiveId(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-950/50 backdrop-blur-md border-b border-gray-800/60 px-6 md:px-10 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={() => handleNavigation("home")}
          className="font-bold tracking-wide"
        >
          <span className="text-2xl md:text-3xl text-white">
            <span className="text-blue-500">P</span>ort
          </span>
          <span className="text-2xl md:text-3xl text-white">
            <span className="text-violet-500">F</span>olio.
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleNavigation(link.id)}
              className={linkClass(link.id)}
              aria-current={
                activeId === link.id ? "location" : undefined
              }
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl focus:outline-none p-1"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-gray-950/95 backdrop-blur-xl border-b border-gray-800 flex flex-col items-center gap-3 py-6 text-gray-300 font-medium shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleNavigation(link.id)}
              className={linkClass(link.id)}
              aria-current={
                activeId === link.id ? "location" : undefined
              }
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;