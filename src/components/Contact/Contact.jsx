import React from "react";
import "./Contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_418egkj",
      "template_8bfa1ls",
      form.current,
      "emhUUVrLNyl2U88lR"
    );

    e.target.reset();
    setDone(true);
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <h5>Let's Connect</h5>

      <div className="container contact__container">
        <div className="contact__options">
          <h3 className="contact__title-1">Your Message means alot to me.</h3>
          <article className="contact__option">
            <i class="fa-regular fa-envelope contact__icon"></i>
            <h4>Email</h4>
            <h5>yigaraymondzion@gmail.com</h5>
            <div className="send__button">
              <a
                href="mailto:yigaraymondzion@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send a Message{" "}
              </a>
              <i className="fa-solid fa-arrow-right send__button-icon"></i>
            </div>
          </article>
          <article className="contact__option">
            <i class="fa-brands fa-whatsapp contact__icon"></i>
            <h4>WhatsApp</h4>
            <h5>+919916635872</h5>
            <div className="send__button">
              <a
                href="https://api.whatsapp.com/send?phone=+919916635872"
                target="_blank"
                rel="noopener noreferrer"
              >
                Say Hi{" "}
              </a>
              <i className="fa-solid fa-arrow-right send__button-icon"></i>
            </div>
          </article>
          <article className="contact__option">
            <i class="fa-brands fa-facebook-messenger contact__icon"></i>
            <h4>Messenger</h4>
            <h5>Raymond Zion</h5>
            <div className="send__button">
              <a
                href="https://m.me/yiga.raymond.33"
                target="_blank"
                rel="noopener noreferrer"
              >
                Say Hello{" "}
              </a>
              <i className="fa-solid fa-arrow-right send__button-icon"></i>
            </div>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <h3 className="contact__title">Which Project can I do for you?</h3>
          <div className="contact__form-div">
            <label htmlFor="" className="contact__form-tag">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="contact__form-input"
              placeholder="Kindly Write Your name Here"
            />
          </div>

          <div className="contact__form-div">
            <label htmlFor="" className="contact__form-tag">
              Job / Title
            </label>
            <input
              type="text"
              name="job"
              className="contact__form-input"
              placeholder="Kindly Write Your Job / Title Here"
            />
          </div>

          <div className="contact__form-div">
            <label htmlFor="" className="contact__form-tag">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="contact__form-input"
              placeholder="Kindly Write Your Email Here"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <label htmlFor="" className="contact__form-tag">
              Project
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Let me Know Your Project"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-flex">
            Send Message <i class="fa-regular fa-paper-plane"></i>
          </button>
          <span>{done && "Message Sent, Thank you for Contacting me."}</span>
        </form>
      </div>
    </section>
  );
};

export default Contact;
