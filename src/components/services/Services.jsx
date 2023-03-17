import React from "react";
import "./services.css";
/*import { useState } from "react";*/

const Services = () => {
  /*const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
*/
  return (
    <section className="services section" id="services">
      <h2>Services</h2>
      <h5>What I offer</h5>

      <div className="container services__container">
        <div className="services__content">
          <div>
            <i className="fa-solid fa-code services__icon"></i>
            <h3 className="services__title">
              Software Development & Maintenance
            </h3>
          </div>

          {/*<span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="fa-solid fa-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h4 className="services__modal-title">Development</h4>
              <p className="services__modal-description">
                Services with more than 1 year of Experience
              </p>
              <ul className="services__modal-service grid">
                <li className="services__modal-services">
                  <p className="services__modal__info">
                    I develop User Interfaces.
                  </p>
                </li>
                <li className="services__modal-services">
                  <p className="services__modal__info">And Web Applications</p>
                </li>
              </ul>
            </div>
          </div>*/}
        </div>

        <div className="services__content">
          <div>
            <i className="fa-solid fa-display services__icon"></i>
            <h3 className="services__title">Software & Graphic Designing</h3>
          </div>

          {/*<span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="fa-solid fa-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Design</h3>
              <p className="services__modal-description">
                It's always just right to make a prototype of what you are
                developing, that way, you can not mess around. So...
              </p>
              <ul className="services__modal-service grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal__info">
                    I also do UI/UX prototypes.
                  </p>
                </li>
              </ul>
            </div>
          </div>*/}
        </div>

        <div className="services__content">
          <div>
            <i className="fa-solid fa-mobile-screen services__icon"></i>
            <h3 className="services__title">UI/UX Prototyping and Designing</h3>
          </div>

          {/*<span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="fa-solid fa-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Development</h3>
              <p className="services__modal-description">
                Services with more than 1 year
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal__info">
                    I do develope the Interfaces.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal__info">
                    I do develope the Interfaces.
                  </p>
                </li>
              </ul>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default Services;
