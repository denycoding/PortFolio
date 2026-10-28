import bit from "./assets/Bit.jpg";
import acciojob from "./assets/Acciojob.jpg";

function Experience() {
  return (
    <>
      <section
        id="experience"
        className=" bg-black max-w-[1100px] mx-auto  pt-20 "
      >
        <div className="text-center mb-8">
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            My Professional Journey
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold  text-white">
            Work <span className="text-blue-500">Experience</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto leading-7">
            My professional experience, technical contributions, and journey as
            a developer.
          </p>

          <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto mt-3" />
        </div>

        <div className="text-white flex justify-between">
          <div className="flex gap-5 ">
            <div>
              <img src={bit} alt="" className="h-20 rounded-2xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold ">MERN Stack Developer</h1>
              <h2 className="font-semibold">BIT</h2>
              <p>Training / Internship Experience</p>
              <div className="flex my-2   gap-5">
                <span className="bg-gray-900 border border-white/10 text-gray-300 rounded-lg px-3 py-1">
                  MERN
                </span>
                <span className="bg-gray-900 border border-white/10 text-gray-300 rounded-lg px-3 py-1">
                  Express
                </span>
                <span className="bg-gray-900 border border-white/10 text-gray-300 rounded-lg px-3 py-1">
                  Node
                </span>
                <span className="bg-gray-900 border border-white/10 text-gray-300 rounded-lg px-3 py-1">
                  MongoDB
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base leading-7 text-gray-300 font-semibold">
                <li>
                  Practiced{" "}
                  <span className="text-blue-500 font-bold">full-stack</span>{" "}
                  web development using the MERN stack.
                </li>
                <li>
                  Implemented authentication, authorization, API integration,
                  and application deployment.
                </li>
                <li>
                  Explored{" "}
                  <span className="text-blue-500 font-bold">
                    AI integration
                  </span>{" "}
                  to build smarter and more efficient web applications.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex font-medium gap-2">
            <span>Jan 2026</span>
            <span> - </span>
            <span>July 2026</span>
          </div>
        </div>

        <div className="text-white flex justify-between mt-16">
          <div className="flex gap-5 ">
            <div>
              <img src={acciojob} alt="" className="h-20 rounded-2xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold ">Software Developer</h1>
              <h2 className="font-semibold">Acciojob</h2>
              <p>Internship Experience</p>
              <div className="flex my-2 gap-5">
                <span className="bg-gray-900 border border-white/10 text-gray-300 rounded-lg px-3 py-1">
                  Html
                </span>
                <span className="bg-gray-900 border border-white/10 text-gray-300 rounded-lg px-3 py-1">
                  CSS
                </span>
                <span className="bg-gray-900 border border-white/10 text-gray-300 rounded-lg px-3 py-1">
                  JavaScript
                </span>  <span className="bg-gray-900 border border-white/10 text-gray-300 rounded-lg px-3 py-1">
                  Bootstrap
                </span>
                <span className="bg-gray-900 border border-white/10 text-gray-300 rounded-lg px-3 py-1">
                  Tailwind
                </span>{" "}
                <span className="bg-gray-900 border border-white/10 text-gray-300 rounded-lg px-3 py-1">
                  React
                </span>
              </div>

              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base leading-7 text-gray-300 ">
                <li>
                  Developed responsive user interfaces using React.js,
                  JavaScript, HTML, and CSS.
                </li>
                <li>
                  Built interactive and reusable UI components using React.js
                  and JavaScript to create responsive user interfaces.
                </li>
                <li>
                  Used Git and GitHub for version control and collaborated on
                  development tasks.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex font-medium gap-2">
            <span>Oct 2024</span>
            <span> - </span>
            <span>April 2025</span>
          </div>
        </div>
      </section>{" "}
    </>
  );
}
export default Experience;
