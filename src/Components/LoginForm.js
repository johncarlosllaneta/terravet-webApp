import React, { useState } from "react";
import { Button, Form, Alert, Nav, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logo from "../../src/Images/assets/logo.png";
import { IoChevronBack } from "react-icons/io5";
import { useCookies } from "react-cookie";
import { hostUrl } from "../Components/Host";

function LoginForm() {
  const [alertLogin, setAlertLogin] = useState("");
  const [idx, setIdx] = useState("");
  const [variant, setVariant] = useState("");
  const [display, setdisplay] = useState("none");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const submitRegister = (event) => {
    if (email !== "" && password !== "") {
      Axios.get(`${hostUrl}/api/login`, {
        params: {
          email: email,
          password: password,
        },
      })
        .then((response) => {
          if (response.data.message === "Correct") {
            localStorage.setItem("ajwt", response.data.accessToken);
            localStorage.setItem("rjwt", response.data.refreshToken);
            localStorage.setItem("isLogin", true);
            localStorage.setItem("role", response.data.role);
            if (response.data.role === 2) {
              localStorage.setItem("vetStatus", response.data.vetStatus);
              localStorage.setItem("id", response.data.id);
            }
            window.location.replace("/");
          } else if (response.data.message === "Wrong password!") {
            setAlertLogin(
              "The username and password you entered did not match our records. Please double-check and try again."
            );
            setVariant("danger");
            setIdx("3");
            setdisplay("block");
          } else if (response.data.message === "User doesn't exist...") {
            setAlertLogin(
              "The username and password you entered did not match our records. Please double-check and try again."
            );
            setVariant("danger");
            setIdx("3");
            setdisplay("block");
          }
        })
        .catch((err) => alert(err));
      event.preventDefault();
    }
  };

  return (
    <div style={{ marginTop: "5%" }}>
      <a
        href="/"
        className="mb-5 ml-5"
        style={{ textDecoration: "none", float: "left", fontSize: 20 }}
      >
        <IoChevronBack />
        Back
      </a>
      <br></br>
      <br></br>
      <Image src={logo} className="mr-5" />
      <h1
        style={{
          textAlign: "center",
          fontSize: 50,
          color: "#0A94A4",
          fontWeight: "bold",
          marginLeft: "9%",
        }}
      >
        Sign In
      </h1>

      <Alert
        className="ml-4"
        style={{ width: "100%", display: { display } }}
        key={idx}
        variant={variant}
      >
        {alertLogin}
      </Alert>

      <Form
        style={{ width: "50%", marginLeft: "30%" }}
        onSubmit={submitRegister}
      >
        <Form.Group style={{ textAlign: "left" }}>
          <Form.Control
            style={{ height: 50, backgroundColor: "white" }}
            type="email"
            placeholder="Email Address"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group style={{ textAlign: "left" }}>
          <Form.Control
            style={{ height: 50, backgroundColor: "white" }}
            id="inputPassword"
            type="password"
            placeholder="Password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Row>
          <Col style={{ fontSize: 13, textAlign: "left", padding: 0 }}>
            <Nav>
              <Nav.Link href="/forgetEmail">Forgot Password ?</Nav.Link>
            </Nav>
          </Col>
        </Row>

        <Button
          variant="primary"
          type="submit"
          style={{
            backgroundColor: "#0A94A4",
            width: "100%",
            height: "100%",
            borderRadius: 5,
            borderColor: "white",
            fontWeight: "bold",
            fontSize: 15,
            textAlign: "center",
          }}
        >
          LOGIN
        </Button>

        <hr></hr>

        <Col style={{ textAlign: "center" }}>
          <p>
            Haven't an account? <a href="/register">Register</a>
          </p>
        </Col>
      </Form>
    </div>
  );
}

export default LoginForm;
