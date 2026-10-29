import { useState, useEffect } from "react";
import { FaInstagram, FaDownload, FaUser } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
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
      className="min-h-screen bg-black text-white flex items-center pt-28 pb-16 sm:pt-32 md:pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-2 md:gap-8 lg:gap-14 lg:px-8">

        {/* Profile Image */}
        <div className="order-1 flex justify-center md:order-2">
          <div className="group relative w-fit max-w-full">

            {/* Image Border */}
            <div className="relative rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 p-1">
              <div className="overflow-hidden rounded-full bg-black">
                <img
                  src={self}
                  alt="Kazi Mohammad Kaif"
                  fetchPriority="high"
                  className="block h-56 w-56 max-w-full rounded-full object-cover object-top transition-transform duration-500 ease-out motion-safe:group-hover:scale-105 xs:h-64 xs:w-64 sm:h-72 sm:w-72 md:h-64 md:w-64 lg:h-80 lg:w-80 xl:h-[360px] xl:w-[360px]"
                />
              </div>
            </div>

            {/* Developer Badge */}
            <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-gray-700 bg-gray-900 px-3 py-2 text-xs font-medium text-white shadow-lg sm:text-sm md:left-auto md:right-0 md:translate-x-1/4 lg:right-2 lg:translate-x-0">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span>{"</>"} Full Stack Developer</span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="order-2 min-w-0 text-center md:order-1 md:text-left">

          <p className="text-lg font-bold text-blue-400 sm:text-xl md:text-2xl">
            Hi, I am
          </p>

          <h1 className="mt-2 break-words text-3xl font-bold tracking-tight sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
            Kazi Mohammad Kaif
          </h1>

          {/* Typewriter Title */}
          <div className="mt-4 flex min-h-[4rem] items-center justify-center md:justify-start">
            <p className="max-w-full break-words text-xl font-bold leading-snug sm:text-2xl lg:text-3xl">
              <span>A </span>
              <span className="text-blue-500">{typedTitle}</span>
              <span
                aria-hidden="true"
                className="text-blue-500 motion-safe:animate-pulse"
              >
                |
              </span>
            </p>
          </div>

          {/* Introduction */}
          <p className="mx-auto mt-5 max-w-xl text-sm font-medium leading-7 text-gray-400 sm:text-base md:mx-0 lg:text-lg">
            Full-stack developer transforming complex requirements into
            reliable software. I build responsive{" "}
            <span className="text-blue-400">React</span> frontends, robust{" "}
            <span className="text-blue-400">Node.js</span> backends, and
            practical <span className="text-blue-400">AI</span> features that
            improve user experiences and workflows.
          </p>

          {/* Social Links */}
          <ul className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4 md:justify-start">
            {SOCIAL_LINKS.map(({ label, icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 text-lg text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:h-11 sm:w-11"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
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
      </div>
    </section>
  );
}

export default Hero;