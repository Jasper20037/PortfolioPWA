// Component for services part of the page
import React from "react";
import "./services.css";
// importing icons from react-icons
import { AiOutlineCheck } from "react-icons/ai";

// Variable for Learning outcome cards
const LO1 = [
  {
    id: 1,
    description: "Product Website",
    course: "FED",
    url: "https://jasper20037.github.io/ProductWebsite/",
  },
  {
    id: 2,
    description: "Pokemon Battle Game",
    course: "FED",
    url: "https://jasper20037.github.io/PokemonGame/",
  },
  {
    id: 3,
    description: "Product poster",
    course: "MP",
    url: "-",
  },
  {
    id: 4,
    description: "3D Blade runner Architecture",
    course: "MP",
    url: "-",
  },
  {
    id: 5,
    description: "Passionate idea - Library Reserach",
    course: "UCD",
    url: "",
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

const Services = () => {
  return (
    <section id="services">
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
            {LO1.map(({ id, description, course, url }) => {
              return (
                <li>
                  <AiOutlineCheck className="service__list-icon" />
                  <a href={url}>{description}</a>
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

export default Services;
