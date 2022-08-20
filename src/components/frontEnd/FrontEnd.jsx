import React from "react";
import { FrontEndContainer, Down } from "./FrontEnd.styled";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import vue from "../images/vue.jpeg";
import angular from "../images/angular.png";

const FrontEnd = () => {
  return (
    <FrontEndContainer>
      <h5>FrontEnd</h5>
      <Down>
        <div>
          <a href="https://html.com" target="_blank" rel="noreferrer">
            <img src={html} alt="html" />
          </a>
        </div>
        <div>
          <a
            href="https://www.w3schools.com/css "
            target="_blank"
            rel="noreferrer"
          >
            <img src={css} alt="css" />
          </a>
        </div>
        <div>
          <a href="https://javascript.info" target="_blank" rel="noreferrer">
            <img src={javascript} alt="javascript" />
          </a>
        </div>
      </Down>
    </FrontEndContainer>
  );
};

export default FrontEnd;
