import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    <Footer/>
    </>
  );
}

export default App;
