import React from "react";
import "./about.css";
import aboutImage from "../../assets/img-transparent.png";
import Vector1 from "../../assets/Vector1.png";
import Vector2 from "../../assets/Vector2.png";
import thumbup from "../../assets/thumbup.png";
import Crown from "../../assets/crown.png";
import glassesimoji from "../../assets/glassesimoji.png";
import { motion } from "framer-motion";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const About = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <>
      <section id="about" className="about">
        <h2>About Me</h2>
        <h5>More</h5>

        <div className="container about__container">
          <div className="about__image">
            <img src={aboutImage} alt="AboutImage" />
          </div>

          <div className="about__content">
            <h2>Hello!</h2>
            <p>
              I am Yiga Raymond, a software engineer capable of developing,
              designing and maintaining software. I am an enthusiastic team
              player willing to take on responsibilities to meet team goals and
              contribute to company success. I am also a dedicated and
              dependable candidate with a positive attitude ready to achieve
              demanding development objectives of any organization/company.{" "}
            </p>
            <div className="about__contact">
              <div>
                <p>
                  <span>Name: </span> Yiga Raymond
                </p>
                <p>
                  <span>Phone: </span> +256-702949161
                </p>
              </div>
              <div>
                <p>
                  <span>Email: </span>
                  <a href="yigaraymondzion@gmail.com">Mail</a>
                </p>
                <p>
                  {" "}
                  <span>LinkedIn: </span>{" "}
                  <a
                    href="www.linkedin.com/in/raymondyiga"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LikedIn.com/in/raymondyiga
                  </a>
                </p>
              </div>
            </div>
            <div className="cta">
              <a href="#contact" className="btn">
                Contact
              </a>
              <div>
                <a href="#contact" className="btn btn-flex">
                  Say Hello
                  <i class="fa-regular fa-paper-plane"></i>
                </a>
                It means the world to me.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="qualification" id="qualification">
        <h2>Qualification</h2>
        <h5>My Journey</h5>

        <div className="qualification__container container">
          <div className="education__tab">
            <h3>Education</h3>
            <div class="line-1"></div>

            <div className="education__data-y">
              <div>
                <div className="education__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2022
                </div>
                <p className="education__title">
                  Bachelor of Computer Applications
                </p>
                <p className="education__subtitle">
                  Bangalore University - India
                </p>
              </div>
            </div>
          </div>

          <div className="experience__tab">
            <h3>Experience</h3>
            <div class="line-1"></div>

            <div className="education__data">
              <div className="education__data-m">
                <div className="education__calender-1">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
                <div>
                  <p className="education__title"> </p>
                </div>
              </div>
              <div className="education__data-m">
                <div className="education__calender">
                  <h4>Role</h4>
                </div>
                <div>
                  <p className="education__title">Junior Developer Intern</p>
                </div>
              </div>
              <div className="education__data-m">
                <div className="education__calender">
                  <h4>Company</h4>
                </div>
                <div>
                  <p className="education__title">
                    Business Web Solutions - India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

/*<div className="qualification__tabs">
            <div className="qualification__button button--flex">
              <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
              Education
            </div>

            <div className="qualification__button button--flex">
              <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
              Experience
            </div>
          </div>

          <div className="qualification__sections">
            <div className="qualification__content">
              <div className="qualification__data">
                <div>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>2019-2022
                  </div>
                  <h3 className="qualification__title">
                    Bachelor of Computer Applications
                  </h3>
                  <span className="qualification__subtitle">
                    Bangalore University
                  </span>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">BCA</h3>
                  <span className="qualification__subtitle">
                    Bangalore University
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>2021 - Present
                  </div>
                </div>
              </div>
            </div>
          </div>
  </div>*/
