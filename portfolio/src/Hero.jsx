import { useState, useEffect } from "react";
import { FaInstagram, FaDownload } from "react-icons/fa6";
import { FaLinkedinIn, FaUser } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import self from "./assets/self.png";

const TITLES = [
  "MERN Stack Developer",
  "Front-End Developer",
  "Back-End Developer",
  "Full Stack Developer",
  "React.js Developer",
  "Node.js Developer",
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/deny.devv/",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/kazi-mohammad-kaif-57b11423b/",
  },
  {
    label: "GitHub",
    icon: <IoLogoGithub />,
    href: "https://github.com/denycoding",
  },
  {
    label: "WhatsApp",
    icon: <IoLogoWhatsapp />,
    href: "https://wa.me/917984292907?text=Hi%20Kaif,%20I%20saw%20your%20Portfolio%20and%20would%20like%20to%20talk.",
  },
];

const TYPE_SPEED = 70;
const DELETE_SPEED = 35;
const HOLD_AFTER_TYPING = 1500;
const HOLD_AFTER_DELETING = 300;

function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let delay = isDeleting ? DELETE_SPEED : TYPE_SPEED;

    if (!isDeleting && text === current) {
      delay = HOLD_AFTER_TYPING;
    } else if (isDeleting && text === "") {
      delay = HOLD_AFTER_DELETING;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && text === current) {
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        const next = isDeleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1);

        setText(next);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words]);

  return text;
}

function Hero() {
  const typedTitle = useTypewriter(TITLES);

  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-black px-4 pb-12 pt-24 text-white sm:px-6 sm:pb-16 sm:pt-28 md:px-8 md:pt-24"
    >
      <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 items-center gap-10 sm:gap-12 md:grid-cols-2 md:gap-8 lg:gap-12">
        {/* Text */}
        <div className="order-last min-w-0 text-center md:order-first md:text-left">
          <p className="text-lg font-bold text-orange-500 sm:text-xl md:text-2xl">
            Hi, I am
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Kazi Mohammad Kaif
          </h1>

          <p className="mt-3 flex min-h-[3.5rem] flex-wrap items-center justify-center gap-x-1 text-xl font-bold sm:min-h-[2.5rem] sm:text-2xl lg:text-3xl md:justify-start">
            <span>A</span>
            <span className="text-blue-500">{typedTitle}</span>
            <span
              aria-hidden="true"
              className="text-blue-500 motion-safe:animate-pulse"
            >
              |
            </span>
          </p>

          <p className="mx-auto mt-5 max-w-lg text-sm font-medium leading-relaxed text-gray-400 sm:text-base md:mx-0">
            Full-stack engineer transforming complex requirements into reliable
            software. I craft accessible{" "}
            <span className="text-purple-500">React</span> frontends, robust{" "}
            <span className="text-purple-500">Node.js</span> backends, and
            targeted <span className="text-purple-500">AI</span> features that
            optimize user experience and workflows.
          </p>

          {/* Social links */}
          <ul className="mt-6 flex justify-center gap-3 sm:gap-4 md:justify-start">
            {SOCIAL_LINKS.map(({ label, icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-700 text-lg text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:h-11 sm:w-11"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-blue-600 transition hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:px-5 sm:text-base"
            >
              <FaUser aria-hidden="true" />
              Hire Me
            </a>

            <a
              href="/Kazi-Mohammad-Kaif-CV.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:px-5 sm:text-base"
            >
              Download CV
              <FaDownload aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="order-first flex justify-center md:order-last">
          <div className="group relative">
            {/* Background glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-full bg-gradient-to-tr from-blue-500/30 via-indigo-500/20 to-cyan-400/30 opacity-70 blur-2xl transition-opacity duration-500"
            />

            {/* Photo border */}
            <div className="relative rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 p-1">
              <div className="rounded-full bg-black p-1">
                <div className="overflow-hidden rounded-full">
                  <img
                    src={self}
                    alt="Kazi Mohammad Kaif"
                    className="block h-64 w-52 max-w-full object-cover pl-5 object-top transition-transform duration-500 ease-out motion-safe:group-hover:scale-105 sm:h-80 sm:w-64 md:h-[380px] md:w-[300px] lg:h-[460px] lg:w-[320px]"
                  />
                </div>
              </div>
            </div>

            {/* Developer badge */}
            <span className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-gray-900 px-3 py-2 text-xs font-medium text-white ring-1 ring-white/10 sm:bottom-5 sm:px-4 sm:text-sm">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {"</>"} Full Stack Developer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;