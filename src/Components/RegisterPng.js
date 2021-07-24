import React from "react";
import { Image, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import loginPng from "../Images/register.jpg";


const RegisterPng = () => {

  var screenh = window.screen.height - 119;
  return (
    <>

      <Container>

        <Image
          src={loginPng}
          alt="dog"
          className="card-img"
          style={{ width: "100%", backgroundPosition: 'center', height: screenh }}
        />

      </Container>

    </>
  );
};

export default RegisterPng;
