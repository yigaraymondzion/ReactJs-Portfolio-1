import React from "react";
import "./header.css";
import { NavItems } from "./NavItems";
import { useState } from "react";
import Toggle from "../Toggle/Toggle";

/*--import CTA from "./CTA";--*/

const Header = () => {
  const [Open, setOpen] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          {" "}
          <h3>Raymond</h3>
        </a>
        <Toggle />
        <div className={Open ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__listItems">
            {NavItems.map((Item, index) => (
              <li key={index} className={Item.nav__ItemName}>
                <a href={Item.url} className={Item.nav__LinkName}>
                  <i className={Item.icon}></i>
                  {Item.title}
                </a>
              </li>
            ))}
          </ul>

          <i
            className="fas fa-times nav__close"
            onClick={() => setOpen(!Open)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => setOpen(!Open)}>
          <i className="fas fa-bars"></i>
        </div>
        {/*--<CTA />--*/}
      </nav>
    </header>
  );
};

export default Header;
