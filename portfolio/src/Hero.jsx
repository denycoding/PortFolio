import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";
import self from "./assets/self.png";

function Hero() {
  const data = [
    "Mern Stack Developer",
    "Front-End Developer",
    "Back-End Developer",
    "Full Stack Developer",
    "ReactJs Developer",
    "Node.js Developer",
  ];

  const links = [
    {
      id: 1,
      icon: <FaInstagram />,
      href: "https://www.instagram.com/deny.devv/",
    },
    {
      id: 2,
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/kazi-mohammad-kaif-57b11423b/",
    },
    {
      id: 3,
      icon: <IoLogoGithub />,
      href: "https://github.com/denycoding",
    },
    {
      id: 4,
      icon: <IoLogoWhatsapp />,
      href: "https://wa.me/917984292907?text=Hi%20Kaif,%20I%20saw%20your%20Portfolio%20and%20would%20like%20to%20talk.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = data[index];

    let speed = isDeleting ? 50 : 50;

    if (!isDeleting && text === currentText) {
      speed = 1500; // Pause after typing the complete word
    } else if (isDeleting && text === "") {
      speed = 300;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentText) {
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % data.length);
      } else if (isDeleting) {
        setText(currentText.substring(0, text.length - 1));
      } else {
        setText(currentText.substring(0, text.length + 1));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <>
      <section className="bg-black max-w-[1100px]  text-white  grid grid-cols-2 mt-20 mx-auto px-5  h-screen ">
        <div className=" mt-20">
          <div className="text-2xl my-2 font-bold">
            <h1 className="text-orange-500">Hi, I am</h1>
          </div>
          <h1>
            <div className="text-4xl my-2 font-bold">
              <span>Kazi </span>
              <span>Mohammad </span>
              <span>Kaif</span>
              <span>.</span>
            </div>
            <span className="text-3xl font-bold">A </span>

            <span className="text-3xl text-blue-500 font-bold">
              {text}
              <span className="animate-pulse">|</span>
            </span>

            <p className="w-lg   mt-4 font-medium text-gray-400 font-sans">
              Full-stack engineer transforming complex requirements into
              reliable software. I craft accessible{" "}
              <span className="text-purple-500"> React</span> frontends, robust
              <span className="text-purple-500"> Node.js</span> backends, and
              targeted <span className="text-purple-500"> AI </span>features
              that optimize user experience and workflows.
            </p>
          </h1>
          <div className="flex gap-5 mt-5 pl-28">
            {links.map((item) => {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  className="border border-gray-700 p-2 rounded-md cursor-pointer hover:border-blue-500 transition-all duration-400 hover:-translate-y-1 "
                >
                  {item.icon}
                </a>
              );
            })}
          </div>
          <div className="flex   pl-12  gap-16   mt-6">
            <button className="bg-white text-blue-500 font-bold rounded-lg px-4 p-2 cursor-pointer flex items-center gap-1">
              <FaUser />
              Hire Me
            </button>
            <button className="bg-blue-500  rounded-lg px-4  font-bold cursor-pointer flex items-center  gap-1 ">
              Download CV <FaDownload />
            </button>
          </div>
        </div>

        <div className="flex justify-center  ">
          <img
            src={self}
            alt="Kazi Mohammad Kaif"
            className="w-[500px] h-[500px]  object-cover rounded-full border-4 border-blue-500/50 shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>
    </>
  );
}
export default Hero;
