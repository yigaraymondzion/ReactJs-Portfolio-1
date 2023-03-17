import React from "react";
import Resume from "../../assets/resume-yiga-raymond.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Say Hello
      </a>
    </div>
  );
};

export default CTA;
