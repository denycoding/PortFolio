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

    if (!isDeleting && text === current) delay = HOLD_AFTER_TYPING;
    else if (isDeleting && text === "") delay = HOLD_AFTER_DELETING;

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
      className="bg-black text-white min-h-screen flex items-center pt-24 pb-16"
    >
      <div className="mx-auto w-full max-w-[1100px] px-5 grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-8">
        {/* Text */}
        <div className="order-last md:order-first text-center md:text-left">
          <p className="text-xl sm:text-2xl font-bold text-orange-500">
            Hi, I am
          </p>

          <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight">
            Kazi Mohammad Kaif
          </h1>

          <p className="mt-3 text-2xl sm:text-3xl font-bold min-h-[2.5rem] sm:min-h-[2.75rem]">
            A <span className="text-blue-500">{typedTitle}</span>
            <span
              aria-hidden="true"
              className="motion-safe:animate-pulse text-blue-500"
            >
              |
            </span>
          </p>

          <p className="mt-5 max-w-lg mx-auto md:mx-0 font-medium text-gray-400 leading-relaxed">
            Full-stack engineer transforming complex requirements into reliable
            software. I craft accessible{" "}
            <span className="text-purple-500">React</span> frontends, robust{" "}
            <span className="text-purple-500">Node.js</span> backends, and
            targeted <span className="text-purple-500">AI</span> features that
            optimize user experience and workflows.
          </p>

          {/* Social links */}
          <ul className="mt-6 flex justify-center md:justify-start gap-4">
            {SOCIAL_LINKS.map(({ label, icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-700 text-lg text-gray-300
                    transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-white
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 font-bold text-blue-600
                transition hover:bg-gray-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <FaUser aria-hidden="true" />
              Hire Me
            </a>
            <a
              href="/Kazi-Mohammad-Kaif-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-2.5 font-bold text-white
                transition hover:bg-blue-600
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Download CV
              <FaDownload aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="order-first md:order-last flex justify-center">
          <div className="group relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-500/30 via-indigo-500/20 to-cyan-400/30
                blur-2xl opacity-70 transition-opacity duration-500 "
            />

            <div className="relative rounded-full p-1 bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400">
              <div className="rounded-full bg-black p-">
                <div className="overflow-hidden rounded-full">
                  <img
                    src={self}
                    alt="Kazi Mohammad Kaif"
                    className="block h-[52] w-52 sm:h-44 sm:w-64 lg:h-[500px] lg:w-80 pl-5 object-cover object-top
                      transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <span
              className="absolute bottom-3 right-0 sm:bottom-5 sm:right-2 flex items-center gap-2 rounded-full
                bg-gray-900/90 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Full Stack Developer{" "}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
