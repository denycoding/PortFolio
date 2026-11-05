import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-violet-950/20 border-t border-gray-800 py-5 px-6 text-gray-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand / Name */}
        <div>
          <h2 className="text-xl font-bold text-white tracking-wide">
            <span className="text-blue-400">Kazi</span> Mohammad Kaif
          </h2>
          <p className="text-xs text-gray-400 mt-1">Full-Stack Developer</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 text-sm text-gray-400">
          <a
            href="mailto:denycoding@gmail.com"
            className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-400 transition-colors"
          >
            <span className="text-blue-400">
              <MdEmail />
            </span>
            <span>denycoding@gmail.com</span>
          </a>

          <a
            href="tel:7984292907"
            className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-400 transition-colors"
          >
            <span className="text-blue-400">
              <FaPhoneAlt size={12} />
            </span>
            <span>+91 7984292907</span>
          </a>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-6xl mx-auto mt-4 pt-4 border-t border-gray-800/60 text-center text-xs text-gray-500">
        <p>© {currentYear} Kazi Mohammad Kaif. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
