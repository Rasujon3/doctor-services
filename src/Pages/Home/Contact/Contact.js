import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      id="contact"
      className="container"
    >
      <h2 className="text-center text-primary my-2">Contact With Me</h2>
      <div className="contact">
        <div className="contact-left">
          <img
            src="https://rasujon3.github.io/assignment-2/images/contact.png"
            alt=""
          />
        </div>
        <div className="contact-right">
          <form action="">
            <input type="text" placeholder="Your Name" className="text-field" />
            <input
              type="email"
              placeholder="Your Email"
              className="text-field"
            />
            <textarea
              placeholder="Your Message"
              className="text-field"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
