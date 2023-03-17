import React from "react";
import "./Skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <h5>Skills Details</h5>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-End Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>HTML, CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>JAVASCRIPT</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>BOOTSTRAP</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>REACTJS</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
        <div className="experience__frontend">
          <h3>Back-End Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>JAVA</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>PYTHON</h4>
              <small className="text-light">Basic</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>SQL</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>MYSQL</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
        <div className="experience__frontend">
          <h3>Software</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Figma</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Adobe XD</h4>
              <small className="text-light">Basic</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Canva</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
