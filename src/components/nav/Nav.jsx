// Component for navigation on the page
import React from "react";
import "./nav.css";
// Imporing icons from react-icons
import { BsFillHouseFill } from "react-icons/bs";
import { HiInformationCircle } from "react-icons/hi";
import { BiSolidBookAlt } from "react-icons/bi";
import { IoSchoolSharp } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
// importing Use state from react
import { useState } from "react";

const Nav = () => {
  // By default activeNav is set to #, which is the top of the page
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      {/* If the active nav is equel to in this case "#" than the home icon button should have the class active if that is not the case the button should not have a class*/}
      <a
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        href="#"
      >
        <BsFillHouseFill />
      </a>
      {/* Onclick of the about */}{" "}
      {/* If the active nav is equel to in this case "..." than the ... icon button should have the class active if that is not the case the button should not have a class*/}
      <a
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        href="#about"
      >
        <HiInformationCircle />
      </a>
      <a
        onClick={() => setActiveNav("#learning-outcomes")}
        className={activeNav === "#learning-outcomes" ? "active" : ""}
        href="#learning-outcomes"
      >
        <IoSchoolSharp />
      </a>
      <a
        onClick={() => setActiveNav("#work")}
        className={activeNav === "#work" ? "active" : ""}
        href="#work"
      >
        <BiSolidBookAlt />
      </a>
      <a
        onClick={() => setActiveNav("#feedback")}
        className={activeNav === "#feedback" ? "active" : ""}
        href="#feedback"
      >
        <VscFeedback />
      </a>
    </nav>
  );
};

export default Nav;
