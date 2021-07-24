import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Images from "../../Components/Images";
import ForgetCode from "../../Components/ForgetCode";
import LoginPng from "../../Components/LoginPng";
const Forget2 = () => {
  return (
    <Row>
      <Col>
        <ForgetCode />
      </Col>
      <Col>
        <LoginPng />
      </Col>
    </Row>
  );
};

export default Forget2;
