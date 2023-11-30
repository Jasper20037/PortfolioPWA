// Component fot the experience part of the page
import React from "react";
import "./experience.css";
// Importing icons from react-icons
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>My Experience</h2>

      <article className="container experience__container">
        <article className="experience__frontend">
          <h3>Frontend Development</h3>
          <article className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <article>
                <h4>HTML5</h4>
                <small className="text-light">Intermediate</small>
              </article>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <article>
                <h4>CSS3</h4>
                <small className="text-light">Advanced</small>
              </article>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <article>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </article>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <article>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </article>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <article>
                <h4>Bootstrap</h4>
                <small className="text-light">Advanced</small>
              </article>
            </article>
          </article>
        </article>

        <article className="experience__backend">
          <h3>Backend Development</h3>
          <article className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <article>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </article>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <article>
                <h4>Laravel</h4>
                <small className="text-light">Advanced</small>
              </article>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <article>
                <h4>MySQL</h4>
                <small className="text-light">Advanced</small>
              </article>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <article>
                <h4>Python</h4>
                <small className="text-light">Advanced</small>
              </article>
            </article>
          </article>
        </article>
      </article>
    </section>
  );
};

export default Experience;
