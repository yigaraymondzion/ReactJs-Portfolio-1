import React from "react";
import "./portfolio.css";
import { useState } from "react";
import {
  PortfolioItems,
  PortfolioItems2,
  PortfolioItems3,
} from "./PortfolioItems";

const Portfolio = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <h5>Check out my work</h5>

      <div className="container">
        {/*<!-- ========================HEADER TABS START===================================== -->*/}
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Developments
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            UI / UX Designs
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Others
          </button>
        </div>
        {/*<!-- ========================HEADER TABS END===================================== -->*/}

        {/*<!-- ========================TABS CONTENT ===================================== -->*/}

        <div className="content-tabs">
          {/*<!--Tab 1-->*/}
          <div
            className={
              toggleState === 1
                ? "portfolio__container active__portfolio__container"
                : "portfolio__container"
            }
          >
            {PortfolioItems.map((Item, index) => (
              <article key={index} className="portfolio__item">
                <div className="portfolio__item__image">
                  <img src={Item.image} alt={Item.title} />
                </div>
                <h3>{Item.title}</h3>
                <div className="portfolio__item__cta">
                  <a href={Item.github} className="btn">
                    {" "}
                    Github
                  </a>
                  <a
                    href={Item.LiveDemo}
                    className="btn btn-primary"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            ))}
          </div>
          {/*<!--Tab 1 End-->*/}

          {/*<!--Tab 2 Start-->*/}
          <div
            className={
              toggleState === 2
                ? "portfolio__container active__portfolio__container"
                : "portfolio__container"
            }
          >
            {PortfolioItems2.map((Item, index) => (
              <article key={index} className="portfolio__item">
                <div className="portfolio__item__image">
                  <img src={Item.image} alt="portfolio_image_1" />
                </div>
                <h3>{Item.title}</h3>
                <div className="portfolio__item__cta">
                  <a href={Item.github} className="btn">
                    {" "}
                    Github
                  </a>
                  <a
                    href={Item.LiveDemo}
                    className="btn btn-primary"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            ))}
          </div>
          {/*<!--Tab 2 End-->*/}

          {/*<!--Tab 3 Start-->*/}
          <div
            className={
              toggleState === 3
                ? "portfolio__container active__portfolio__container"
                : "portfolio__container"
            }
          >
            {PortfolioItems3.map((Item, index) => (
              <article key={index} className="portfolio__item">
                <div className="portfolio__item__image">
                  <img src={Item.image} alt="portfolio_image_1" />
                </div>
                <h3>{Item.title}</h3>
                <div className="portfolio__item__cta">
                  <a href={Item.github} className="btn">
                    {" "}
                    Github
                  </a>
                  <a
                    href={Item.LiveDemo}
                    className="btn btn-primary"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            ))}
          </div>
          {/*<!--Tab 3 End-->*/}
        </div>
        {/*<!-- ========================CONTENT TABS END===================================== -->*/}
      </div>
    </section>
  );
};

export default Portfolio;

/*<section className="portfolio">
      <h5>My Recent Work</h5>
      <h2> Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={portfolio_image_1} alt="portfolio_image_1" />
          </div>
          <h3>Church Website</h3>
          <a href="github.com/yigaraymondzion" className="btn">
            {" "}
            Github
          </a>
          <a
            href="github.com/yigaraymondzion"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={portfolio_image_1} alt="portfolio_image_1" />
          </div>
          <h3>Church Website</h3>
          <a href="github.com/yigaraymondzion" className="btn">
            {" "}
            Github
          </a>
          <a
            href="github.com/yigaraymondzion"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={portfolio_image_1} alt="portfolio_image_1" />
          </div>
          <h3>Church Website</h3>
          <a href="github.com/yigaraymondzion" className="btn">
            {" "}
            Github
          </a>
          <a
            href="github.com/yigaraymondzion"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={portfolio_image_1} alt="portfolio_image_1" />
          </div>
          <h3>Church Website</h3>
          <a href="github.com/yigaraymondzion" className="btn">
            {" "}
            Github
          </a>
          <a
            href="github.com/yigaraymondzion"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={portfolio_image_1} alt="portfolio_image_1" />
          </div>
          <h3>Church Website</h3>
          <a href="github.com/yigaraymondzion" className="btn">
            {" "}
            Github
          </a>
          <a
            href="github.com/yigaraymondzion"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={portfolio_image_1} alt="portfolio_image_1" />
          </div>
          <h3>Church Website</h3>
          <a href="github.com/yigaraymondzion" className="btn">
            {" "}
            Github
          </a>
          <a
            href="github.com/yigaraymondzion"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
      </div>
  </section>*/
