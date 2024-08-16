import React from "react";
import Header from "./header";
import About from "./about";
import Services from "./services";
import Projects from "./projects";
import Testimonials from "./testimonials";
import Footer from "./footer";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Footer />
    </>
  );
}
