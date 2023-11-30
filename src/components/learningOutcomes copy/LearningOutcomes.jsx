// Component for services part of the page
import React from "react";
import "./learning-outcomes.css";
// importing icons from react-icons
import { AiOutlineCheck } from "react-icons/ai";

// Variable for Learning outcome cards
const LO1 = [
  {
    id: 1,
    description: "Personal Portfolio",
    course: "FED",
    bookmark: "#PersonalPortfolio",
  },
  {
    id: 2,
    description: "Product Website",
    course: "FED",
    bookmark: "#ProductWebsite",
  },
  {
    id: 3,
    description: "Pokemon Battle Game",
    course: "FED",
    bookmark: "#PokemonGame",
  },
  {
    id: 4,
    description: "Product poster",
    course: "MP",
    bookmark: "#ProductPoster",
  },
  {
    id: 5,
    description: "3D Blade runner Architecture",
    course: "MP",
    bookmark: "#BladeRunner3D",
  },
  {
    id: 6,
    description: "Passionate idea - Library Reserach",
    course: "UCD",
    bookmark: "#PassionateIdea",
  },
];

const LO2 = [
  {
    id: 1,
    description: "Product Website - Code snippet",
    course: "FED",
    url: "https://jasper20037.github.io/ProductWebsite/",
  },
  {
    id: 2,
    description: "Pokemon Battle Game - Code snippet",
    course: "FED",
    url: "https://jasper20037.github.io/PokemonGame/",
  },
  {
    id: 3,
    description: "React portfolio - Code snippet",
    course: "MP",
    url: "-",
  },
];

const LO = () => {
  return (
    <section id="learning-outcomes">
      <h5>What Learning outcomes i did</h5>
      <h2>Learning Outcomes</h2>
      <article className="container services__container">
        {/* UI/UX design */}
        <article className="service">
          <article className="service__head">
            <h3>Learning Outcome 1</h3>
          </article>
          <ul className="service__list">
            {/* Mapping the data from Learning outcome 1 to display on the page */}
            {LO1.map(({ id, description, course, bookmark }) => {
              return (
                <li>
                  <AiOutlineCheck className="service__list-icon" />
                  <a href={bookmark}>{description}</a>
                </li>
              );
            })}
          </ul>
        </article>

        {/* Web development */}
        <article className="service">
          <article className="service__head">
            <h3>Learning Outcome 2</h3>
          </article>
          <ul className="service__list">
            {/* Mapping the data from Learning outcome 2 to display on the page */}
            {LO2.map(({ id, description, course, url }) => {
              return (
                <li>
                  <AiOutlineCheck className="service__list-icon" />
                  <a href={url}>{description}</a>
                </li>
              );
            })}
          </ul>
        </article>

        {/* Content creation */}
        <article className="service">
          <article className="service__head">
            <h3>Learning Outcome 3</h3>
          </article>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        {/* Content creation */}
        <article className="service">
          <article className="service__head">
            <h3>Learning Outcome 4</h3>
          </article>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
      </article>
    </section>
  );
};

export default LO;
