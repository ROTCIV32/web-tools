import React from "react";
import { DataBaseContainer, Down } from "./DataBase.styled";
import mysql from "../images/mySQL.jpeg";
import mongodb from "../images/mongoDB.png";
import oracle from "../images/oracle.png";

const FrontEnd = () => {
  return (
    <DataBaseContainer>
      <h5>Database</h5>
      <Down>
        <div>
          <a href="https://dev.mysql.com" target="_blank" rel="noreferrer">
            <img src={mysql} alt="html" />
          </a>
        </div>
        <div>
          <a href="https://www.mongodb.com" target="_blank" rel="noreferrer">
            <img src={mongodb} alt="css" />
          </a>
        </div>
        <div>
          <a href="https://docs.oracle.com" target="_blank" rel="noreferrer">
            <img src={oracle} alt="javascript" />
          </a>
        </div>
      </Down>
    </DataBaseContainer>
  );
};

export default FrontEnd;
