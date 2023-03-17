import React from "react";
import Resume from "../../assets/resume-yiga-raymond.pdf";

const Data = () => {
  return (
    <div className="home__data">
      <div className="greeting">
        <p>Hello! It's my Pleasure to Host You Here.</p>
      </div>
      <span className="Intro-1">
        <p>Am </p>
        <h1 className="home__title"> Yiga Raymond</h1>
      </span>

      <span className="Intro-1">
        <p>A </p>
        <h3 className="home__subtitle"> Software Engineer,</h3>
      </span>

      <p className="home__description">Who develops & cares about designing.</p>
      <div className="cta">
        <a href={Resume} download className="btn">
          Download Resume
        </a>
        <a href="#contact" className="btn btn-flex">
          Let's Connect
          <i class="fa-regular fa-paper-plane"></i>
        </a>
      </div>
    </div>
  );
};

export default Data;
