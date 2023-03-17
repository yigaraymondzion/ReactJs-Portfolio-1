import React from "react";
import "./home.css";
import Socials from "./Socials";
import Data from "./Data";

const Home = () => {
  return (
    <>
      <div className="first-h1">
        <h1>Hello!</h1>
        <p>It's my Pleasure to Host You Here.</p>
      </div>

      <section className="home" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Socials />

            <Data />
            <div className="home__img"></div>
            <a href="#contact" className="scroll__down">
              <i class="fa-solid fa-circle-arrow-down"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
