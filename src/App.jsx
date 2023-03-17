import React from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import { themeContext } from "./Context";
import { useContext } from "react";

const App = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      {/*style=
      {{ background: darkMode ? "var(--color-bg)" : "", color: darkMode ? "white" : "" }}*/}
      <ParticlesBackground />
      <Header />
      <main>
        <Home />
        <Portfolio />
        <Services />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
