import React from "react";
import { CloudContainer, Down } from "./Cloud.styled";
import aws from "../images/aws.png";
import azure from "../images/azure.jpeg";
import cloudflare from "../images/cloudFlare.png";
import digitalocean from "../images/digitalOcean.png";

const FrontEnd = () => {
  return (
    <CloudContainer>
      <h5>C-Storage</h5>
      <Down>
        <div>
          <a
            href="https://docs.aws.amazon.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={aws} alt="html" />
          </a>
        </div>
        <div>
          <a href="https://docs.microsoft.com" target="_blank" rel="noreferrer">
            <img src={azure} alt="css" />
          </a>
        </div>
        <div>
          <a
            href="https://developers.cloudflare.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={cloudflare} alt="javascript" />
          </a>
        </div>
        <div>
          <a href=" https://javascript.info" target="_blank" rel="noreferrer">
            <img src={digitalocean} alt="javascript" />
          </a>
        </div>
      </Down>
    </CloudContainer>
  );
};

export default FrontEnd;
