import React from "react";
import { Col, Row, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import firstPng from "../Images/firstPane.png";

function Join() {
  var colors = {
    Blue: "#3BD2E3",
    LightBlue: "#F1F9FC",
  };

  var firstPane = {
    textAlign: "left",
    marginLeft: "15%",
    marginTop: "18%",
  };

  var imageCss = {
    width: "100%",
  };

  var landingPageButton = {
    backgroundColor: colors.Blue,
    width: "35%",
    borderRadius: 50,
    borderColor: "white",
    fontWeight: "bold",
  };

  return (
    <div id="home" style={{ height: "100%" }}>
      <Row>
        <Col style={firstPane}>
          <h1 style={{ color: colors.Blue, fontSize: "400%" }}>
            Enriching the lives of <br /> pets and people
          </h1>
          <p style={{ fontSize: "150%" }}>
            From large to small we give quality care to all
          </p>
          <Button className="mr-5" style={landingPageButton}>
            Pet Owner
          </Button>
          or
          <Button className="ml-5" style={landingPageButton} href="/vetReg">
            Veterinary Clinic
          </Button>
        </Col>
        <Col style={{ marginRight: "10%", marginTop: "16%" }}>
          <Image src={firstPng} style={imageCss} />
        </Col>
      </Row>
    </div>
  );
}

export default Join;
