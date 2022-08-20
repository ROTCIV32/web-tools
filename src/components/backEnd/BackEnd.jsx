import React from "react";
import { BackEndContainer, Down } from "./Backend.styled";
import python from "../images/python.png";
import javascript from "../images/javascript.png";
import java from "../images/java.jpeg";
import rub from "../images/ruby.png";

const FrontEnd = () => {
  return (
    <BackEndContainer>
      <h5>BackEnd</h5>
      <Down>
        <div>
          <a href="https://docs.python.org" target="_blank" rel="noreferrer">
            <img src={python} alt="html" />
          </a>
        </div>
        <div>
          <a href="https://javascript.info" target="_blank" rel="noreferrer">
            <img src={javascript} alt="css" />
          </a>
        </div>
        <div>
          <a href="https://dev.java" target="_blank" rel="noreferrer">
            <img src={java} alt="java" />
          </a>
        </div>
        <div>
          <a href="https://www.ruby-lang.org" target="_blank" rel="noreferrer">
            <img src={rub} alt="rubby" />
          </a>
        </div>
      </Down>
    </BackEndContainer>
  );
};

export default FrontEnd;
