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
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Close mobile menu when pressing Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Navigation link styles
  const linkClass = (id) =>
    `block rounded-xl px-4 py-2.5 text-sm lg:text-base font-medium transition-all duration-300 ${
      activeId === id
        ? "bg-blue-500/20 text-blue-400"
        : "text-gray-300 hover:bg-blue-500/10 hover:text-white"
    }`;

  // Close menu and update active section
  const handleNavigation = (id) => {
    setActiveId(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-800/60 bg-gray-950/80 px-4 py-3 backdrop-blur-xl sm:px-6 sm:py-4 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavigation("home")}
          className="shrink-0 rounded-md font-bold tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Portfolio home"
        >
          <span className="text-xl text-white sm:text-2xl lg:text-3xl">
            <span className="text-blue-500">P</span>ort
          </span>
          <span className="text-xl text-white sm:text-2xl lg:text-3xl">
            <span className="text-violet-500">F</span>olio.
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-1 font-medium md:flex lg:gap-2"
          aria-label="Main navigation"
        >
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
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-2xl text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute inset-x-0 top-full overflow-hidden border-b border-gray-800 bg-gray-950/95 shadow-xl backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen
            ? "visible max-h-[420px] opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-md flex-col gap-2 px-5 py-5"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleNavigation(link.id)}
              tabIndex={isOpen ? 0 : -1}
              aria-current={
                activeId === link.id ? "location" : undefined
              }
              className={linkClass(link.id)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;