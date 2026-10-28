import cafe from "./assets/Denys_Artisan_Cafe.png";
import denydev from "./assets/DenyDev_AI_Freelance_Marketplace.png";
import { MdArrowOutward } from "react-icons/md";

function Projects() {
  const projects = [
    {
      id: 1,
      img: denydev,
      heading: "DenyDev AI",
      p: "DenyDev is an AI-powered freelancing platform built with the MERN stack, connecting clients and freelancers through job posting, proposal management, real-time messaging, and smart AI features.",
      skills: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "AI Integration",
        "Socket.IO",
      ],
      url: "https://denydev.onrender.com/",
    },

    {
      id: 2,
      img: cafe,
      heading: "Denys Artisan Cafe",
      p: "DenyDev is an AI-powered freelancing platform built with the MERN stack, featuring job posting, proposal management, real-time messaging, and intelligent AI-powered tools.",
      skills: ["React.js", "Tailwind CSS"],
      url: "https://denys-artisan-cafe.vercel.app/",
    },
    {
      id: 3,
      img: cafe,
      heading: "YouTube Clone",
      p: "YouTube Clone is a responsive video browsing platform built with React.js, featuring video search, dynamic listings, category-based browsing, and seamless API integration.",
      skills: ["React.js", "JavaScript", "REST API", "CSS"],
      url: "YOUR_YOUTUBE_CLONE_URL",
    },
  ];
  return (
    <>
      <section id="projects" className=" max-w-[1100px] mx-auto  pt-20">
        <div className="text-center mb-8">
          <p className="text-violet-400 uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            My Recent Work
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold  text-white">
            Featured <span className="text-violet-400">Projects</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto leading-7">
            Explore the projects I've built, showcasing my skills in full-stack
            development, modern web technologies, and AI integration.
          </p>

          <div className="w-20 h-1 bg-violet-500 rounded-full mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col text-white rounded-3xl overflow-hidden bg-[#12121C] border border-gray-400/20 hover:border-white/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-violet-500/10"
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.img}
                  alt={project.heading}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Details */}
              <div className="p-5 flex flex-col flex-1">
                <h2 className="text-xl font-bold mb-3">{project.heading}</h2>

                <p className="text-gray-400 text-sm leading-6 mb-2  h-30">
                  {project.p}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-violet-500/10 text-violet-300 border border-violet-400/20"
                    >
                      {skill}
                    </span>
                  ))}

                  {project.skills.length > 3 && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-violet-500/10 text-violet-300 border border-violet-400/20">
                      +{project.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* Live Project Link */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex justify-end"
                >
                  <span className="px-3 py-2 rounded-xl text-white flex items-center gap-2 bg-violet-500/10 border border-violet-400/20 hover:bg-violet-500/20 hover:border-violet-400/50 transition-all duration-300">
                    Live <MdArrowOutward />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>{" "}
    </>
  );
}
export default Projects;
