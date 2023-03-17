import React from "react";

const Socials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://github.com/yigaraymondzion"
        className="home_social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-github"></i>
      </a>
      <a
        href="mailto:yigaraymondzion@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-regular fa-envelope"></i>
      </a>
      <a
        href="https://www.instagram.com/raymondzion/"
        className="home_social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a
        href="https://m.me/yiga.raymond.33"
        className="home_social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-facebook-messenger"></i>
      </a>
    </div>
  );
};

export default Socials;
