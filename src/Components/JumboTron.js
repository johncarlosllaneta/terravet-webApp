import React from "react";
import { Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const JumboTron = () => {
  return (
    <>
      <Jumbotron fluid>
        <h1>Fluid jumbotron</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Jumbotron>
    </>
  );
};

export default JumboTron;
