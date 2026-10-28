import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiPostman,
  SiGithub,
  SiJsonwebtokens,
  SiCloudinary,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

import { VscJson } from "react-icons/vsc";
import { FaRobot } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { useState } from "react";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const Categories = [
    { label: "All", value: "All" },
    { label: "Frontend", value: "Frontend" },
    { label: "Backend", value: "Backend" },
    { label: "Database", value: "Database" },
    { label: "Other", value: "Other" },
  ];
  const skills = [
    // Frontend
    {
      name: "HTML5",
      icon: FaHtml5,
      color: "text-orange-500",
      category: "Frontend",
    },
    {
      name: "CSS3",
      icon: FaCss3Alt,
      color: "text-blue-500",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: FaJs,
      color: "text-yellow-400",
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "text-cyan-400",
      category: "Frontend",
    },
    {
      name: "Bootstrap",
      icon: SiBootstrap,
      color: "text-violet-400",
      category: "Frontend",
    },
    {
      name: "React.js",
      icon: FaReact,
      color: "text-cyan-400",
      category: "Frontend",
    },

    // Backend
    {
      name: "Express.js",
      icon: SiExpress,
      color: "text-gray-200",
      category: "Backend",
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "text-green-500",
      category: "Backend",
    },
    {
      name: "REST API",
      icon: VscJson,
      color: "text-amber-400",
      category: "Backend",
    },
    { name: "JWT", icon: IoIosLock, color: "text-white", category: "Backend" },

    // Database
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "text-green-400",
      category: "Database",
    },
    {
      name: "Sql",
      icon: GrMysql,
      color: "text-blue-400",
      category: "Database",
    },

    // Other
    {
      name: "AI Integration",
      icon: FaRobot,
      color: "text-emerald-400",
      category: "Other",
    },
    { name: "AWS", icon: FaAws, color: "text-orange-400", category: "Other" },
    {
      name: "Git",
      icon: FaGitAlt,
      color: "text-orange-400",
      category: "Other",
    },
    {
      name: "GitHub",
      icon: SiGithub,
      color: "text-gray-200",
      category: "Other",
    },
    {
      name: "Postman",
      icon: SiPostman,
      color: "text-orange-500",
      category: "Other",
    },
    {
      name: "Cloudinary",
      icon: SiCloudinary,
      color: "text-blue-400",
      category: "Other",
    },
    { name: "Vercel", icon: SiVercel, color: "text-white", category: "Other" },
    {
      name: "Render",
      icon: SiRender,
      color: "text-purple-400",
      category: "Other",
    },
  ];
  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const handleCategory = () => {};

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-5 py-20 sm:px-8  pt-20"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-violet-400 uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            What I Work With
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold">
            My <span className="text-violet-400">Skills</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto leading-7">
            Technologies and tools I use to build modern, responsive, and
            reliable web applications.
          </p>

          <div className="w-20 h-1 bg-violet-500 rounded-full mx-auto mt-3" />
        </div>
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {Categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`border rounded-xl px-4 py-2 cursor-pointer transition-all duration-300 ${
                activeCategory === cat.value
                  ? "bg-violet-500 border-violet-500 text-white"
                  : "bg-[#12121C] border-white/10 text-gray-300 hover:border-violet-400/50 hover:bg-[#191527]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group flex flex-col items-center justify-center gap-4
                min-h-[120px]  rounded-2xl
                bg-[#12121C] border border-white/10
                hover:border-violet-400/50 hover:bg-[#191527]
                hover:-translate-y-2 hover:shadow-lg hover:shadow-violet-500/10
                transition-all duration-300 cursor-pointer"
              >
                <Icon
                  className={`${skill.color} text-2xl sm:text-5xl
                  group-hover:scale-110 transition-transform duration-300`}
                />

                <h2 className="text-gray-200 font-medium ">{skill.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
