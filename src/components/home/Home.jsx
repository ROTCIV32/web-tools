import React from "react";
import AboutMe from "../aboutMe/AboutMe";
import BackEnd from "../backEnd/BackEnd";
import Cloud from "../cloud/Cloud";
import DataBase from "../dataBase/DataBase";
import FrontEnd from "../frontEnd/FrontEnd";
import UiUx from "../uIuX/UiUx";
import { HomeContainer, Marg, Left, Right } from "./Home.styled";

const Home = () => {
  return (
    <HomeContainer>
      <Left>
        <AboutMe />
      </Left>
      <Marg>
        <h3> Web Dev Tools </h3>
        <h6> A click into their documentations </h6>
        <Right>
          <FrontEnd />
          <BackEnd />
          <DataBase />
          <Cloud />
          <UiUx />
        </Right>
      </Marg>
    </HomeContainer>
  );
};

export default Home;
