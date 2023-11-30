// Component for the about part of the page
import React from "react";
import "./about.css";
// Import image of myself
import me from "../../assets/about-me.jpg";
// Importing icons from react-icons
import { FaAward } from "react-icons/fa";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About me</h2>

      <article className="container about__container">
        <article className="about__me">
          <article className="about__me-img">
            <img src={me} alt="Jasper van den Heuvel" />
          </article>
        </article>

        <article className="about__content">
          <article className="about__cards">
            <article className="about__card">
              <FaAward className="about__card-icon" />
              <h5>Experience</h5>
              <small>5+ Years of Experience</small>
            </article>

            <article className="about__card">
              <BsFillPersonCheckFill className="about__card-icon" />
              <h5>Clients</h5>
              <small>10+ Satisfied Clients</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__card-icon" />
              <h5>Projects</h5>
              <small>20+ Succesfull Projects</small>
            </article>
          </article>

          <p>
            Hi, my name is Jasper van den Heuvel and i am a 20 year old student
            at <i>Fontys University of Applied Science</i>, studying Information
            & Communication Technology. With my specialization in digital media
            design i am able to create beautiful and functional websites and
            applications. I am currently in my second year of my bachelor.{" "}
            <br></br>
            <br></br>
            Besides my study i am also working part time as PRM(Person with
            Reduced Mobility) Floor Cöordinator at Viggo(Eindhoven Airport). as
            a PRM Floor Cöordinator i am responsible for the daily operations of
            the PRM department. Such as the smooth running of PRM agents and the
            communication with the passengers.
          </p>

          <a className="button primary-button" href="#contact">
            Get in contact
          </a>
        </article>
      </article>
    </section>
  );
};

export default About;
