import bit from "./assets/Bit.jpg";
import acciojob from "./assets/Acciojob.jpg";

const experiences = [
  {
    id: 1,
    image: bit,
    imageAlt: "BIT logo",
    role: "MERN Stack Developer",
    company: "BIT",
    type: "Training / Internship Experience",
    startDate: "Jan 2026",
    endDate: "July 2026",
    skills: ["MERN", "JWT", "RESTful API", "AI Integration", "DSA"],
    points: [
      <>
        Practiced{" "}
        <span className="font-bold text-blue-500">full-stack</span> web
        development using the MERN stack.
      </>,
      <>
        Implemented authentication, authorization, API integration, and
        application deployment.
      </>,
      <>
        Explored{" "}
        <span className="font-bold text-blue-500">AI integration</span> to
        build smarter and more efficient web applications.
      </>,
    ],
  },
  {
    id: 2,
    image: acciojob,
    imageAlt: "AccioJob logo",
    role: "Software Developer",
    company: "Acciojob",
    type: "Internship Experience",
    startDate: "Oct 2024",
    endDate: "April 2025",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind", "React"],
    points: [
      <>
        Developed responsive user interfaces using React.js, JavaScript, HTML,
        and CSS, focusing on{" "}
        <span className="font-bold text-blue-500">frontend development</span>.
      </>,
      <>
        Built interactive and reusable UI components using React.js and
        JavaScript to create responsive user interfaces.
      </>,
      <>
        Used Git and GitHub for version control and collaborated on development
        tasks.
      </>,
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-[1100px] scroll-mt-24 bg-black px-4 pb-16 pt-20 text-white sm:px-6 sm:pt-24 lg:px-8"
    >
      {/* Section Heading */}
      <div className="mb-10 text-center sm:mb-14">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 sm:text-sm sm:tracking-[0.3em]">
          My Professional Journey
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Work <span className="text-blue-500">Experience</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
          My professional experience, technical contributions, and journey as
          a developer.
        </p>

        <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-blue-500" />
      </div>

      {/* Experience List */}
      <div className="space-y-8 sm:space-y-10">
        {experiences.map((experience) => (
          <article
            key={experience.id}
            className="rounded-2xl border border-gray-800 bg-gray-950/40 p-4 transition-colors duration-300 hover:border-blue-500/40 sm:p-6 md:p-7"
          >
            {/* Company, Role and Dates */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex min-w-0 items-start gap-3 sm:gap-5">
                <img
                  src={experience.image}
                  alt={experience.imageAlt}
                  className="h-14 w-14 shrink-0 rounded-xl border border-white/10 bg-white object-contain p-1 sm:h-20 sm:w-20 sm:rounded-2xl"
                />

                <div className="min-w-0">
                  <h3 className="text-lg font-bold leading-snug sm:text-2xl">
                    {experience.role}
                  </h3>

                  <h4 className="mt-1 font-semibold text-gray-200">
                    {experience.company}
                  </h4>

                  <p className="mt-1 text-sm text-gray-400 sm:text-base">
                    {experience.type}
                  </p>
                </div>
              </div>

              <p className="shrink-0 pl-[68px] text-sm font-medium text-gray-400 sm:pl-0 sm:text-right">
                {experience.startDate} – {experience.endDate}
              </p>
            </div>

            {/* Skills */}
            <div className="my-5 flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/10 bg-gray-900 px-3 py-1.5 text-xs text-gray-300 sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Responsibilities */}
            <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-gray-300 sm:text-base">
              {experience.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;