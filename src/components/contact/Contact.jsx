// Component for the contact part of the page
import React from "react";
import "./contact.css";
// Importng icons from react-icons
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <article className="container contact__container">
        <article className="contact__option">
          <MdEmail />
          <h4>Email</h4>
          <h5>Jasperheuvel13@gmail.com</h5>
          <a href="mailto:jasperheuvel13@gmail.com">Send an Email</a>
        </article>
      </article>
    </section>
  );
};

export default Contact;
