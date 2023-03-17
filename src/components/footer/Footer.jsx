import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="home" className="footer__logo">
        Raymond
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="mailto:yigaraymondzion@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-regular fa-envelope"></i>
        </a>
        <a
          href="https://twitter.com/raymondsrich"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a
          href="https://m.me/yiga.raymond.33"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-facebook-messenger"></i>
        </a>
        <a
          href="https://www.instagram.com/raymondzion/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+919916635872"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-whatsapp"></i>
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Raymond All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
