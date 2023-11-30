// Component for the footer part of the page
import React from "react";
import "./footer.css";
// Importing icons from react-icons
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <a className="footer__logo" href="#">
        JH
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#learning-outcomes">Learning Outcomes</a>
        </li>
        <li>
          <a href="#main">Work</a>
        </li>
        <li>
          <a href="#feedback">Feedback</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <article className="footer__socials">
        <a href="https://www.linkedin.com/in/jasper-van-den-heuvel-00424a193/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Jasper20037">
          <BsGithub />
        </a>
        <a href="mailto:jasperheuvel13@gmail.com">
          <MdEmail />
        </a>
      </article>

      <article className="footer__copyright">
        {/* &copy creates the copyright logo */}
        <small>&copy; 2023 Jasper van den Heuvel. All rights reserved</small>
      </article>
    </footer>
  );
};

export default Footer;
