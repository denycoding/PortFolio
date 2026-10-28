import img2 from "./assets/img2.png";
import { FaCode } from "react-icons/fa6";
import { SiDevelopmentcontainers } from "react-icons/si";
import { DiAtom } from "react-icons/di";

function About() {
  return (
    <>
      <section
        id="about"
        className=" bg-black text-center max-w-[1100px] mx-auto  pt-20 pb-10"
      >
        <div className="text-center mb-8">
          <p className="text-blue-500 uppercase tracking-[0.3em] text-sm font-bold mb-1">
            Get To Know
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold  text-white mb-5">
            About <span className="text-blue-500">Me</span>
          </h1>
          <div className="w-20 h-1 bg-violet-500 rounded-full mx-auto mt-3 mb-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center items-center">
            <div className="relative rounded-t-full bg-gradient-to-b from-blue-500/30 to-cyan-500/10 border border-blue-400/20 overflow-hidden">
              {" "}
              <img
                src={img2}
                alt="Kazi Mohammad Kaif"
                className="h-[400px] sm:h-[460px] lg:h-[520px] w-full object-contain"
              />
            </div>
          </div>

          {/* About Cards */}
          <div className="text-white w-full max-w-[600px] flex flex-col gap-5 mx-auto">
            {/* Card 1 */}
            <div className="group border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-white/[0.03] to-[#12121C]/90 backdrop-blur-xl rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 hover:border-blue-300/40 hover:bg-blue-500/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="shrink-0 p-3 rounded-xl bg-blue-400/10 text-blue-300 group-hover:bg-blue-400/20 transition-colors">
                <FaCode size={21} />
              </div>

              <p className="font-sans text-sm text-left sm:text-base leading-7 text-gray-300">
                I am a{" "}
                <span className="text-blue-300 font-semibold">
                  Full Stack Developer
                </span>{" "}
                specializing in the MERN stack{" "}
                <span className="text-gray-100 font-medium">
                  (React, Node.js, Express.js, MongoDB)
                </span>
                , passionate about building responsive, performant, and
                intuitive web applications that deliver meaningful user
                experiences.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group border border-blue-400/20 bg-gradient-to-br from-white/[0.06] via-blue-500/[0.08] to-[#12121C]/90 backdrop-blur-xl rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 hover:border-blue-300/40 hover:bg-blue-500/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="shrink-0 p-3 rounded-xl bg-white/10 text-blue-200 group-hover:bg-blue-300/20 transition-colors">
                <DiAtom size={25} />
              </div>

              <p className="font-sans text-sm sm:text-base text-left leading-7 text-gray-300">
                With a background in Information Technology and hands-on
                development experience, I enjoy solving complex problems,
                learning new technologies, and turning ideas into practical
                solutions through{" "}
                <span className="text-blue-300 font-semibold">
                  real-world projects.
                </span>
              </p>
            </div>

            {/* Card 3 */}
            <div className="group border border-blue-400/20 bg-gradient-to-br from-blue-400/[0.10] via-white/[0.03] to-[#12121C]/90 backdrop-blur-xl rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 hover:border-blue-300/40 hover:bg-blue-500/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="shrink-0 p-3 rounded-xl bg-blue-400/10 text-blue-300 group-hover:bg-blue-400/20 transition-colors">
                <SiDevelopmentcontainers size={22} />
              </div>

              <p className="font-sans text-sm sm:text-base text-left leading-7 text-gray-300">
                From designing clean, accessible interfaces to developing robust
                RESTful APIs and database systems, I focus on writing clean,
                scalable, and maintainable code. I also explore{" "}
                <span className="text-blue-300 font-semibold">
                  AI integration
                </span>{" "}
                to build smarter, more efficient digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
