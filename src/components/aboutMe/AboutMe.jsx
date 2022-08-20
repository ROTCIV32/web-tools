import React from "react";
import profile from "../images/profile.jpg";
import phone from "../images/phone.jpeg";
import gmail from "../images/gmail.png";
import linkdin from "../images/linkdin.png";
import github from "../images/github.png";
import facebook from "../images/facebook.png";

import {
  AboutMeContainer,
  Photo,
  Profile,
  Contact,
  Bio,
} from "./AboutMe.styled";

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <Photo>
        <Profile>
          <img src={profile} alt="profile" />
          <h3>
            <b>Victor Eze </b>
          </h3>
          <span style={{ padding: 0 }}>
            {" "}
            <i> FrontEnd Developer </i>{" "}
          </span>
        </Profile>
        <Contact>
          <div>
            <a
              href="https://www.facebook.com/VictorKings_MM"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="facebook" />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkdin.com/in/eze-victor-690017189"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkdin} alt="linkdin" style={{ fontSize: "4rem" }} />
            </a>
          </div>
          <div>
            <a
              href="http://Rotciv32.github.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github" />
            </a>
          </div>
          <div>
            <a
              href="mailto: kingvic2553@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gmail} alt="gmail" />
            </a>
          </div>
          <div>
            <a href="tel: +2348167542553" target="_blank" rel="noreferrer">
              <img src={phone} alt="phone" />
            </a>
          </div>
        </Contact>
        <Bio>
          <p>
            {" "}
            <span>
              A pationatly self-taught developer with about a year experience in
              FrontEnd Development.
            </span>{" "}
            <span>
              Some of the tools I use includes: HTML, CSS, JavaScript, Reactjs,
              Bootstrap, Styled-components, GiyHub, etc.{" "}
            </span>{" "}
            <span>
              {" "}
              I have handled projects which inludes: Contact Management App,
              Admin Design app, Portfolio Websites and so many more still in my
              design and development pipeline.
            </span>
          </p>
        </Bio>
      </Photo>
    </AboutMeContainer>
  );
};

export default AboutMe;
