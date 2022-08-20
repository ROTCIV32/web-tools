import React from "react";
import { UiUxContainer, Down } from "./UiUx.styled";
import figma from "../images/figma.png";
import adobexd from "../images/adobeXD.png";
import vscode from "../images/vsCode.jpeg";
import git from "../images/github.png";

const FrontEnd = () => {
  return (
    <UiUxContainer>
      <h5>BackEnd</h5>
      <Down>
        <div>
          <a href="https://www.figma.com" target="_blank" rel="noreferrer">
            <img src={figma} alt="html" />
          </a>
        </div>
        <div>
          <a href="https://helpx.adobe.com" target="_blank" rel="noreferrer">
            <img src={adobexd} alt="css" />
          </a>
        </div>
        <div>
          <a
            href="https://code.visualstudio.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={vscode} alt="javascript" />
          </a>
        </div>
        <div>
          <a href="https://docs.github.com">
            <img src={git} alt="javascript" />
          </a>
        </div>
      </Down>
    </UiUxContainer>
  );
};

export default FrontEnd;
