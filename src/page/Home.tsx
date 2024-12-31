import React from "react";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
