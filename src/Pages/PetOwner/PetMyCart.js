import React, { useState, useEffect } from "react";
import { Row, Container, Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CartCard from "./CartCard";

const PetMyCart = () => {
  return (
    <div style={{ height: 540 }}>
      <Row>
        <Container fluid style={{ margin: 10 }}>
          <Form inline style={{ justifyContent: "space-between" }}>
            <h2 style={{ color: "#696969", fontWeight: "bold" }}>My Cart</h2>
            <Button
              style={{
                backgroundColor: "#3BD2E3",
                borderRadius: 30,
                borderColor: "#FFFFFF",
              }}
            >
              Go to Shop
            </Button>
          </Form>
        </Container>
      </Row>
      <Container
        fluid
        style={{
          backgroundColor: "#FFFFFF",
          height: 620,
          width: 1450,
          borderRadius: 30,
          padding: 10,

        }}
      >
        <Row
          style={{
            justifyContent: "space-around",
            color: "#696969",
          }}
        >
          <h5 style={{ fontWeight: "bold" }}>Product</h5>
          <h5 style={{ fontWeight: "bold" }}>Price</h5>
          <h5 style={{ fontWeight: "bold" }}>Quantity</h5>
          <h5 style={{ fontWeight: "bold" }}>Total</h5>
          <h5 style={{ fontWeight: "bold" }}>Action</h5>
        </Row>
        <Container
          fluid
          style={{
            height: 550,
            backgroundColor: "#EFF1F7",
            padding: 5,
            borderRadius: 30
          }}
        >
          <CartCard />
        </Container>
      </Container>
      <Row style={{ justifyContent: "flex-end", marginTop: 5 }}>
        <h3 style={{ color: "#696969", fontWeight: "bold" }}>
          Reservation Time: 12 hrs
        </h3>
      </Row>
    </div>
  );
};

export default PetMyCart;
