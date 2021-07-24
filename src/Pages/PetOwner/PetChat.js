import React from "react";
import NavBarHome from "../../Components/navBarHome/NavBarHome";
import background from "../../Images/bg.png";
import { Container, Row, Button, Col, Form, Image, Card } from "react-bootstrap";
import Thread from "./Thread";
import { FaPhoneAlt } from "react-icons/fa";
import { MdSettings, MdSend } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import Convo from "./Convo";
import { hostUrl } from "../../Components/Host";

const PetChat = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: window.screen.height,
        padding: 10,
        marginTop: 110,
      }}
    >
      <NavBarHome />
      <Row style={{ padding: 10, justifyContent: "space-between" }}>
        <h3 style={{ marginLeft: 50, fontWeight: "bold" }}>Talk to Vet</h3>
        <Button style={{
          backgroundColor: "#3BD2E3",
          paddingLeft: 30,
          paddingRight: 30,
          borderRadius: 30,
          borderColor: "#FFFFFF",
          marginRight: 50
        }}>Back</Button>
      </Row>
      <Row
        style={{
          padding: 20,
          textIndent: 20,
          backgroundColor: "transparent",
          height: 530,
          margin: 20,
        }}
      >
        <Row style={{ display: "flex" }}>
          <Col
            style={{
              height: 700,
              borderWidth: 10,
              borderColor: "black",
              borderRightWidth: 2,
              borderRightStyle: "solid",
            }}
          >



            <Container style={{ height: 400, padding: 5 }}>
              <Thread />
            </Container>


          </Col>
          <Col style={{ height: 700 }}>
            <Container>
              <Row>

                <Image
                  style={{ height: 60, width: 60, display: "inline" }}
                  src={`${hostUrl}/profile/vet/profile_vet_1621716387728.jpg`}
                  roundedCircle
                />
                <div style={{ display: "inline", textAlign: "left" }}>
                  <p
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      margin: 0,
                      color: "#707070",
                    }}
                  >
                    Tri-City Vet Clinic
                  </p>
                  <p style={{ fontSize: 10, margin: 0, color: "#707070" }}>
                    Veterinary Clinic
                  </p>
                  <p style={{ fontSize: 10, color: "#707070" }}>
                    1987 int. 13 Blk.5 Mariano St. Tondo, Manila
                  </p>
                </div>

                <div style={{ marginLeft: 700, marginTop: 10 }}>
                  <FaPhoneAlt
                    style={{
                      display: "inline",
                      fontSize: 33,
                      color: "#707070",
                      marginRight: 40,
                    }}
                  />
                  <IoVideocam
                    style={{
                      display: "inline",
                      fontSize: 40,
                      color: "#707070",
                    }}
                  />
                </div>
              </Row>
              <hr />
            </Container>
            <Container style={{ height: 575 }}>
              {/* <Convo /> */}
            </Container>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Form>
                <Form.Control
                  placeholder="Create message"
                  style={{ width: 1170 }}
                />
              </Form>
              <MdSend style={{ fontSize: 35, marginLeft: 5 }} />
            </div>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default PetChat;
