import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ForgetNew from "../../Components/ForgetNew";
import Images from "../../Components/Images";

const Forget3 = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Images />
          </Col>
          <Col>
            <ForgetNew />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Forget3;
