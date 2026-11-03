import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

// Moved outside the component so it isn't recreated on every render
const NAV_LINKS = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "skills", name: "Skills" },
  { id: "experience", name: "Experience" },
  { id: "projects", name: "Projects" },
  { id: "contact", name: "Contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  // Detect active section while scrolling
  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.id)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close mobile menu with Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Close the mobile menu automatically when the screen grows to desktop/tablet width
  // (prevents a stuck-open menu after rotating a phone or resizing the browser)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handleChange = (e) => {
      if (e.matches) setIsOpen(false);
    };
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Navigation link styles
  const linkClass = (id) =>
    `block whitespace-nowrap rounded-xl px-4 py-3 text-base font-medium transition-colors duration-300 motion-reduce:transition-none md:px-3 md:py-2 md:text-sm lg:px-4 lg:py-2.5 lg:text-base ${
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-800/60 bg-gray-950/80 py-3 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pt-[max(0.75rem,env(safe-area-inset-top))] backdrop-blur-xl sm:px-6 sm:py-4 lg:px-10">
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

        {/* Desktop / Tablet Navigation */}
        <nav
          className="hidden items-center gap-0.5 md:flex lg:gap-2"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleNavigation(link.id)}
              className={linkClass(link.id)}
              aria-current={activeId === link.id ? "location" : undefined}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button (44x44 touch target) */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-2xl text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Backdrop: tap outside the menu to close it */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 top-full -z-10 h-screen bg-black/50 transition-opacity duration-300 motion-reduce:transition-none md:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Mobile Dropdown */}
      <div
        className={`absolute inset-x-0 top-full overflow-y-auto border-b border-gray-800 bg-gray-950/95 shadow-xl backdrop-blur-xl transition-all duration-300 motion-reduce:transition-none md:hidden ${
          isOpen
            ? "visible max-h-[calc(100dvh-4rem)] opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="mx-auto flex w-full max-w-md flex-col gap-1.5 px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:max-w-lg"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleNavigation(link.id)}
              tabIndex={isOpen ? 0 : -1}
              aria-current={activeId === link.id ? "location" : undefined}
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