import React from "react";
import { Form, Button, Nav, Image, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../Images/assets/logo.png";

const ForgetEmail = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        // backgroundColor: "#F1F9FC",
        marginTop: 200,
      }}
    >
      <Form>
        <Image src={Logo} />
        <h1 style={{ color: "#0A94A4", fontWeight: "bold" }}>
          Forgot Password
        </h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Button
          style={{
            backgroundColor: "#3BD2E3",
            paddingLeft: 150,
            paddingRight: 150,
            borderColor: "#FFFFFF",
          }}
          type="submit"
          href="/forgetCode"
        >
          Verify
        </Button>
        <p>
          Have an account ?<Nav.Link href="/login">Login</Nav.Link>
        </p>
      </Form>
    </div>
  );
};

export default ForgetEmail;
