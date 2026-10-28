import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [status, setStatus] = useState("");
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const links = [
    {
      id: 1,
      icon: <FaInstagram />,
      href: "https://www.instagram.com/deny.devv",
      name: "deny.devv",
      color: "text-pink-500",
    },
    {
      id: 2,
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/kazi-mohammad-kaif-57b11423b/",
      name: "Kazi Mohammad Kaif",
      color: "text-blue-500",
    },
    {
      id: 3,
      icon: <IoLogoGithub />,
      href: "https://github.com/denycoding",
      name: "denycoding",
      color: "text-gray-300",
    },
    {
      id: 4,
      icon: <IoLogoWhatsapp />,
      href: "https://wa.me/917984292907?text=Hi%20Kaif,%20I%20saw%20your%20Portfolio%20and%20would%20like%20to%20talk.",
      name: "Kazi Mohammad Kaif",
      color: "text-green-500",
    },
  ];

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.log("Email error", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section id="contact" className=" max-w-[1100px] mx-auto  pt-20">
        <div className="text-center mb-8">
          <p className="text-blue -400 uppercase tracking-[0.3em] text-sm font-semibold mb-3 text-blue-500">
            Get In Touch
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold  text-white">
            Contact <span className="text-blue-400">Me</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto leading-7">
            Have a project in mind or a career opportunity? Feel free to reach
            out. I'd love to connect and discuss how we can work together.
          </p>

          <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto mt-3" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-[#12121C] border border-gray-400/20 rounded-2xl p-5 sm:p-8 text-left mt-5">
            {/* Left Side */}
            <div className="flex flex-col  mt-5 border-r border-gray-400/20">
              <h1 className="font-extrabold text-3xl sm:text-4xl text-white mb-5">
                Let's Work Together
              </h1>

              <p className="text-gray-400 leading-7">
                Interested in collaborating or discussing an opportunity? Drop a
                message below or contact me directly. I'll respond as soon as
                possible.
              </p>

              {/* Social Links */}
              <div className="flex flex-col gap-4 mt-6 text-white">
                {links.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${item.name}`}
                      className={`  p-3 rounded-xl ${item.color} hover:bg-blue-500/10 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 text-xl flex  gap-3`}
                    >
                      {item.icon}
                      <span className="text-gray-300 text-sm">{item.name}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="text-white p-2 sm:p-5">
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="flex flex-col gap-5"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  aria-label="Your name"
                  autoComplete="name"
                  required
                  className="bg-blue-400/10 border border-gray-400/20 rounded-xl p-3 w-full outline-none focus:border-blue-500 transition-colors"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  aria-label="Your email"
                  autoComplete="email"
                  required
                  className="bg-blue-400/10 border border-gray-400/20 rounded-xl p-3 w-full outline-none focus:border-blue-500 transition-colors"
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="What's on your mind? Share your ideas or questions..."
                  aria-label="Your message"
                  required
                  className="bg-blue-400/10 border border-gray-400/20 rounded-xl p-3 w-full outline-none resize-none focus:border-blue-500 transition-colors"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-500 hover:bg-blue-600 disabled:opacity-60
    text-white font-semibold rounded-xl p-3 flex items-center
    justify-center gap-2 transition-all duration-300"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
                {status === "success" && (
                  <p role="status" className="text-green-400 text-center">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                )}

                {status === "error" && (
                  <p role="alert" className="text-red-400 text-center">
                    Failed to send message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>{" "}
    </>
  );
}
export default Contact;
