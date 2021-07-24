import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ForgetEmail from "../../Components/ForgetEmail";
import Images from "../../Components/Images";
import LoginPng from "../../Components/LoginPng";
import { IoChevronBack } from "react-icons/io5";

const Forget1 = () => {
  return (
    <Row style={{ display: "flex" }}>
      <Col>
        <a
          href="/login"
          className="mb-5 ml-5"
          style={{
            textDecoration: "none",
            float: "left",
            fontSize: 20,
            marginTop: 20,
          }}
        >
          <IoChevronBack />
          Back
        </a>
        <ForgetEmail />
      </Col>
      <Col>
        <LoginPng />
      </Col>
    </Row>
  );
};

export default Forget1;
